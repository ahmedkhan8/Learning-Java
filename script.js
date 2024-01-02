/*
// Variables

let firstName = "Ahmed";
console.log(firstName);

let ahmed_khan = 'AK';                // SOME EXAMPLES

let person = "Ahmed";

let PI = 3.1415;

let job1 = "programmer";              // Not Accurate
let job2 = "Teacher";

let myFirstJob = "Programmer";        // More Accurate Way
let myCurrentJob = "Teacher";

console.log(myFirstJob);
console.log(myCurrentJob);
*/

//------------------------------------------------------------

/*
// DATA TYPES

let javaascriptIsFun = true;            //BOOLEAN
console.log(javaascriptIsFun);

console.log(typeof true);               // (typeof) FOR CHECKING
console.log(typeof javaascriptIsFun);   // Type : Boolean
console.log(typeof 25);                 // Type : Number
console.log(typeof 'Ahmed');            // Type : String

javaascriptIsFun = 'YES!';              // Javascriptisfun = string
console.log(typeof javaascriptIsFun);

let year;
console.log(year);                      // Type : Undefined
console.log(typeof year);

year = 2007;
console.log(typeof year)               // Type : Number

console.log(typeof null);              // Type : Object (A Error)
*/

//------------------------------------------------------------

/*
//LET,CONST,VAR

var job = 'teacher';                  // VAR
job = 'programmer';

let age = 30;                         // LET
age = 29;

//const birthYear = 1991;
//birthYear = 1990;

var lastName = 'Khan';
console.log(lastName);
*/

//------------------------------------------------------------

/*
// MATH OPERATION

// const now = 2023;
// const ageAhmed = now - 2007;
// const ageAli = now - 2006;
// console.log(ageAhmed, ageAli);
// console.log(ageAhmed + 2, ageAli + 1);

const firstName = 'Ahmed';
const lastName = 'Khan'
console.log(firstName + ' ' + lastName);

//------------------------------------------------------------

// Assignment Operators

let age = 17 + 1;
age -= 1;
age *= 2;
age--;
console.log(age);
*/

//------------------------------------------------------------
/*
// COMPARISON OPERATORS

console.log(ageAhmed > ageAli);   // >, <, >=, <=
console.log(ageAli >= 18);
*/

//------------------------------------------------------------

// Coding Challange 1
/*
let markMass = 78;
let markHeight = 1.69;
let johnMass = 92;
let johnHeight = 1.95;

const BMIMark = markMass / markHeight ** 2;
const BMIJohn = johnMass / johnHeight ** 2;
const markHigherBMI = BMIMark > BMIJohn;
console.log(BMIMark, BMIJohn, markHigherBMI)
*/

//------------------------------------------------------------

//STRINGS AND TEMPLATE LITERALS
/*
const firstName = 'Ahmed';
const job = 'programmer';
const birthYear = 2006;                                           // STRING
const year = 2023;
const ahmed = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(ahmed);


const ahmedNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;     // TEMPLATE LITERALS
console.log(ahmedNew);
*/
//------------------------------------------------------------

// TAKING DECISIONS IF_ELSE

/*const age = 11;
const isOLdEnough = age >= 18
if (isOLdEnough) {
    console.log('Ahmed can apply for Driving License');
} else {
    console.log('Ahmed cannot apply for Driving License');
}


const marks = 85;
const passingMarks = marks >= 80 && marks <= 100;
if (passingMarks) {
    console.log('Ahmed can move to the next class');
} else {
    console.log('Ahmed cannot move to the next class');
}

const bloodPressure = 120;

if (bloodPressure < 100) {
    console.log('Your blood pressure is low.');
} else if (bloodPressure >= 100 && bloodPressure <= 130) {
    console.log('Your blood pressure is normal.');
} else {
    console.log('Your blood pressure is high.');
}
*/

//------------------------------------------------------------

//CODING CHALLENGE 2
/*
const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;

const BMIMark = markMass / markHeight ** 2;
const BMIJohn = johnMass / johnHeight ** 2;
const markHigherBMI = BMIMark > BMIJohn;
console.log(BMIMark, BMIJohn);

if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI (${BMIMark}) is higher then John's BMI (${BMIJohn}).`);
} else {
    console.log(`John's BMI (${BMIJohn}) is higher then Mark's BMI (${BMIMark}).`);
}
*/

//------------------------------------------------------------

// TYPE CONVERSION 
/*
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Ahmed'));         // ---->  Not a Number (NaN)('Ahmed' = String)
console.log(typeof NaN)

console.log(String(23), 23);       // Number to a String

// TYPE COERSION
console.log('I am ' + 23 + ' years old');
console.log('23' - '18' - 3);
console.log('23' / '2');

let n = '1' + 1;
n = n - 1;
console.log(n);
?
*/

//------------------------------------------------------------

// TRUTHY AND FALSY VALUES : 0,'EMPTY STRING', UNDEFINED, NULL, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Ahmed'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 100;
if (money) {
    console.log("Don't spent it all");
} else {
    console.log("You should get a job");
}

let height;
if (height) {
    console.log('Height is Defined');
} else {
    console.log('Height is UNDEFINED')
}

