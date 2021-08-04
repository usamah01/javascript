'use strict';
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  //   ES5;
  //   numPassengers = numPassengers || 1;
  //   price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};
createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);
createBooking('LH123', undefined, 1000);

//How passing arugments works: Values vs Reference
const flight = 'LH234';
const usamah = {
  name: 'Usamah Ahmed',
  passport: 2131290,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 32130922) {
    alert('Checked in');
  } else {
    alert('Wrong passport!');
  }
};
// checkIn(flight, usamah);
// console.log(flight);
// console.log(usamah);

// const flightNum = flight;
// const passenger = usamah;

// const newPassport = function (person) {
//   person.passport = Math.trunc(random() * 1000000000000000);
// };
// newPassport(usamah);
// checkIn(flight, usamah);

// Functions Accepting Callback Functions
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};
const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

//Higher order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};
transformer('Javascript is the best', upperFirstWord);
transformer('Javascript is the best', oneWord);

const high5 = function () {
  console.log(':)');
};
document.body.addEventListener('click', high5);

['Jonas', 'Martha', 'Adam'].forEach(high5);

//Functions returning functions
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Usamah');
greeterHey('Michael');

greet('Hello')('Usamah');

//The call and apply methods

const greet2 = greeting => name => console.log(`${greeting} ${name}`);
greet2('Hi')('Usamah');

//The call and apply methods
// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   booking: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this}.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.booking({ flight: `${this.iataCode}${flightNum}`, name });
//   },
// };
// lufthansa.book(239, ' Usamah Ahmed');

// lufthansa.book(635, 'Michal Owen');

// const eurowings = {
//   name: ' Eurowings',
//   iataCodeL: 'EW',
//   booking: [],
// };

// const book = lufthansa.book;

// //Does not work
// // book(23, 'Sarah Williams');
// // Call method
// book.call(eurowings, 23, 'Sarah Williams');
// console.log(eurowings);

// book.call(lufthansa, 239, 'Mary Cooper');
// console.log(lufthansa);

// const swiss = {
//   airline: 'Swiss Air Lines',
//   iataCode: 'LX',
//   bookings: [],
// };

// book.call(swiss, 583, 'Mary Cooper');
// console.log(swiss);

// //Apply method
// const flightData = [583, 'George Cooper'];
// book.apply(swiss, flightData);
// console.log(swiss);

// book.call(swiss, ...flightData);

// //Bind method
// const bookEW = book.bind(eurowings);
// const bookLH = book.bind(lufthansa);
// const bookLX = book.bind(swiss);
// bookEW(23, 'Steven Williams');

// const bookEW23 = book.bind(eurowings, 23);
// bookEW23('Usamah Ahmed');
// bookEW23('Martha Cooper');

// // With Event Listeners

// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   console.log(this);

//   this.planes++;
//   console.log(this.planes);
// };
// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// //Partial application
// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 220));

// const addVat = addTax.bind(null, 0.23);
// // addVAT = value => value + value * 0.23

// console.log(addVat(100));
// console.log(addVat(23));

// const addTaxRate = function (rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// };

// const addVat2 = addTaxRate(0.23);

// console.log(addVat2(100));

// console.log(addVat2(23));

//Immediately invoked function expression
// const runOnce = function () {
//   console.log('This will never run again');
// };
// runOnce();

// (function () {
//   console.log('This will never run again');
//   const isPrivate = 23;
// })();
// console.log(isPrivate);

// (() => console.log('This will never run again'));
// ();

// {
//   const isPrivate = 23;
//   var NotPrivate = 46;
// }
// console.log(NotPrivate);

//Closures
const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();
booker();
booker();
booker();

// console.dir(f);

//More closure examples
//Example 1
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
console.dir(f);

//Reassign f function
h();
f();
console.dir(f);

//Example 2 - Timer
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 group, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait}seconds`);
};

const perGroup = 1000;
boardPassengers(180, 3);
