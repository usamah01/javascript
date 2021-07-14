const listOfNeigbours = [
    ['Canada', 'Mexico'],
    ['Spain'],
    ['Norway', 'Sweden', 'Russia'],
    ];

for (let i = 0; i < listOfNeigbours.length; i++)
 for (let y = 0; y < listOfNeigbours[i].length; y++)
 console.log(`Neighbour: ${listOfNeigbours[i][y]}`);