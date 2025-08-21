/*🔹 What is Middleware?
In Express.js, middleware is any function that sits between the incoming request and the final response.
It has access to:
req (request object)
res (response object)
next() (function to move to the next middleware/route) 

In Express.js, middlewares can be:
Application-level (global) → runs for all routes.
Route-level (route-specific) → runs only for specific routes.
Router-level → attached to express.Router().
Built-in/third-party middlewares (like express.json(), cors, morgan, etc.).
*/

//Application-level middlewares- run on all routes(global)
//we use app.use() for this:

const express= require("express");
const app = express();

app.use((req , res , next) => {
    console.log("global middleware -> Request URL:", req.url)
    next();

});

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/about",(req,res)=>{
    res.send("about Page");
});

app.listen(3000,()=>console.log("Server running on port 3000"));
//✅ This middleware runs on every request (/, /about, etc.).


/*🔹 2. Route-level Middleware
👉 Middleware attached to specific routes only.
You pass them as arguments to the route.*/

function logRequest(req,res,next){
    console.log("request made to:",req.url);
    next();
}
// Only runs for this route
app.get("/special", logRequest, (req, res) => {
  res.send("This route has route-specific middleware!");
});
//✅ Only /special will trigger logRequest.


/*🔹 3. Router-level Middleware
👉 Similar to route-level, but applied to a group of routes using express.Router().*/

const router = express.Router();

// Middleware applied to all routes in this router
router.use((req, res, next) => {
  console.log("Router Middleware ->", req.url);
  next();
});

router.get("/profile", (req, res) => res.send("User Profile"));
router.get("/settings", (req, res) => res.send("User Settings"));

// Mount router
app.use("/user", router);

//✅ Visiting /user/profile or /user/settings runs the router middleware.


/*🔹 4. Built-in Middleware
👉 Express already provides some common middlewares:
express.json() → parses JSON request body.
express.urlencoded() → parses form data.
express.static() → serves static files. */


app.use(express.json()); // Parse JSON body
app.use(express.urlencoded({ extended: true })); // Parse form data
app.use(express.static("public")); // Serve static files from /public

//✅ If you send JSON data in POST, it gets parsed automatically.

/*🔹 5. Third-party Middleware
👉 Install and use libraries like morgan, cors, helmet, etc. */

const morgan = require("morgan");
const cors = require("cors");

app.use(morgan("dev")); // Logging
app.use(cors()); // Enable CORS

//✅ Helps add extra features without writing from scratch.

/*🔹 6. Error-handling Middleware
👉 Special middleware to catch errors.
⚡ Must have 4 parameters (err, req, res, next).*/

// Normal route
app.get("/error", (req, res) => {
  throw new Error("Something broke!");
});

// Error handler middleware (MUST be last)
app.use((err, req, res, next) => {
  console.error("Error:", err.message);
  res.status(500).send("Internal Server Error");
});
//✅ Any error will be passed here automatically.

/*🔹7. Custom Middleware
👉 You create your own logic (like authentication, logging, etc.).*/
function authenticate(req, res, next) {
  if (req.query.token === "123") {
    next();
  } else {
    res.status(403).send("Forbidden: Invalid Token");
  }
}

app.get("/dashboard", authenticate, (req, res) => {
  res.send("Welcome to Dashboard");
});
//✅ Any error will be passed here automatically.


