(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();

// Function piece of code that can be reused, like a variable but hold 1 or more complete linkes of code

function logger() {
  //function body
  console.log('My name is Usamah');

  // logging and return is completely different, logging does not store a variable but return does
}
// invoking, running, call the function
logger();
logger();
logger();

//We use data to be passed in a function, can return & reuse data
//Use descriptive names
//Parameter are variables specific to that function, represent input data of that function
function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} and ${oranges}`;
  // return any value from function
  return juice;
}
// spevify actual values as arguments for those parameters
// called the fruitProcessor with 2 arguments of the apples and oranges parameter,
// save into a variable
const appleJuice = fruitProcessor(2, 3);
console.log(appleJuice);
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

//Functions allow us to write more maintable code, rather than code over and over again

const num = Number('23');

//Functions Declarations vs Functions Expressions
// Each function works in different way

// Function declaration - function keyword use to declare a variable
// input is a parameter
const age1 = calcAge1(1997);
function calcAge1(birthYear) {
  return 2021 - birthYear;
}

const age2 = calcAge1(1998);

// parameter is placeholder, argument is value of the placeholder

//Function expression, function without a name, aka annymous function,stored in a variable, expressions produce values

const calcAge2 = function (birthYear) {
  return 2021 - birthYear;
};
const age3 = calcAge2(1997);
console.log(age1, age2, age3);

//Difference, can call function declarations before called in the code, because of hoisting
