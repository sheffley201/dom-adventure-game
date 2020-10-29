/**
 * DOM Adventure Game
 */

//this function handles the player dying and gives the option to try again
const death = function(cause) {
  //remove any event listeners
  choiceButtonOne.removeEventListener('click', pitfall);
  choiceButtonTwo.removeEventListener('click', bearRoom);
  choiceButtonOne.removeEventListener('click', bearMoved);
  choiceButtonTwo.removeEventListener('click', slapFace);
  choiceButtonOne.removeEventListener('click', goldRoom);
  choiceButtonTwo.removeEventListener('click', bearWait);
  choiceButtonOne.removeEventListener('click', lockedDoor);
  choiceButtonTwo.removeEventListener('click', bearBite);
  choiceButtonThree.removeEventListener('click', tunnelOne);
  //choiceButtonThree.removeEventListener('click', dead);
  //change the 'room description' to the cause of death provided by the call
  roomDescription.textContent = cause;
  //hide the choice buttons
  choiceButtonOne.style.display = 'none';
  choiceButtonTwo.style.display = 'none';
  choiceButtonThree.style.display = 'none';
  //change the start button text
  startButton.textContent = 'Try again!';
  //show it again and allow the player to click it to start from the beginning
  gameContainer.appendChild(startButton);
  startButton.addEventListener('click', startGame);
}

//define all possible deaths to be used in event listeners
const pitfall = () => death("The door swings open to utter darkness. You step through, but your foot can't find the floor. It's a big pit. And you're falling. AAAAAAAAHHHHHHHHHhhhhhhhhhhhh..... Sorry, you picked the wrong door and fell to your death");
const slapFace = () => death('Bad call. The angry bear slaps your face off.');
const bearWait = () => death('You choose not to open the door and just sit down and wait for something to happen. Nothing ever happens and you die of dehydration.');
const lockedDoor = () => death('The door is now locked. The boulder turns you into a pancake.');
const bearBite = () => death('You may have won against the bear the first time, but the bear is not scared of you anymore. The bear takes a bite out of your neck.');

//starts the game up at the first room
const startGame = function(event) {
  //remove event listener from the start button and get rid of it
  startButton.removeEventListener('click', startGame);
  gameContainer.removeChild(startButton);
  //set room description
  roomDescription.textContent = 'You awake in a dimly lit room. There are doors to your left and right. Which door do you pick?';
  //show appropriate choice buttons
  choiceButtonOne.style.display = 'block';
  choiceButtonTwo.style.display = 'block';
  //and set their text
  choiceButtonOne.textContent = 'Right';
  choiceButtonTwo.textContent = 'Left';

  //add event listeners for each button
  choiceButtonOne.addEventListener('click', pitfall);

  choiceButtonTwo.addEventListener('click', bearRoom);
}

//function to handle the bear room
const bearRoom = function() {
  //remove event listeners from previous room
  choiceButtonOne.removeEventListener('click', pitfall);
  choiceButtonTwo.removeEventListener('click', bearRoom);

  //set the scene
  roomDescription.textContent = "There is a bear in here. It's sitting in front of another door eating from a pot of honey. How are you going to move the bear?";

  //set the text content for each of the buttons
  choiceButtonOne.textContent = 'Taunt Bear';
  choiceButtonTwo.textContent = 'Take Honey';

  //add event listeners for each of the buttons
  choiceButtonOne.addEventListener('click', bearMoved);

  choiceButtonTwo.addEventListener('click', slapFace);
}

//function to handle the bear moving
const bearMoved = function() {
  //remove previous event listeners
  choiceButtonOne.removeEventListener('click', bearMoved);
  choiceButtonTwo.removeEventListener('click', slapFace);

  //room description
  roomDescription.textContent = 'The bear moved, you can go through the door now.';

  //set text content for each button
  choiceButtonOne.textContent = 'Open door';
  choiceButtonTwo.textContent = 'Sit and wait';

  //add event listeners for each button
  choiceButtonOne.addEventListener('click', goldRoom);

  choiceButtonTwo.addEventListener('click', bearWait);
}

//function for the gold room
const goldRoom = function() {
  //remove event listeners from previous room
  choiceButtonOne.removeEventListener('click', goldRoom);
  choiceButtonTwo.removeEventListener('click', bearWait);

  //set the scene
  roomDescription.textContent = 'This room has a big bag of gold, a door with an exit sign above, and a tunnel opposite of the gold. Do you take the gold, or leave through the exit?'

  //set text content for buttons
  choiceButtonOne.textContent = 'Take the gold';
  choiceButtonTwo.textContent = 'Take the exit';

  //add event listeners for each button
  choiceButtonOne.addEventListener('click', boulder);

  choiceButtonTwo.addEventListener('click', outside);
}

//function for one of the possible endings
const outside = function() {
  //remove event listeners
  choiceButtonOne.removeEventListener('click', boulder);
  choiceButtonTwo.removeEventListener('click', outside);

  //tell the user they have won, kind of
  roomDescription.textContent = 'You exit through the door and are greeted with a beautiful view. ...The end(?)'

  //hide choice buttons
  choiceButtonOne.style.display = 'none';
  choiceButtonTwo.style.display = 'none';

  //set start button text to start over and show it
  startButton.textContent = 'Start Over';
  gameContainer.appendChild(startButton);

  //add event listener to start the game over
  startButton.addEventListener('click', startGame);
}

//function for the boulder
const boulder = function() {
  //remove event listeners
  choiceButtonOne.removeEventListener('click', boulder);
  choiceButtonTwo.removeEventListener('click', outside);

  //set the scene
  roomDescription.textContent = 'All the sudden you hear the Iniana Jones theme playing faintly. "What in the world is going on?" you ask yourself. All of the sudden the room starts shaking and the wall in front of you lifts up. You see a huge boulder coming towards you. What do you do?';

  //show third choice button, we use it this round
  choiceButtonThree.style.display = 'block';

  //set text content for buttons
  choiceButtonOne.textContent = 'Take the exit';
  choiceButtonTwo.textContent = 'Go back to the bear';
  choiceButtonThree.textContent = 'Run down The tunnel';

  //add event listeners for buttons
  choiceButtonOne.addEventListener('click', lockedDoor);
  choiceButtonTwo.addEventListener('click', bearBite);
  choiceButtonThree.addEventListener('click', tunnelOne);
}

//function for the first part of the tunnel scene
const tunnelOne = function() {
  
}

//setup for the game. Title, description, buttons
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

//start the game
startButton.addEventListener('click', startGame);
