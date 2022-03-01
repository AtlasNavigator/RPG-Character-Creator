const readLine = require('readline-sync');

let diceRolled = [];
let jobs = ['Cook', 'Theif', 'Prostitute', 'Cartographer', 'Merchant', 'Nobility'] //Possible jobs
let gender = ['male', 'female'] //Possible Gender
let reputation = ['very poor', 'poor', 'neutral', 'good', 'very good', 'outstanding']//Possible reputation

for (let i = 0; i < 3; i++){
  generate();
}


function generate(){
  let name1 = readLine.question("What is your name: ");//Ask for a character name
  console.log(`\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\`);
  rollMultipleDice(5);
  console.log(`Name: ${name1}`);
  console.log(`Gender: ${randomGender()}`);
  console.log(`Occupation: ${randomJob()}`);
  console.log(`HP: ${sumOfDice(diceRolled)}`);
  console.log(`Strength: ${rollAStat()}`);
  console.log(`Patience: ${rollAStat()}`);
  console.log(`Enginuity: ${rollAStat()}`);
  console.log(`Intelligence: ${rollAStat()}`);
  console.log(`Stamina: ${rollAStat()}`);
  console.log(`Looks: ${rollAStat()}`);
  console.log(`Reputation: ${randomReputation()}`);
  console.log(`\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\`);
  console.log(' ');
} //The actual character generator thing

function rollADie(){
  let result = Math.ceil(Math.random()*6);
  return result; //Roll the dice
}

function rollMultipleDice(amount){
  diceRolled = [];
  for (let i = 0; i<amount; i++){
    diceRolled.push(rollADie()); //Roll the dice multiple times
  }
}

function sumOfDice(list){
  let sum = 0;
  for (let i=0; i<list.length; i++){
    sum += list[i] //Tally up the dice
  }
  return sum;
}

function rollAStat(){
  rollMultipleDice(4);
  return sumOfDice(diceRolled); //Tie it all together for the stats
}

function randomJob(){
  let choice = jobs[Math.floor(Math.random(5)*jobs.length)];
  return choice; //Roll the dice
}

function randomGender(){
  let genderChoice = gender[Math.floor(Math.random(1)*gender.length)];
  return genderChoice; //Randomly choose gender
}

function randomGender(){
  let genderChoice = gender[Math.floor(Math.random(1)*gender.length)];
  return genderChoice; //Randomly choose gender
}

function randomReputation(){
  let reputationChoice = reputation[Math.floor(Math.random(5)*reputation.length)];
  return reputationChoice; //Randomly choose gender
}
