/**
 * DOM Adventure Game
 */

const death = function(cause) {
  console.log('But I went straight to death.');
  choiceButtonOne.removeEventListener('click', death);
  choiceButtonTwo.removeEventListener('click', death);
  choiceButtonThree.removeEventListener('click', death);
  roomDescription.textContent = cause;
  choiceButtonOne.style.display = 'none';
  choiceButtonTwo.style.display = 'none';
  choiceButtonThree.style.display = 'none';
  startButton.textContent = 'Try again!';
  gameContainer.appendChild(startButton);
  startButton.addEventListener('click', startGame);
}

const startGame = function(event) {
  console.log("The start of the game happened here, evidenced by this console log");
  event.stopPropagation();
  startButton.removeEventListener('click', startGame);
  gameContainer.removeChild(startButton);
  roomDescription.textContent = 'You awake in a dimly lit room. There are doors to your left and right. Which door do you pick?';
  choiceButtonOne.style.display = 'block';
  choiceButtonTwo.style.display = 'block';
  choiceButtonOne.textContent = 'Right';
  choiceButtonTwo.textContent = 'Left';

  choiceButtonOne.addEventListener('click', death("The door swings open to utter darkness. You step through, but your foot can't find the floor. It's a big pit. And you're falling. AAAAAAAAHHHHHHHHHhhhhhhhhhhhh..... Sorry, you picked the wrong door and fell to your death"));

  choiceButtonTwo.addEventListener('click', bearRoom);
}

const bearRoom = function() {
  choiceButtonOne.removeEventListener('click', death);
  choiceButtonTwo.removeEventListener('click', bearRoom);

  roomDescription.textContent = "There is a bear in here. It's sitting in front of another door eating from a pot of honey. How are you going to move the bear?";

  choiceButtonThree.style.display = 'block';
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
