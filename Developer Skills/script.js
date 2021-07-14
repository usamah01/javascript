// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const x = 23;

const calcAge = birthYear => 2021 - birthYear;

console.log(calcAge(1997));

//PROBLEM:

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is the temp amplitude? Answer: Difference between highest and lowest temp
// - How to compute the max and min temperatures?
// - What's a sensor error? And what to do?

// 2) Breaking up into sub-problems
// - How to ignore erros?
// - Find max value in temp array?
// - Find min value in temp array?
// - Subtract min from max (amplitude) and return it

// Debugging with Console and Breakpoints
const measureUsamah = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    value: Number(prompt('Degrees Celsius:')),
  };

  //b) find
  // console.log(measurement);
  console.table(measurement);

  console.log(measurement.value);
  // console.warn(measurement.value);
  // console.error(measurement.value);
  const kelvin = measurement.value + 273;
  return kelvin;
}; // a) Identify the bug
console.log(measureUsamah);

// Using a debugger

const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = 0;
  let min = 0;

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < max) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitudeBug = calcTempAmplitudeBug([4, 5, 1]);
console.log(amplitudeBug);

// temperatures.max([3, 7, 4]);
// max = first element of array
// max = 7
//

//PROBLEM 2:
//Function should now see 2 arrays of temps

//1) With 2 arrays, do we need to implement the same functionalilty twice?! No. Just merge two arrays
//2) Breaking up two arrays
// - How to merge two arrays
// const array1 = ['a', 'b', 'c'];
// const array2 = ['d', 'e', 'f'];
// const array3 = array1.concat(array2);
