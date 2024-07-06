// import { apiKey } from "./utils.js";
// console.log(apiKey);

// varibles
let userMessage = "Exit the program?";
const userName = "Abuu"
console.log(userMessage);
console.log(userName);

// cannot reassign username
// userName = "Rama"

// Operators ( + - /)
// console.log(10 / 5);
console.log ("hello" + " world");
// equality (===)

// Functions
// function greet(userName, message) {
//     console.log(userName);
//     console.log(message);
// }
// greet("Abuu", "hi!");

// Arror Functions
// export default (userName, message) => {
//     console.log('Hello');
//     return userName + message;
// }



// if func takes one param, you can ommit the wrapping parantheses
// (userName) => {...} becomes userName => {...}

// Class in JavaScript
class User {
    constructor (name, age){
        this.name = name;
        this.age = age;
    }

    // adding methods
    greet() {
        console.log('Hi!');
    }
}

// Creating a user using the blueprint
const user1 = new User("Abuu", 23);

// Arrays

const items = ["pen", "book", "pencil"];

// index starts at 0
console.log(items[0]);


items.push("mouse");

// using findIndex
// const index = items.findIndex((item) => {
//     return item === 'book';
// })
const index = items.findIndex((item) => item === "book");


// Usage of map
const edited = items.map((item) => ({name: item}));

// Destructuring
const userNameData = ['Abuu', 'Rama'];
// const firstName = userNameData[0];
// const lastName = userNameData[1];

// You can do this instead
const [firstName, lastName] = ["Abuu", "Rama"];

// Destructuring an object
const {name, age} = {
    name: "Abuu",
    age: 23
}

//  Spread Operator
// merging
const newItems = ["calc"];

const mergedItems = [...items, ...newItems];

const extendedUser = {
    isAdmin: true,
    ...user1
}

// Control Structure
const password = prompt('Your Password');

// if statements
if (password === 'Hello'){
    // ...
    console.log('Hello works!');

}else if(password === 'hello'){
    // ...
    console.log('hello works.');
}else{
    //
    console.log("Access denied!");
}

// For loops
for (const item of items) {
    console.log(item);
}

// in javasript, you create functions that take in functions
function handleTimeout(){
    console.log("Timed Out");
}
const handleTimeout2 = () => {console.log("Timed out again!");}
setTimeout(handleTimeout, 1000); // taking in a function and time


// Reference vs Primitive Value
// primitive cant be edited(string, ints, booleans)
// when dealing with objects/arrays, the can be edited

