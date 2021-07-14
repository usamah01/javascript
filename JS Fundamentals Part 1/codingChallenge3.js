// Challenge 1 
const Dolphins = (96 + 108 + 89) / 3;
const Koalas = (88 + 91 + 100) / 3;

if (Dolphins > Koalas){
    console.log("Dolphins beat Koalas and have won the competition");
} else if (Koalas > Dolphins) {
console.log("Koalas have beat Dolphins and have won the competition");
} else if (Koalas === Dolphins) {
   console.log("It is a draw");
}


// Bonus 1
const DolphinsB2 = (97 + 112 + 101) / 3;
const KoalasB2 = (109 + 95 + 123) / 3;

if (DolphinsB2 > KoalasB2 && DolphinsB2 >= 100) {
    console.log("Dolphins have won");
} else if (KoalasB2 > DolphinsB2 && KoalasB2 <= 100) {
console.log("Dolphins have won");
}else if (KoalasB2 === DolphinsB2) {
    console.log("It is a draw");
 }
// Bonus 2
const DolphinsB3 = (97 + 112 + 101) / 3;
const KoalasB3 = (109 + 95 + 123) / 3;

if (DolphinsB3 > KoalasB3 && DolphinsB3 >= 100) {
    console.log("Dolphins have won");
} else if (KoalasB3 > DolphinsB3 && KoalasB3 <= 100) {
console.log("Dolphins have won");
}else if (KoalasB3 === DolphinsB3 && DolphinsB3>= 100 && KoalasB3 >= 100) {
    console.log("It is a draw");
 } else {
     console.log("No one wins");
 }