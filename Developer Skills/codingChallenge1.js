// //1) Understand the problem
// // - Array transfored to string, seperated by ...
// // What is the the X days? Answer index + 1

// // 2) Break up in sub-problems
// // - Transform array into string
// // - Transform each element to string wtih Celsius
// // - String needs to contain day
// // - Add ... between elements and start and end of string

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str = str + `${arr[i]} degrees celsius in ${i + 1} days ... `;
  }
  console.log('...' + str);
};
printForecast(data1);
printForecast(data2);

// Have 2 arrays, need to write EPL team will play bundesliga team etc in x amount of days

const eplTeam = ['Manchester United', 'Arsenal', 'Manchester City'];
const bundesliga = ['Bayern Munich, Borussia Dortmund, Schalke'];
const days = [1, 2, 3];

const printFixtures = function (array, array2) {
  let str2 = '';
  for (let i = 0; i < array.length; i++) {
    str2 = str2 + `${array[i]} will face  ${i + 1} days `;
  }
  console.log('...' + str2);
};
printFixtures(eplTeam);
