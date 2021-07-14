const myCountry = {
    country: 'Pakistan',
    capital: 'Islamabad',
    language: 'Urdu',
    population: 2500000000,
    neighbours: ['Bangladesh', 'India', 'China'],

    describe: function(){
        return(`${this.country} has ${this.population} ${this.language} speaking people, ${this.neighbours.length} neigbouring countries and a capital called ${this.capital}`);
    },

    checkIsland: function(){
        this.isIsland = this.neighbours.length === 0 ? true : false;
        return `and is ${this.isIsland ? 'a' : 'not' } neighbouring country`;
    }
};



myCountry.describe();
console.log(myCountry.describe(), myCountry.checkIsland());






console.log(myCountry);
console.log(` ${myCountry.country} has ${myCountry.population} ${myCountry.language} speaking people, ${myCountry.neighbours.length} neigbouring countries and a capital called ${myCountry.capital}`);

const newPopulation1 = myCountry.population - 20000000;
console.log(newPopulation1);

const newPopulation2 = myCountry['population'] + 20000000;
console.log(newPopulation2);