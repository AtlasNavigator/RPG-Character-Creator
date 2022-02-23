let diceRolled = [];
let character = {
  
}

character.strength = rollAStat();
character.patience = rollAStat();
character.enginuity = rollAStat();
character.intelligence = rollAStat();
character.stamina = rollAStat();
character.looks = rollAStat();
console.log(character);


function rollADie(){
  let result = Math.ceil(Math.random()*6);
  console.log(`You rolled a ${result}!`)
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
  console.log(`In total, that is ${sum}.`);
  return sum;
}

function rollAStat(){
  rollMultipleDice(4);
  return sumOfDice(diceRolled); //Tie it all together for the stats
}

