const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1. Creating one player array for each team
const [players] = ([player1, player2] = game.players);
console.log(player1, player2);

//2. First player is GK and other are field players.
const [gk, ...fieldPlayers] = player1;
console.log(gk, fieldPlayers);

//3. Create array allPlayers containing all players
const allPlayers = [...player1, ...player2];
console.log(allPlayers);

// Bayern use 3 subs. new array players1Final original team plus Thiago, Couthinho, Perisic
const players1Final = [...player1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

//5. create new variables
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

//6. function
const printGoals = function (...player) {
  console.log(`${player.length} goals were scored`);
};
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);

//7. Which team likely to win
team1 < team2 && console.log('Team 1 more likely to win');
team1 > team2 && console.log('Team 2 more likely to win');

//Part 2
//1.
for (const [i, players] of game.scored.entries())
  console.log(`Goal ${i + 1}: ${players}`);

//2.
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) average += odd;
average /= Object.length;
console.log(average);

//3.
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game}[team]}`;
  console.log(`Odd of... ${odd}`);
}

const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '� Substitution'],
  [47, '⚽ GOAL'],
  [61, '� Substitution'],
  [64, '� Yellow card'],
  [69, '� Red card'],
  [70, '� Substitution'],
  [72, '� Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '� Yellow card'],
]);

console.log(gameEvents.values());
const events = [...new Set(gameEvents.values())];
console.log(events);

gameEvents.delete(64);
console.log(
  `An event happened on average, every ${90 / gameEvents.size} minutes`
);
const time2 = [...gameEvents.keys()].pop();
console.log(time2);
console.log(
  `An event happened on average, every ${time2 / gameEvents.size} minutes`
);

//4.
for (const [min, event] of gameEvents) {
  const half = min <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] of ${min}: ${event}`);
}
