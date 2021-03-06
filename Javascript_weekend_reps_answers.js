

/* 
SECTION I 

B STRINGS 

1 - 
Create a variable called firstVariable.
Assign it the value of the string "Hello World"
Change the value of this variable to some number.
Store the value of firstVariable in a new variable called secondVariable
Change the value of secondVariable to any string.
What is the value of firstVariable?
*/


let firstVariable = "Hello World"; 

firstVariable = 5;

let secondVariable = firstVariable;

secondVariable = "This is the new value of this variable"

console.log(secondVariable);
// The value is " This is the new Value of this variable"


/* 
2 -
Create a variable called yourName and set it equal to your name as a string. 
Then, write an expression that takes the string "Hello, my name is " and the variable yourName so that it returns a new string with them concatenated.
*/

let yourName = "Felipe Gonzalez";

console.log("Hello my name is " + yourName);

/*

C. Booleans
Using the provided variable definitions, replace the blanks so that all log statements print true in the console. 
Answers should be all be valid JS syntax and not weird things that don't make sense but happen to print true to the console.
*/

  const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';

  console.log(a<b);

  console.log(c>d);
  
  console.log('Name' == 'Name');
 

  // FOR THE NEXT TWO, USE ONLY && OR ||
  console.log(true||false);

  console.log(false & false & false & false & false || true);

  console.log(false == false)
  

  console.log(e === 'Kevin');
  
  console.log(a < b || c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression)

  console.log(a * a == d); // note: the answer is a simple arithmetic equation, not something "weird"
 
  console.log( 48 == '48');
  

/*
D. The farm

Declare a variable animal. Set it to be either "cow" or something else.
Write code that will print out "mooooo" if the it is equal to cow.
Change your code so that if the variable animal is anything other than a cow, it will print "Hey! You're not a cow."

*/

let animal = "cow";

if (animal == "cat") {
console.log("moooooo");
}
else {
 console.log(" Hey! You're not a cow."); 
};

/*
E. Driver's Ed

Make a variable that holds a person's age. Be semantic.

Write code that will print out "Here are the keys!", if the age is 16 years or older, 
or,
if the age is younger than 16, a message should print "Sorry, you're too young."

*/

let personAge = 12; 

if (personAge >= 16 ) { 
console.log( "Here are the keys!");
}

else { 
console.log( "Sorry, you're too young" );
};

/* Section II Loops 

A. The basics
Write a loop that will print out all the numbers from 0 to 10, inclusive.

Write a loop that will print out all the numbers from 10 up to and including 400.

Write a loop that will print out every third number starting with 11 and going no higher than 4000.
*/

for ( let a = 0; a <= 10; a++ ) {
	console.log(a); 
};

for ( let b = 10; b <= 400; b++) {
	console.log(b); 
	};

for (let c = 11; c <=4000; c+=3) { 
	console.log(c);
	};

/*
B. Get even
Print out the numbers that are within the range of 1 - 100.

Adjust your code to add a message next to even numbers only that says: "<-- is an even number".
*/

for (let d = 11; d<=4000 ; d += 3)

{ 
	if (d % 2 == 0 & d <=100) 
	console.log  (d + '<-- is an even number');
}

/* 
C Give Me Five 

For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five.
*/

for (let e = 11; e<=4000 ; e += 3)
	{ 
		if (e % 5 ===0 & e<=100)
		console.log(" I found a " + e + " High Five!");
}

//Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three.

for (let f = 10; f<=4000 ; f += 5)
	
	{ 
		if (f % 5 === 0 & f <= 100)
		console.log(" I found a " + f + ". High Five!");
		if (f % 3 === 0 & f <= 100)
			console.log(" I found a " + f + ". Three is a crowd");
}

/*
D. Savings account
Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
*/

/* function sum(arr){

	let bank_account = 0; 
	for( let i = 0; i<arr.length; i++){

		bank_account = bank_account + arr[i]; 
	}  
	console.log(bank_account); 
}
sum([1,2,3,4,5,6,7,8,9,10]); 

/*
You got a bonus! Your pay is now doubled each week. 
Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
*/

/*function sum1() {

	let bank_account = 0; 
	for( let i = 0; i<= 100; i++){

		bank_account += i; 
	}  
		bank_account = bank_account * 2; 

	console.log(bank_account); 
}
sum1(); 

/* 
E. Multiples of 3 and 5
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.
*/ 

