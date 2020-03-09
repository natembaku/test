// What's a condition?


// Suppose we want to write a program that makes a user enter a number and then displays a message
// if the number is positive. Here is the corresponding algorithm.

/* ======= Enter a number
If the number is positive
Display Message ======= */

// The message should display only if the number is positive: this means it 's subject to a condition.

// The if statement

let number = Number(prompt("Enter a number:"));
if (number > 0) {
    console.log(number + " is positive");
}

// Basic syntax: 

// if (condition) {
//     // Statements executed when the condition is true
// }

// The pair of opening and closing braces defines what is called a block of code associated with an if statement.This statement represents a test.It can result in the following: "If the condition is true, then execute the instructions contained in the code block."

// The condition is always placed in parentheses after the if.

// Conditions

// A condition is an expression that evaluates whether something is true or false.When the value of a condition is true, we say that this condition is satisfied.

// We have already studied numbers and strings, two types of data in JavaScript.Booleans are another type.This type has two possible values: true and false.

// Any expression producing a Boolean value(either true or false) can be used as a condition in an if statement.If the value of this expression is true, the code block associated with it is executed.

// Boolean expressions can be created using the comparison operators

// === Equal to
// !== Not equal to
// <    Less than
// <= Less than or equal to
// > Greater than
//  >= Greater or equal to

// Alternative Conditions

// You 'll often want to have your code execute one way when something's true and another way when something 's false.

// else

let number = Number(prompt("Enter a number:"));
if (number > 0) {
    console.log(number + " is positive");
} else {
    console.log(number + " is negative or zero");
}

/* ======== 

if (condition) {
    // code to run when condition is true
} else {
    // code to run when condition is not true
}

======= */

// Nesting Conditions

// You can go next - level and display a specific message if the entered number is zero.Use else if for a second conditional.See this example, which has a positive test case, negative test case, and a last resort of the number being zero:

let number = Number(prompt("Enter a number:"));
if (number > 0) {
    console.log(number + " is positive");
} else if (number < 0) {
    console.log(number + " is negative");
} else {
    console.log(number + " is zero");
}

// "And" operator

// Suppose you want to check if a number is between 0 and 100. You're essentially checking if it's "greater than or equal to 0" and  "less than or equal to 100."

if (number >= 0 && number <= 100) {
  console.log(number + " is between 0 and 100, both included");
}

// The && operator("and") can apply to both types of boolean values.true will only be the result of the statement if both conditions are true.

// write a program that helps people decide what to wear based on the weather using if/else

let weather = prompt("What's the weather like?");
if (weather === "sunny") {
    console.log("T-shirt, shorts and flip floppes time!");
} else if (weather === "windy") {
    console.log("Windbreaker life.");
} else if (weather === "rainy") {
    console.log("Bring that umbrella cute-py!");
} else if (weather === "snowy") {
    console.log("Just stay inside and be a couch potato, hot chocolate and Netflix!");
} else {
    console.log("Not a valid weather type");
}

//Use a switch and a break statement to create the same program.




