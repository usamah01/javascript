'use strict';

// Primitve vs Objects
let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);


const me1 = {
    name: 'Jonas',
    age: 30,
};

const friend = me1;
friend.age = 27;
console.log('Friend:', friend);
console.log('Me', me);

// Primitive vs Objects

//Primitive Types
let lastName = ' Williams';
let oldLastName = lastName;
lastName = 'Davies';
console.log(lastName, oldLastName);


//Reference Types
const jessica = {
    firstName3: 'Jessica',
    lastName3: 'Williams',
    age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName3 = ' Davies';
console.log('Before marraige', jessica);
console.log('After marriage', marriedJessica);

// Copying Objects
const jessica2 = {
    firstName4: ' Jessica',
    lastName4: 'Willams',
    age4: 27,
    family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName4 = 'Davies';


jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');


console.log('Before marriage:', jessica2);
console.log('After marriage:', jessicaCopy);


// Scoping
function calcAge(birthYear) {
    const age = 2021 - birthYear;


    function printAge() {
        const output = `${firstName} You are ${age}, born in ${birthYear}`;
        console.log(output);

        if (birthYear >= 1981 && birthYear < + 1996) {
            var millenial = true;
            const firstName = 'Steven';



            // Reassigning outer scope's variable


            output = 'NEW OUTPUT';
            const str = ` Oh you are a millenial, ${firstName}`;

            function add(a, b) {
                return a + b;
            }


        }


        // console.log(str);
        console.log(millenial);
        // console.log(add(2, 3));
        console.log(output);
    }
    printAge();
    return age;
}

const firstName = 'Usamah';
calcAge(1997);

//This keyword
console.log(this);

const calcAge2 = function (birthYear) {
    console.log(2021 - birthYear);
    console.log(this);
}
calcAge2(1997);


const calcAgeArrow = birthYear => {
    console.log(2021 - birthYear);
    console.log(this);
}
calcAgeArrow(1997);


var firstName2 = ' Matilda';

const usamah1 = {
    firstName: 'Usamah',
    year: 1997,
    calcAge1: function () {
        console.log(this);
        console.log(2021 - this.year);

        //Solution 1
        // const self = this;
        // const isMilenial = function () {
        //     console.log(self);
        //     console.log(self.year >= 1981 && this.y <= 1996);


        const isMilenial = () => {
            console.log(this);
            console.log(this.year >= 1981 && this.y <= 1996);
        };
        isMilenial();
    },
    greet: () => {
        console.log(this);
        console.log(`Hey ${this.firstName}`);
    },
};
usamah1.greet;

usamah1.calcAge1();


const matilda = {
    year: 2017,
};

matilda.calcAge1 = usamah1.calcAge1;
matilda.calcAge1();

const f = usamah1.calcAge1;

// Arguments keyword

const addExpr2 = function (a, b) {
    console.log(arguments);
    return a + b;
}
addExpr2(2, 5);
addExpr2(3, 2, 2, 2);

var addArrow = (a, b) => {
    console.log(arguments);
    return a + b;
};
addArrow(2, 5, 8);


// Hoisting and TDZ in Practice
console.log(me);
console.log(job);
console.log(year);

var me = ' Usamah';
let job = 'teacher';
const year = 1997;

// Functions


console.log(addDecl(2, 3));
console.log(addExpr(2, 3));
console.log(addArrow);
console.log(addArrow(2, 3));

function addDecl(a, b) {
    return a + b;
}

const addExpr = function (a, b) {
    return a + b;
}

var addArrow = (a, b) => a + b;

// Example
console.log(undefined);
if (!numProducts) deleteShopppingCart();

var numProducts = 10;

function deleteShopppingCart() {
    console.log('All products deleted');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(y === window.z);







