function sumOfMultiples() { 

//let i = 0  
let sum = 0; 

for (let i = 3; i < 1000; i++){ 
	if (i % 3 === 0 || i % 5 === 0)

		sum += i;
} 

	return sum; 
}

console.log (sumOfMultiples()); 

/* 
SECTION III Arrays and Control Flow

A. Talk About It
1- What are the things in arrays called? 
	Values or properties 
2- Do Arrays guarantee those things will be in order? 
	No
3- Real life applications of arrays: 
	Any sort of list like a log in user name list or a set of phone numbers or a list of names.. 

B. Create an array that contains 3  quotes and store it in a value called quotes. */ 

let quotes = ["You is Kind", "You is Smart", "You is important"];

/* Accessign Elements

*/
//Given the following array 
const randomThings = [1, 10, "Hello", true]

//How do you access the 1st element in the array?
 //You access an array element by referring to the index number
console.log(randomThings[0]);


//Change the value of "Hello" to "World".

randomThings[2] = "World";
console.log(randomThings[2]);
//Check the value of the array to make sure it updated the array. How? Why, yes! console.log();



/*
D. Change values
Given the following array */

const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]

//What would you write to access the 3rd element of the array?
ourClass[2];
console.log(ourClass[2]);
//Change the value of "Github" to "Octocat"
ourClass[4] = "Octocat"
//Add a new element, "Cloud City" to the array.
ourClass.push("Cloud City");
console.log(ourClass);




/*
E. Mix it up

Given the following array */

const myArray = [5, 10, 500, 20]; 
//Add the string "Egon" to the end of the array. Add another string of your choice to the end of the array.
myArray.push("Egon", "More Things");
console.log(myArray);

//Remove the 5 from the beginning of the array.
myArray.shift();
console.log(myArray);

//Add the string "Bob Marley" to the beginning of the array.

myArray.unshift("Bob Marley");
console.log(myArray); 

//Remove the string of your choice from the end of the array.
myArray.pop([5]); 
console.log(myArray);

//Reverse this array using Array.prototype.reverse(). Did you mutate the array? 
// What does mutate mean? --> It means I had to create a new variable to state the reversed array. 
//Did the .reverse() method return anything?
myReversedArray = myArray.reverse();
console.log(myReversedArray); 

/* F. Biggie Smalls

Create a variable that contains an integer.

Write an if ... else statement that:

console.log()s "little number" if the number is entered is less than 100

console.log()s big number if the number is greater than or equal to 100.
*/

let myIntVar = 99; 

if (myIntVar < 100) {
	console.log("little number"); 
} 
else if (myIntVar >= 100) { 
console.log("big number")}

/*
G. Monkey in the Middle
Write an if ... else if ... else statement:

console.log() little number if the number entered is less than 5.

If the number entered is more than 10, log big number.

Otherwise, log "monkey".*/

let testVar = 7; 

if (testVar< 5) {
	console.log("little number");
}

else if (testVar > 10) { 
	console.log("big number");
	}
else { 
	console.log("monkey");
}

/*
H. What's in Your Closet?
Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript.
?*/

const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];

// 1- What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, 
//log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.

console.log("Krystyn is rocking that " + kristynsCloset[2] + " today!"); 

//Kristyn just bought some sweet shades! Add "raybans" to her closet after "yellow knit hat"

kristynsCloset.splice(6, 0, "raybans");
console.log(kristynsCloset);


//Kristyn spilled coffee on her hat... modify this item to read "stained knit hat" instead of yellow.

kristynsCloset [5] = "stained knit hat"; 

console.log(kristynsCloset);

//Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirts array

console.log(thomsCloset[0] [0]);

//In the same way, access one item from Thom's pants array.

console.log(thomsCloset[1] [1]); 

//Access one item from Thom's accessories array
console.log(thomsCloset[2] [2]); 

//Log a sentence about what Thom's wearing. 
//Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"

console.log("Thom is lookinng fierce in a " + thomsCloset [0] [0] + ", " + thomsCloset [1] [1] + " and " + thomsCloset [2] [2] ); 

//Get more specific about what kind of PJs Thom's wearing this winter. 
//Modify the name of his PJ pants to Footie Pajamas

thomsCloset [1] [2] = "Footie Pajamas"; 
console.log(thomsCloset [1]);

// Finished :) 




