const express = require('express');
const app = express();

app.use(express.json());

// In-memory storage
const users = [];

// Utility: generate random tokens
function generateToken() {
    const options = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let token = "";
    for (let i = 0; i < 32; i++) {
        token += options[Math.floor(Math.random() * options.length)];
    }
    return token;
}

// 🔒 Authentication middleware
function authMiddleware(req, res, next) {
    const token = req.headers.authorization;
    const user = users.find(user => user.token === token);

    if (!user) {
        return res.status(401).send({ message: "Unauthorized" });
    }

    req.user = user; // attach user object to request
    next();
}

// Signup route
app.post("/signup", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    users.push({ username, password });

    res.send({ message: "You have signed up" });
});

// Signin route
app.post("/signin", (req, res) => {
    const { username, password } = req.body;

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        const token = generateToken();
        user.token = token;
        res.send({ token });
        console.log(users);
    } else {
        res.status(403).send({ message: "Invalid username or password" });
    }
});

// ✅ Protected route using middleware
app.get("/me", authMiddleware, (req, res) => {
    res.send({
        username: req.user.username
    });
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
