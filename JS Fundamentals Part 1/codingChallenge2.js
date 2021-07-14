// Test Data 1
const markMass1_cc2 = 78;
const markHeight1_cc2 = 1.69;
const johnMass1_cc2 = 92;
const johnHeight1_cc2= 1.95;

const markBMI1_cc2 = markMass1_cc2 / markHeight1_cc2 ** 2 ;
console.log(markBMI1);
const johnBMI1_cc2=johnMass1_cc2 / (johnHeight1_cc2 * johnHeight1_cc2);
console.log(johnBMI1_cc2);

const markHigherBMI1_cc2 = (markBMI1_cc2 > johnBMI1_cc2);
console.log(markHigherBMI1_cc2);

if(markBMI1_cc2> johnBMI1_cc2){
    console.log(`Mark's BMI ${markBMI1_cc2}, is higher than John's.`);
}else{
    console(`John's BMI is ${johnBMI1_cc2}, higher than Mark's.`)
};


// Test Data 2

const markMass2_cc2 = 95;
const markHeight2_cc2 = 1.88;

const johnMass2_cc2 = 85;
const johnHeight2_cc2= 1.76;

const markBMI2_cc2=markMass2_cc2 / markHeight2_cc2 ** 2;
console.log(markBMI2_cc2);
const johnBMI2_cc2=johnMass2_cc2/ (johnHeight2_cc2*johnHeight2_cc2);
console.log(johnBMI2_cc2);

const markHigherBMI2_cc2 = (markBMI2_cc2> johnBMI2_cc2);
console.log(markHigherBMI2_cc2);

if(markBMI2_cc2 > johnBMI2_cc2){
    console.log(`Mark's BMI ${johnBMI2_cc2}, is higher than John's.`);
}else{
    console.log(`John's BMI ${johnBMI1_cc2}, is higher than Mark's.`)
};
