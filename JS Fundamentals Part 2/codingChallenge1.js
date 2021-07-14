const calcAverage = (score1, score2, score3) => (score1 + score2 + score2) / 3;
// Test Data1
let dolphinsScore= calcAverage(44, 23, 71);
let koalasScore= calcAverage(65,54,49);
console.log(dolphinsScore, koalasScore);

function checkWinner(avgDolphins, avgKoalas){
   if (avgDolphins >= 2 * avgKoalas){
   console.log('Koalas have won');
   }else if (avgKoalas>= 2 * avgDolphins){
    console.log('Dolphins have won');
} else{
    console.log('No team wins');
}

}
checkWinner(dolphinsScore, koalasScore);


dolphinsScore = calcAverage(85, 54, 41);
koalasScore = calcAverage(23, 34,27);
console.log(dolphinsScore, koalasScore);
checkWinner(dolphinsScore, koalasScore)