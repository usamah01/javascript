// Strict Mode
'use strict';

let hasDriversLicence = false;
const passTest = true;

if(passTest) hasDriversLicence = true;
if(hasDriversLicence) console.log(' I can drive');

// const interface = 'Audio';
// const private = 543;
//const if = 'nice';



// Functions
function logger(){
console.log('My name is Usamah');
}

//calling, running, invoking function, they execute the function
logger();
logger();

//Fruit Processor
function fruitProcessor(apples, oranges){
console.log(apples, oranges);
const juice = `Juice with ${apples}, and ${oranges}.`;
return juice;
}
const appleJuice = fruitProcessor (5,0);
console.log(appleJuice);


const AppleOrangeJuice = fruitProcessor(2,4);
console.log(AppleOrangeJuice);


// Functions Declarations vs Expressions
function calcAge1(birthYear){
    return 2021 - birthYear;
}
const age1 =calcAge1(1997);
console.log(age1);

//Function Expressions
const calcAge2 = function(birthYear){
    return 2021 - birthYear;
}
const age2= calcAge2(1997);
console.log(age2);


// Arrow function
const calcAge3 = birthYear => 2021 - birthYear;
const age3 = calcAge3(1997);
console.log(age3);

const yearUntilRetirement = (birthYear, firstName) => {
    const age = 2021 - birthYear;
    const retirement= 65 - age;
    return `${firstName} retires in ${retirement} years`
}
console.log(yearUntilRetirement(1997,'Usamah'));

//Functions Calling Other Functions
function cutFruitPieces(fruit){
    return fruit * 4;
}

function fruitProcessor(apples, oranges){

    const applePieces = cutFruitPieces(apples)
    const orangePieces = cutFruitPieces(oranges);

    console.log(apples, oranges);
    const juice = `Juice with ${applePieces}, and ${orangePieces}.`;
    return juice;
    }
    const appleJuice1 = fruitProcessor (5,0);
    console.log(appleJuice1);
    
    
    const AppleOrangeJuice1 = fruitProcessor(2,4);
    console.log(AppleOrangeJuice1);
    
// Reviewing functions
const calcAge4 = function (birthYear){
    return 2021 - birthYear;
}

const yearUntilRetirement2 = function (birthYear, firstName){
    const age = calcAge4(birthYear);
    const retirement = 65 - age;
if (retirement > 0){
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
}else {
    console.log(`${firstName} has already retired`);
    return -1;
}
}
console.log(yearUntilRetirement2(1997, 'Usamah'));
console.log(yearUntilRetirement2(1998, 'Ubaid'));


// arrays
const friend1 = 'Michael';
const friend2= 'Steven';
const friend3= 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const years = new Array(1991, 1992, 1993, 1994);

console.log(friends[0]);
console.log(friends.length);
console.log(friends[friends.length-1]);

friends[2] = 'Drake';
console.log(friends);

const firstName= 'Usamah';
const usamah = [firstName, 'Ahmed', 24, 'app specialist', friends];
console.log(usamah);

// Exercise 
const calcAge5 = function (birthYear){
    return 2021 - birthYear;
}
const years1 = [1990, 1991, 1992, 1993, 1994];

const age6 =calcAge5(years1[0]); 
const age7 =calcAge5(years1[1]); 
const age8 =calcAge5(years1[2]); 
const age9 =calcAge5(years1[3]);
console.log(age6,age7,age8, age9);

//

const ages = [calcAge5(years1[0])];
    console.log(ages);

    // basic array operations
    const friends1 = ['Michael', 'Steven', 'Peter'];
   const newLength = friends1.push('Usamah');
    console.log(newLength);


friends.unshift('Batista');
console.log(friends);

friends.pop();
const popped = friends.pop();
console.log(popped);
console.log(friends)


console.log(friends.indexOf('Steven'));
console.log(friends.includes('Bob'));

if (friends.includes('Peter')){
    console.log('You have a friend called Peter');
}













//Iteration: For loop

//
for(let rep = 1; rep <= 10; rep ++){
    console.log(`Lifting weights is easy ${rep}`);
}


