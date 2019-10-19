

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
	if ( d % 2 == 0 & d <=100) 
	console.log  (d + '<-- is an even number');
}











