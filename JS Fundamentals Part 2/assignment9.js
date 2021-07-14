const populations2 = [122, 4343, 543, 65];
const percentages2 = [];

for(i = 0; i < populations2.length; i++){

  const perc = percentageOfWorld1(populations2[i]);
  percentages2.push(perc);
}
console.log(percentages2);

