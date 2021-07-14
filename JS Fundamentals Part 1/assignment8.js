
// loose equality
const numNeigbours1 = Number(prompt("How many neigbour countries does your country have?"));

if(numNeigbours1 == 1){
    console.log('Only one border');
} else if (numNeigbours1 > 1) {
    console.log('More than 1 border');
} else {
    console.log('No borders');
}


// strict equality
const numNeigbours2 = Number(prompt("How many neigbour countries does your country have?"));

if(numNeigbours2 === 1){
    console.log('Only one border');
} else if (numNeigbours2 > 1) {
    console.log('More than 1 border');
} else {
    console.log('No borders');
}