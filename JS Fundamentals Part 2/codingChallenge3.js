const markData ={
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,

 calcBmi : function(){
        return this.mass / (this.height ** 2) 
    }
};
console.log(markData.calcBmi());


 const johnData ={
     fullName: 'John Smith',
     mass: 92,
     height: 1.95,
 
     calcBmi : function(){
         return this.mass / (this.height ** 2) 
     }
 };
 console.log(johnData.calcBmi());



 if (johnData.calcBmi() > markData.calcBmi()){
    console.log(`${markData.fullName} ${markData.calcBmi} is higher than ${johnData.fullName}`)
 } else if (markData.calcBmi() > johnData.calcBmi()) {
    console.log(`${johnData.fullName} ${johnData.calcBmi} is higher than ${markData.fullName}`)
 }
