const populations = ['England', 'India', 'Palestine', 'Saudi Arabia'];
if (populations.length == 4){
    console.log('true');
} else{
    console.log('false');
}

const populations1 = [122, 4343, 543, 65];
console.log(populations1.length == 4);
const percentages = [
    percentageOfWorld1(populations1[1]),
    percentageOfWorld1(populations1[2]),
    percentageOfWorld1(populations1[3]),
    percentageOfWorld1(populations1[4])
];
console.log(percentages);