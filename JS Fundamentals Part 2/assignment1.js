function describeCountry(country, population, capitalCity){
    console.log(country, population, capitalCity)
    const countryDetails = `${country} has a population of ${population} and its capital city is ${capitalCity}`;
    return countryDetails;
}
describeCountry('Pakistan', 6500000, 'Islamabad');
describeCountry('Finland', 400000, 'Helsinki');
describeCountry('England', 320000, 'London');

const country1 = describeCountry('Pakistan', 6500000, 'Islamabad');
console.log(country1);
const country2 = describeCountry('Finland', 400000, 'Helsinki');
console.log(country2);
const country3 = describeCountry('England', 320000, 'London');
console.log(country3);




























// function describeCountry (country, population, capitalCity){
//     console.log(country, population, capitalCity);
//     const response = `${country} has a population of ${population} and its capital city is ${capitalCity}`;
//     return response;
// }

// const country1 = describeCountry('Pakistan', 6000000, 'Islamabad');
// console.log(country1);

// const country2 = describeCountry('West indies', 200000, 'Barbados');
// console.log(country2);

// const country3 = describeCountry('England', 245555555, 'London');
// console.log(country3);