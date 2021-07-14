const billValue = 100;

const calcTip = bill =>50 && bill >= 300?
bill * 0.15: bill * 0.2;



const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

console.log(bills, tips);

const total = [bills[0] + tips[0], bills[0] + tips[0], bills[0] + tips[0]]; 