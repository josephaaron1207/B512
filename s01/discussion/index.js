console.log("Hello Wordl!");


// Comments in JS:

	// Comments are part of the code that gets ignored by the language

	/*
		There are two types of comments:
			1. Single-line comment - denoted by two slashes.
				Windows/Linux: Ctrl + /
				MacOS: cmd + /
			2. Multi-line comment - denoted by slashes and asterisks
				Windows/Linux: Ctrl + Shift + /
				MacOS: cmd + shift + /
	*/


// [SECTION] Declaring Variables

/*
	We can declare variables using the "let" keyword
	let - Declares a variable which value can be updated anytime.
*/

// Syntax:
// let variableName;

let myVariable;
console.log(myVariable);

/*
	Note:
		The result is undefined because we don't have an date stored in our variable.
		Undefined is the data javascript adds to variables that does not contain data.

*/

// [SECTION] Assignment Operator
//  In JS, "=" is an assignment operator. This allows us to add/assign value in variables.

myVariable = "Added Value";
console.log(myVariable);

// [SECTION] Variable Initialization
// We can declare and assign values to our variable using the assignment at the same time.

let myName = "Joseph";
console.log(myName);

// Variables must be eclared first before they are used.


let hello;
console.log(hello);


//  [SECTION] Constant variables

const PI = 3.1416;
console.log(PI);

//  [SECTION] Adding Values to Variables and Initialization

/*
	Guides in writing variables:
	 1. Variable names should start in lowercase character, use camelCase for multiple words.
	 2. Variable names should be indicative (or descriptive) of the value being stored to avoid confusion.
*/

// Best practices in naming variables

// 1. Descriptive

// let firstName = "Michael"; // good
let pokemon = 25000; //bad example

// 2. Start with a lowercase letter

let FirstName = "Michael"; // bad
let lastName = "Santos"; //good

// let first_name = snake casing
// let first-name = kebab casing

// 3. Do not add spaces

// let first name = "Mike"; // bad

let emailAddress = "mike@gmail.com"; // good


// 4. Underscore sample / snake_casing

let product_description = "lorem ipsum"; // good
let product_id = '2500001250525'; // good

// 5. Avoid using reserved keywords

// conts let = "hello"; this resuts to a syntax error.

const letGreetings = "hello"; // although this may work, but it's still not a good practice.
console.log(letGreetings);

let greeting = "hello, Mike!"; //good


// [SECTION] 3s Data Types

// Boolean
let isMarried = false;
let isGoodConduct = true;
console.log(isMarried);
console.log(isGoodConduct);



// Numbers

	// Integers / Whole numbers
	let headCount = 16;
	console.log(headCount);

	// Decimal Numbers / Fractions
	let grade = 98.7;
	console.log(grade);

//  Strings (Single or double quote is acceptable)

	let myString = " ";
	let song = "Party in the USA";
	let singer = "Miley Cyrus";
	console.log(myString);
	console.log(song);
	console.log(singer);

// Arrays

// Syntax:
/*
	let/const arrayName = [elementA, elementB, elementC, ...]
*/

	let grades = [98.7, 92.1, 90.2, 94.6];
	let teamEugene = ["Eugene", "ALfred", "Dennis", "Vincent"]

	console.log(grades);
	console.log(teamEugene);

// Objects

// Syntax
/*
	let/const objectName = {
		propertyA: valueA,
		propertyB: valueB
	}

*/

let person = {
	fullName: "Juan Dela Cruz",
	age: 35,
	isMarried: false,
	address: {
		houseNumber: "345",
		city: "Manila"
	}
};

console.log(person);
