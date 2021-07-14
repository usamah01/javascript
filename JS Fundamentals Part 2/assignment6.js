const neighbours = ['India', 'Bangladesh', 'Sri Lanka'];
neighbours.push('Utopia');
console.log(neighbours);
neighbours.pop();
console.log(neighbours);

if (neighbours.includes('Germany')){
    console.log('Probably not a central European country :)');
}
neighbours[neighbours.indexOf('India')] = 'Sweden';
console.log(neighbours);
