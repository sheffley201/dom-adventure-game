/**
 * DOM Adventure Game
 */

function startGame() {
  startButton.removeEventListener('click', startGame);
  gameContainer.removeChild(startButton);
  roomDescription.textContent = 'You awake in a dimly lit room. There are doors to your left and right. Which door do you pick?';
  choiceButtonOne.style.display = 'block';
  choiceButtonTwo.style.display = 'block';
  choiceButtonOne.textContent = 'Right';
  choiceButtonTwo.textContent = 'Left';

  
}
document.querySelector('#game').textContent = 'DOM Adventure Game';
const gameContainer = document.querySelector('#game');
const startButton = document.createElement('button');
const roomDescription = document.createElement('p');
const choiceButtonOne = document.createElement('button');
const choiceButtonTwo = document.createElement('button');
const choiceButtonThree = document.createElement('button');
choiceButtonOne.className = 'choice-button';
choiceButtonTwo.className = 'choice-button';
choiceButtonThree.className = 'choice-button';
startButton.textContent = "Start";
startButton.className = 'start';
roomDescription.textContent = 'Welcome to my adventure game! Once you click start, you will be presented with a description of the room and 2 or 3 choices. Choose wisely and have fun!';
gameContainer.appendChild(roomDescription);
gameContainer.appendChild(startButton);
gameContainer.appendChild(choiceButtonOne);
gameContainer.appendChild(choiceButtonTwo);
gameContainer.appendChild(choiceButtonThree);

startButton.addEventListener('click', startGame);
