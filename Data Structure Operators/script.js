'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
// const weekdays = ['mon', 'tue', 'wed', 'thur', 'fri', 'sat', 'sun'];

// const openingHours = {
//   [weekdays[3]]: {
//     open: 12,
//     close: 22,
//   },
//   [weekdays[4]]: {
//     open: 11,
//     close: 23,
//   },
//   [`day-${2 + 4}`]: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  //ES6 Opening enhanced object literals
  // openingHours,
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelicry: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${[
        this.mainMenu[mainIndex],
      ]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta ${ing1}, ${ing2}, ${ing3}`);
  },
  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

restaurant.orderDelicry({
  time: '22:30',
  address: 'Via del Sole,21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelicry({
  address: 'Via del Sole, 21',
  starterIndex: 1,
});

const [first, , second] = restaurant.categories;
console.log(first, second);

// Switching Variables
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

//Switching method 2
[main, secondary] = [secondary, main];
console.log(main, secondary);

//Function returns array & desruct into different variables
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

//Nested array
const nested = [2, (4)[(5, 6)]];
const [i1, , j1] = nested;
console.log(i1, j1);

//Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[3];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

// Destructure objects
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// Changing property names
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

//Setting default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// //Nested arrays
// const {
//   fri: { open: cp, close: cl },
// } = openingHours;
// console.log(op, cl);

//Mutating variables whilst structuring objects
// let a1 = 111;
// let b1 = 999;
// const obj = { a1: 23, b1: 7, c: 14 };
// ({ a1, b1 } = obj);
// console.log(a1, b1);

// //Indivdual
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// Spread Operator
const arr2 = [7, 8, 9];
const badNewsarr = [1, 2, arr2[0], arr2[1], arr2[2]];
console.log(badNewsarr);

const newArr = [1, 2, ...arr2];
console.log(newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

//Use cases
//Copy array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

//Join 2 arrays
const menu3 = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu3);

// Iterables
const str = 'Usamah';
const letters = [...str, '', 'S.'];
console.log(letters);
console.log(...str);

const ingredients = [
  prompt('Lets make pasta! Ingredient 1?'),
  prompt('Lets make pasta! Ingredient 1?'),
  prompt('Lets make pasta! Ingredient 3?'),
];
console.log(ingredients);

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);

//Objects
const newRestaraunt = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaraunt);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);

// 1) Destructuring

//Rest patterns and Parameters
// Spread, because on right side of = operator
const arr3 = [1, 2, ...[3, 4]];

const [a4, b4, ...others] = [1, 2, 3, 4, 5];
console.log(a4, b4, others);

const [pizza, , rissoti, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, rissoti, otherFood);

//Objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

//Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x4 = [23, 5, 7];
add(...x4);

restaurant.orderPizza('Mushrooms', 'Onion', 'Olive', 'Spinach');
restaurant.orderPizza('mushrooms');

//Short circuiting

console.log('----OR---');
//Use Any data type, return any data type, short-circuiting
console.log(3 || 'Usamah');
console.log('' || 'Usamah');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23 || null);

restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('-----AND-----');

console.log(0 && 'Usamah');
console.log(7 && 'Usamah');

console.log('Usamah' && 23 && null && 'Hello');

//Practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', ' spinach');

//Nullish Coalescing Operator
restaurant.numGuests = 0;
const guests3 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests3);

const guestCorrect2 = restaurant.numGuests ?? 10;
console.log(guestCorrect2);

//Looping arrays: The for of Loop
const menu4 = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menu4) console.log(item);

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el[1]}`);
}

// Enhanced object literals

// Optional Chaininig
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon).open;

// WITH optional chaining
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);

