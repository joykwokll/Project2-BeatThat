// There are 2 players and players take turns.
// When a player clicks Submit, the game rolls 2 dice and shows the dice rolls, 
// for example 3 and 6.
// The player picks the order of the dice they want. For example, 
// if they wanted the number 63, they would specify that the 2nd dice goes first. 
// You can choose how the player specifies dice order.
// After both players have rolled and chosen dice order, 
// the player with the higher combined number wins.

//Global Varibles
const gameStateDiceRoll = "gameStateDiceRoll";
const gameStateChooseDiceOrder = "gameStateChooseDiceOrder";
let gameState = gameStateDiceRoll;


let playerRolls = [];

//Helper function
let rollDice = function () {
  //random decimal between 0 to 6
  let randomDecimal = Math.random() * 6;
  //random integer from 1 to 6
  let randomInteger = Math.floor(randomDecimal) + 1;
  console.log("rollDice output", randomInteger);
  return randomInteger;
}

let rollDiceForPlayer = function () {
  console.log("Control flow: Start of rollDiceForPlayer()")
  let counter = 0
  while (counter < 2) {
    playerRolls.push(rollDice());
    counter = counter + 1
  }
  console.log("rollDiceForPlayer changes, playerRolls:", playerRolls);
  return `Welcome Player 1. You rolled ${playerRolls[0]} for Dice 1 and ${playerRolls[1]} for Dice 2. Choose the order of the dice.`
};

let getPlayerScore = function (playerInput) {
  if (playerInput != 1 && playerInput != 2) {
    return `Error! Please only input 1 or 2 to choose which dice to use as the first digit.
    You rolled ${playerRolls[0]} for Dice 1 and ${playerRolls[1]} for Dice 2.`
  }
  if (playerInput == 1) {
    let playerScore = Number(String(playerRolls[0] + String(playerRolls[1])));
    return ` Your chosen value is ${playerScore}`
  }
  if (playerInput == 2) {
    let playerScore = Number(String(playerRolls[1] + String(playerRolls[0])));
    return ` Your chosen value is ${playerScore}`
  }

}

let main = function (input) {
  // let myOutputValue = rollDice();
  // return myOutputValue
  console.log("check game state", gameState);
  let outputMessage = "";
  if (gameState == gameStateDiceRoll) {
    console.log("gameStateDiceRoll")
    outputMessage = rollDiceForPlayer();
    gameState = gameStateChooseDiceOrder;
  }
  else if (gameState == gameStateChooseDiceOrder) {
    outputMessage = getPlayerScore(input);
  }
  
  return outputMessage;

};