// Program to add two numbers

let num1 = 5;
let num2 = 10;

let sum = num1 + num2;

console.log("The sum is: " + sum);



// 1. Variables
const favoriteColor = "Red";
let heightInCm = 165;
const likesPizza = true;

console.log("Favorite Color:", favoriteColor);
console.log("Height:", heightInCm, "cm");
console.log("Likes Pizza:", likesPizza);

// 2. Sum function
function sum(a, b) {
    return a + b;
}
console.log(sum(5, 10)); 
console.log(sum("5", 10)); // String concatenation happens

// 3. Sum function with auto conversion
function sumConverted(a, b) {
    return Number(a) + Number(b);
}
console.log(sumConverted("7", "3")); // 10

// 4. Voting check
function canVote(age) {
    return age >= 18;
}
console.log("Can vote:", canVote(20));

// 5. Even or odd check
function checkEvenOdd(num) {
    if (num % 2 === 0) {
        console.log(`${num} is even`);
    } else {
        console.log(`${num} is odd`);
    }
}
checkEvenOdd(23);

// 6. Sum from 1 to 10 using loops
function sumNumbers() {
    let totalFor = 0;
    for (let i = 1; i <= 10; i++) {
        totalFor += i;
    }
    console.log("Sum using for loop:", totalFor);

    let totalWhile = 0;
    let j = 1;
    while (j <= 10) {
        totalWhile += j;
        j++;
    }
    console.log("Sum using while loop:", totalWhile);
}
sumNumbers();

// 7. Greet user with name and age
function greetByNameAndAge(name, age) {
    console.log(`Hello ${name}, you are ${age} years old`);
}
greetByNameAndAge("Aditi", 22);

// 8. Greet with title based on gender
function greetUser(user) {
    if (!user || !user.gender || !user.name || !user.age) {
        console.log("Invalid user data");
        return;
    }

    let title = "Mx.";
    if (user.gender.toLowerCase() === "male") {
        title = "Mr.";
    } else if (user.gender.toLowerCase() === "female") {
        title = "Mrs.";
    }
    console.log(`Hi ${title} ${user.name}, your age is ${user.age}`);
}
greetUser({ name: "Aditi", age: 21, gender: "female" });

// 9. Filter even numbers
function getEvenNumbers(numbers) {
    return numbers.filter(num => num % 2 === 0);
}
console.log(getEvenNumbers([1,2,3,4,5,6,7,8,9,10]));

// 10. Filter users older than 18
function getAdultUsers(users) {
    return users.filter(user => user.age > 18);
}
const people = [
    { name: "aditi", age: 21 },
    { name: "sakshi", age: 14 },
    { name: "meera", age: 23 }
];
console.log(getAdultUsers(people));