//Example
// const days = ['mon', 'tue', 'wed', 'thur', 'fri', 'sat', 'sun'];
// for (const day of days) {
//   console.log(day);
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day}, we open at ${open}`);
// }

//Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisoto?.(0, 1) ?? 'Method does not exist');

//Arrays
const users = [{ name: 'Usamah', email: 'usamahsuhaib1997@gmail.com' }];
console.log(users[0]?.name) ?? 'User array empty';

if (users.length > 0) console.log(users[0].name);
else console.log('user array empty');

//Looping Objects: Object Keys, Values and Entries
// const properties = Object.keys(openingHours);
// console.log(properties);

// let openStr = `We are open on ${properties.length} days`;

// for (const day of Object.keys(openingHours)) {
//   openStr += `${day}, `;
// }
// console.log(openStr);

//Property Values
// const values = Object.values(openingHours);
// console.log(values);

// //Entire object
// const entries = Object.entries(openingHours);
// // console.log(entries);

// //key value
// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// }

//Sets
const ordersSet = new Set(['Pasta', 'Pizza', 'Risotto', 'Pasta', 'Pizza']);
console.log(ordersSet);

console.log(new Set('Usamah'));

//Size of set
console.log(ordersSet.size);

//Cetain element in set
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));
ordersSet.add('Garlic Bread');
ordersSet.delete('Rissoto');
// ordersSet.clear();
console.log(ordersSet);

for (const order of ordersSet) console.log(order);

//Example
const staff = ['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

console.log(new Set('usamahahmed').size);

//Maps
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));

rest
  .set('categories', ['italian', 'pizzeria', 'organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, ' We are open :D')
  .set(false, 'We are closed :(');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

//Map contains certain key
// console.log(rest.has('categories'));
// rest.delete(2);
// console.log(rest);
// console.log(rest.size);
// rest.clear();

// const arr = [1, 2];
// rest.set([arr], 'Test');
// rest.set(document.querySelector('h1'), 'Heading');

// console.log(rest);
// console.log(rest.size);

// console.log(rest.get([1, 2]));

//Maps: Iteration
const question = new Map([
  ['question', 'What is the best programming languare in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'Try again'],
]);
console.log(question);

//Convert object to map
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

//Quiz App
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

const answer = Number(prompt('Your answer'));
console.log(answer);

question.get(question.get('correct')) === answer;

// Convert map to array
console.log([...question]);
console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);

//Working with Strings

const airline = 'Tap Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('portugal'));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  //B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got middle seat');
  else console.log('You got lucky');
};
checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('usamah'));
console.log(typeof new String('usamah'));

console.log(typeof new String('usamah').slice(1));

//Strings part2

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

//Fix capitilzation in name
const passenger = 'uSaMAH';
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

//Comparing email
const email = 'hello@usamah.io';
const loginEmail = '    Hello@Usamah.Io \n';

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);

const normalisedEmail = loginEmail.toLowerCase().trim();
console.log(normalisedEmail);
console.log(email === normalisedEmail);

//replacinh
const priceGB = ' 299,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';
console.log(announcement.replace('door', 'gate'));
// console.log(announcement.replaceAll('door', 'gate'));

console.log(announcement.replace(/door/g, 'gate'));

// Booleans
const plane2 = 'Airbus A320neo';
console.log(plane2.includes('A320'));
console.log(plane2.includes('Boeing'));
console.log(plane2.startsWith('Air'));

if (plane2.startsWith('Airbus') ** plane2.endsWith('neo')) {
  console.log('Part of the NEW Airbus family');
}

//Practice exericse
const checkBaggage = function (items) {
  const baggage = items;
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome aboard');
  }
};
checkBaggage('I have a laptop, some food and a pocket knife');
checkBaggage('Sock and camera');
checkBaggage('Got some snacks and a gun for protection');

//Split and join
console.log('a+very+nice+string'.split('+'));
console.log('Usamah Ahmed'.split(' '));

// const newName = ([firstName, lastName] = 'Usamah Ahmed'.split(' '));
// ['Mr.', firstName, lastName.toUpperCase()].join(' ');
// console.log(newName);

const capitiliseName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const word of names) {
    // namesUppper.push(n[0].toUpperCase + n.slice(1));
    namesUpper.push(word.replace(word[0], word[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};

capitiliseName('usamah suhaib ahmed');
capitiliseName('ubaid ahmed');

// padding
const message = 'Go to gate 23!';
console.log(message.padStart(25, +'+').padEnd(30, '+'));
console.log('Usamah'.padStart(30, '+').padEnd(30, '+'));

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(232222));
console.log(maskCreditCard('11111231'));

//Repeat
const message2 = 'Bad weather... All departures delayed...';
console.log(message2.repeat(5));

const planesInLine = function (n1) {
  console.log(`There are ${n1} planes in line ${':)'.repeat(n1)}`);
};
planesInLine(5);
planesInLine(2);
planesInLine(12);

// String methods in practice
const flights1 =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

console.log(flights1.split('+'));

const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights1.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? ':)' : ''}${type.replaceAll(
    '_',
    ''
  )} ${getCode(from)} ${getCode(to)} (${time.replace(':', 'h')})`.padStart(36);
  console.log(output);
}
