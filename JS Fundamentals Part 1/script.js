
/*let js = "amazing";
console.log(40 + 23 - 10- 5);

console.log("Usamah");
console.log(24);

let firstName ="Usamah";
console.log(firstName);

let first_name = "Usamah";
console.log(first_name);

let $function = 27;
console.log(27);


// Variable name conventions
let myFirstJob = "ID Checker";
let mySecondJob = "App Support";
console.log(myFirstJob);
console.log(mySecondJob);
*/

// Data types
let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'Jonas');

javascriptIsFun = 'YES';
console.log( typeof javascriptIsFun);

//Undefined
let year;
console.log(typeof year);
console.log(year);

year = 1991;
console.log(typeof year);
console.log(year);

console.log(typeof null);

// let, const, var
let age = 24;
age = 25;

const dateofBirth = 1997;

var job = 'Programmer';
job = 'App Support';

lastName = 'Ahmed';
console.log(lastName);

// Basic Operator
//Math Operators
const ageUsamah = 2021 - 1997;
console.log(ageUsamah);

const ageUbaid = 2021 - 1998;
console.log(ageUbaid);

console.log(ageUsamah, ageUbaid);

const now = 2021;
const ageUsamahNew = now - 1997;
console.log(ageUsamahNew);
console.log(ageUsamahNew * 2, ageUsamahNew / 10, 2 ** 3);

const firstName= 'Usamah';
const surName = 'Ahmed';
console.log(firstName + ' ' + surName);

//Assignment Operators
let x = 10 + 5; 
x += 10; // x = x + 10
x *= 4; // x = x*4
x -= 10; 
x ++;
x--;
console.log(x);


//Comparison Operators
console.log( ageUsamah > ageUbaid);
console.log(ageUsamah <= 24);

const isFullAge = ageUsamah >= 24;
console.log( now - 1997 > now - 2021);


//Operator Precendence
console.log( 25 - 10 - 5);

let z,y;
z = y = 25-10 - 5; // x = y = 10
console.log(z,y);

const averageAge = (ageUbaid + ageUsamah) / 2;
console.log(ageUsamah, ageUbaid, averageAge);

//Strings and Template Literals
const name= 'Usamah';
const jobNow = 'App Support';
const birthYear = 1997;
const yearNow = 2021;

const usamah= "I am" + name + ", I work in" + jobNow + 'and my age is' + (yearNow - birthYear); 
console.log(usamah);

const usamahNew = `I am ${name}, and work in ${jobNow}. I am ${yearNow - birthYear}`;
console.log(usamahNew);
console.log(`Just a regular string`);

console.log(`String
multiple
lines
`);

//Taking decision: if/else statements

const ageforDriving = 24;

if(ageforDriving >= 17){
console.log('Usamah can start driving now :) ')
} else{
    const yearsLeft = 17 - age;
    console.log(`Usamah is too young. Wait anoth ${yearsLeft} years`);
}


const yearOfBirth = 1997;
let century;
if(yearOfBirth <= 2000){
    let century = 20;
} else {
    let century = 21;
}
console.log(century);


// Type Conversion and Coercion
const inputYear = '1997';
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);

console.log(Number('Usamah'));

console.log(typeof NaN);

console.log(String(23));

// Coercion
console.log('I am'+ 23 + 'years old');
console.log('23'- '10' - 3);
console.log('23' * '2');
console.log('23' > '18');

let n = '1' + 1; // ''11 
n = n - 1; // 10
console.log(n);


//Truthy and falsy
// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));

console.log(Boolean('Usamah'));
console.log({});

const money = 0;
if (money){ // JS will try to convert into boolean
    console.log("Dont spend it all");
} else{
    console.log('You should get a job');
}

let height;
if (height){
    console.log('Height is defined');
} else{
    console.log('Height is not defined');
}

// Equality Operators ==, ===
const myAge = '24';
if (myAge === 24) console.log(' I am 24');

if (myAge == 24) console.log(' I am 24');


// const favourite = Number(prompt("What is your favourite number"))

// if(favourite === 23){
//     console.log('That is a nice number');
// } else if (favourite === 7){
//     console.log(' 7 is a cool number');
// } else if (favourite === 1){
//     console.log(' That is a nice number');
// } 
// else { 
//     console.log( 'Your number is not 7 or 23');
// }

// if(favourite !== 23) console.log('Why not 23?');

// Logical Operators
const hasDriversLicence = true;
const hasGoodVision = true;

console.log(hasDriversLicence && hasGoodVision);
console.log(hasDriversLicence || hasGoodVision);
console.log(!hasDriversLicence);

const isTired = false;
console.log(hasDriversLicence && hasGoodVision && isTired);


const shouldDrive = hasDriversLicence && hasGoodVision;
if (shouldDrive && !isTired) {
    console.log("You are able to drive");
} else {
    console.log("Someone else should drive");
}

// Switch Statement
const day = 'monday';

switch(day){
    case 'monday':
    console.log('Plan course structure');
    console.log('Go to coding meetup');
    break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
        case 'wednesday':
            case 'thursday':
                console.log('Write code examples');
                break;
                case 'friday':
                    console.log('Record videos');
                    break;
                    case 'saturday':
                        case 'sunday':
                            console.log('Enjoy the weekend');
                            default:
                                console.log('Not a valid day');

}




const dayOfWeek = 'monday';
if (dayOfWeek === 'monday'){
console.log('Plan course structure');
console.log('Go to coding meetup');
} else if (dayOfWeek === 'tuesday'){
    console.log('Prepare theory videos');
} else if (dayOfWeek === 'wednesday' || dayOfWeek === 'thursday'){
    console.log('Write code examples');
} else if (dayOfWeek === 'friday'){
    console.log('Record videos');
} else if (dayOfWeek === 'saturday' || dayOfWeek === 'sunday'){
    console.log('Enjoy the weekend');
} else {
    console.log('Not a valid day');
}



// Statements and Expressions
3 + 4
1991
true && false && !false
 
if (23 > 10){
    const str = '23 is bigger';
}

const me = 'Usamah';
console.log(`I'm ${2021 - 1997} years old`);

// Conditional Ternary Operator
const ageCt = 23;
// age >= 18 ? console.log('I like to drink sting'):
// console.log('I like to drink water');

const drink = ageCt >= 18  ? 'sting ' : 'water';
console.log(drink);

let drink2;
if(ageCt >= 18){
    drink2 = 'wine';
} else {
    drink2 = 'water';
} console.log(drink2);

console.log(`I like to drink ${age >= 18  ? 'sting ' : 'water'}`);