const usamah4 = [
    'Usamah',
    'Ahmed',
    2021 - 1997,
    'Application Support',
    ['Ubaid','Mohammed','Haroon'],
    true
];

const types= [];


//Looping arrays
for(let i = 0; i <usamah4.length; i++){
    //Reading from an array
    console.log(usamah4[i], typeof usamah4[i]);

    types.push(typeof usamah4[i]);
    // types[i] = typeof usamah4[i];
}
console.log(types);




//Example 2
const years2 = [1997, 1998, 1999, 2000];
const ages2 = [];

for(let  i = 0; i < years2.length; i++){
    ages.push(2021 - years2[i]);
}
console.log(ages2);


// continue and break


//continue
console.log('--- ONLY STRINGS ---')
for(let i = 0; i <usamah4.length; i++){
    if(typeof usamah4[i] !== 'string') continue;

    console.log(usamah4[i], typeof usamah4[i]); 
}


// BREAK
console.log('--- BREAK WITH NUMBER ---')
for(let i = 0; i <usamah4.length; i++){
    if(typeof usamah4[i] !== 'number') break;

    console.log(usamah4[i], typeof usamah4[i]); 
}


//Looping Backwards and Loops in Loops
const usamah5 = [
    'Usamah',
    'Ahmed',
    2021 - 1997,
    'App support',
    ['Andy', 'Ubaid', 'Sam']
];

for (let i = usamah5.length - 1; i>= 0; i--){
    console.log(usamah5[i]);
}

// // looping in loops
//inner loop
 for(let exercise = 1; exercise <4; exercise++){
    console.log(`Starting exercise ${exercise}`);

// outer loop
 for (let rep = 1; rep <= 6; rep++){
     console.log(`Lifting weight repetition ${rep}`);
 } 
 }


 // The while loop
for (let rep=1; rep <= 10; rep++){
    console.log(`Lifting weight repetition ${rep}`);
}
let rep = 1;
while (rep <= 10){
console.log(`WHILE: Lifting weights repetition ${rep}`);
    rep++;
}
let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice!==6){
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('Loop is about to end');
}










// Objects
const usamahArray = ['Usamah',
'Ahmed',
2021-1997,
'Application Support',
'Suhaib', 'Ubaid', 'Mohammed'];


console.log(usamahArray);
console.log(usamahArray.lastName2);
console.log(usamahArray['lastName2']);

const nameKey = 'Name';
console.log(usamahArray['first'+ nameKey]);
console.log(usamahArray['last'+ nameKey]);


const interestedIn = prompt('What do you want to know about Usamah? Choose between firstName, lastName, age, job and friends');
console.log(usamahArray[interestedIn]);

if(usamahArray[interestedIn]){
    console.log(usamah2[interestedIn]);
}else {
    console.log('Wrong request');
}

usamahArray.location = 'Portugal';
usamahArray['instagram']= '@usamah.ahmed';

console.log(usamahArray);

// Challenge
console.log(`${usamahArray.firstName2} has  ${usamahArray.friends.length} friends, and his best friend is ${usamahArray.friends[0]}  `);

//Objects Methods

const usamah3 ={
    firstName3: 'Usamah',
    lastName3: 'Ahmed',
    birthYear3: 1997,
    job3: 'Application Support',
    friends3: ['Ubaid', 'Sohail', 'James'],
    hasDriversLicence3: false,

    calcAge6: function(){
        this.age= 2021 - this.birthYear3;
        return this.age;
    },
        // calcAge6: function(birthYear3){
        //     return 2021 - birthYear;
    
        descriptionUsamah: function (){
            return `${this.firstName3} is a ${this.calcAge6()}, ${this.job3} and he has ${this.hasDriversLicence3 ? 'a' : 'no' } drivers licence`;
        }
    };



console.log(usamah3.calcAge6(1997));
console.log(usamah3['calcAge6'](1997));
console.log(usamah3.descriptionUsamah());

//Usamah is a 24 year old app support, and he does not have a drivers licence




