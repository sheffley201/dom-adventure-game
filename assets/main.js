/**
 * DOM Adventure Game
 */
let textTimer;
//this function handles the player dying and gives the option to try again
const death = function(cause) {
  //remove any event listeners or timeouts so you don't die a second time
  window.removeEventListener('keyup', checkKey);
  choiceButtonOne.removeEventListener('click', bearMoved);
  choiceButtonTwo.removeEventListener('click', slapFace);
  choiceButtonOne.removeEventListener('click', goldRoom);
  choiceButtonTwo.removeEventListener('click', bearWait);
  choiceButtonOne.removeEventListener('click', lockedDoor);
  choiceButtonTwo.removeEventListener('click', bearBite);
  choiceButtonThree.removeEventListener('click', tunnelOne);
  choiceButtonOne.removeEventListener('click', alcove);
  choiceButtonTwo.removeEventListener('click', tunnelTwo);
  choiceButtonOne.removeEventListener('click', jumpOver);
  choiceButtonTwo.removeEventListener('click', tunnelThree);
  clearTimeout(boulderTimer);
  clearInterval(countdownTimer);

  //remove timer from screen
  if (gameContainer.contains(timer)) {
    gameContainer.removeChild(timer);
  }
  //change the 'room description' to the cause of death provided by the call
  roomDescription.textContent = "";
  scrollingText(cause)
  //show the first button if not shown previously
  choiceButtonOne.style.display = 'block';
  //hide the choice buttons
  choiceButtonTwo.style.display = 'none';
  choiceButtonThree.style.display = 'none';
  //change the start button text
  choiceButtonOne.textContent = 'Try again!';
  //show it again and allow the player to click it to start from the beginning
  choiceButtonOne.addEventListener('click', startGame);
}

//define all possible deaths to be used in event listeners
const pitfall = () => death("The door swings open to utter darkness. You step through, but your foot can't find the floor. It's a big pit. And you're falling. AAAAAAAAHHHHHHHHHhhhhhhhhhhhh..... Sorry, you picked the wrong door and fell to your death");
const slapFace = () => death('Bad call. The angry bear slaps your face off.');
const bearWait = () => death('You choose not to open the door and just sit down and wait for something to happen. Nothing ever happens and you die of dehydration.');
const lockedDoor = () => death('The door is now locked. The boulder turns you into a pancake.');
const bearBite = () => death('You may have won against the bear the first time, but the bear is not scared of you anymore. The bear takes a bite out of your neck.');
const alcove = () => death('You run inside the alcove and activate a pressure plate. An arrow shoots from the other wall of the tunnel into your head.');
const jumpOver = () => death('You jumped the pit but by now the boulder has gotten too close and, not being able to outrun it any longer, you get turned into a pancake.');

//starts the game up at the first room
const startGame = function(event) {
  //remove event listener from the start button and get rid of it
  choiceButtonOne.removeEventListener('click', startGame);
  //gameContainer.removeChild(startButton);

  //remove event listeners from tunnelThree if the user chooses to play agains
  //choiceButtonOne.removeEventListener('click', startGame);
  choiceButtonTwo.removeEventListener('click', trueEnding);

  //set room description
  roomDescription.textContent = '';
  scrollingText('You awake in a dimly lit room. There are doors to your left and right. Which door do you pick? Press the right or left arrow key.')

  //hide buttons, player uses arrow keys
  choiceButtonOne.style.display = 'none';
  choiceButtonTwo.style.display = 'none';

  //add event listeners for each button
  window.addEventListener('keyup', checkKey);
}

//function to check which key the user pressed
const checkKey = function() {
  if (event.key === "ArrowRight") {
    pitfall();
  } else if (event.key === "ArrowLeft") {
    bearRoom();
  } else {
    startGame();
  }
}

//function to handle the bear room
const bearRoom = function() {
  //remove event listeners from previous room
  window.removeEventListener('keyup', checkKey);

  //set the scene
  roomDescription.textContent = "";
  scrollingText("There is a bear in here. It's sitting in front of another door eating from a pot of honey. How are you going to move the bear?")

  //show the buttons
  choiceButtonOne.style.display = 'block';
  choiceButtonTwo.style.display = 'block';

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
  roomDescription.textContent = '';
  scrollingText('The bear moved, you can go through the door now.')

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
  roomDescription.textContent = ''
  scrollingText('This room has a big bag of gold, a door with an exit sign above, and a tunnel opposite of the gold. Do you take the gold, or leave through the exit?')

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
  roomDescription.textContent = ''
  scrollingText('You exit through the door and are greeted with a beautiful view. ...The end(?)')

  //hide choice button two
  choiceButtonTwo.style.display = 'none';

  //set start button text to start over and show it
  choiceButtonOne.textContent = 'Start Over';

  //add event listener to start the game over
  choiceButtonOne.addEventListener('click', startGame);
}

//function for the boulder
const boulder = function() {
  //remove event listeners
  choiceButtonOne.removeEventListener('click', boulder);
  choiceButtonTwo.removeEventListener('click', outside);

  //set the scene
  roomDescription.textContent = '';
  scrollingText('All the sudden you hear the Indiana Jones theme playing faintly. "What in the world is going on?" you ask yourself. All of the sudden the room starts shaking and the wall in front of you lifts up. You see a huge boulder coming towards you. What do you do? You have 15 seconds before it flattens you.')
  //show third choice button, we use it this round
  choiceButtonThree.style.display = 'block';

  //set text content for buttons
  choiceButtonOne.textContent = 'Take the exit';
  choiceButtonTwo.textContent = 'Go back to the bear';
  choiceButtonThree.textContent = 'Run down The tunnel';

  //add a timer to give the player a certain amount of time to chooses
  boulderTimer = setTimeout(() => {
    death("You waited too long to choose and the boulder flattened you");
  }, 15000);

  //show the user how much time is left so they don't have to guess
  timeRemaining = 15;
  timer.textContent = timeRemaining + 's';
  gameContainer.appendChild(timer);
  countdownTimer = setInterval(() => {
    timeRemaining--;
    timer.textContent = timeRemaining + 's';
    if (timeRemaining === 0) {
      clearInterval(countdownTimer);
    }
  }, 1000);

  //add event listeners for buttons
  choiceButtonOne.addEventListener('click', lockedDoor);
  choiceButtonTwo.addEventListener('click', bearBite);
  choiceButtonThree.addEventListener('click', tunnelOne);
}

//function for the first part of the tunnel scene
const tunnelOne = function() {
  //clear timer from previous section
  clearTimeout(boulderTimer);
  clearInterval(countdownTimer);

  //remove event listeners
  choiceButtonOne.removeEventListener('click', lockedDoor);
  choiceButtonTwo.removeEventListener('click', bearBite);
  choiceButtonThree.removeEventListener('click', tunnelOne);

  //set the scene
  roomDescription.textContent = '';
  scrollingText('You frantically run down the tunnel away from the boulder. Up ahead you see an alcove that would allow you to get out of the way. What do you do? Act fast!')

  //hide the third button, we don't need it
  choiceButtonThree.style.display = 'none';

  //set the text content for the buttons
  choiceButtonOne.textContent = 'Hide in the alcove';
  choiceButtonTwo.textContent = 'Keep running';

  //set timeout to keep the player moving
  boulderTimer = setTimeout(() => {
    death("You waited too long to choose and the boulder flattened you");
  }, 15000);

  //show the user how much time is left so they don't have to guess
  timeRemaining = 15;
  timer.textContent = timeRemaining + 's';
  countdownTimer = setInterval(() => {
    timeRemaining--;
    timer.textContent = timeRemaining + 's';
    if (timeRemaining === 0) {
      clearInterval(countdownTimer);
    }
  }, 1000);

  //add event listeners for the buttons
  choiceButtonOne.addEventListener('click', alcove);
  choiceButtonTwo.addEventListener('click', tunnelTwo);

  //set timeout for later, to give the player a time limit
}

//function for the second part of the tunnel scene
const tunnelTwo = function() {
  //cancel timeout and interval from the previous section
  clearTimeout(boulderTimer);
  clearInterval(countdownTimer);

  //remove event listeners
  choiceButtonOne.removeEventListener('click', alcove);
  choiceButtonTwo.removeEventListener('click', tunnelTwo);

  //set the scene
  roomDescription.textContent = "";
  scrollingText("You keep running, feeling like the alcove could have been a trap. You're still well ahead of the boulder. You can see the light at the end of the tunnel. You see a pit coming up. You're pretty sure the alcove was a trap and this might be as well. But if it's not the boulder is too big and will roll right over it. Make your choice quick!")

  //set the text content for the buttons
  choiceButtonOne.textContent = 'Jump over the pit';
  choiceButtonTwo.textContent = 'Go in the pit';

  //add timeout to give the player a time limit
  boulderTimer = setTimeout(() => {
    death("You waited too long to choose and the boulder flattened you");
  }, 15000);

  //show the user how much time is left so they don't have to guess
  timeRemaining = 15;
  timer.textContent = timeRemaining + 's';
  countdownTimer = setInterval(() => {
    timeRemaining--;
    timer.textContent = timeRemaining + 's';
    if (timeRemaining === 0) {
      clearInterval(countdownTimer);
    }
  }, 1000);

  //add event listeners for the buttons
  choiceButtonOne.addEventListener('click', jumpOver);
  choiceButtonTwo.addEventListener('click', tunnelThree);
}

//function for the third part of the tunnel scene
const tunnelThree = function() {
  //remove timeout from previous section
  clearTimeout(boulderTimer);
  clearInterval(countdownTimer);

  //remove timer from screen
  gameContainer.removeChild(timer);

  //remove event listeners
  choiceButtonOne.removeEventListener('click', jumpOver);
  choiceButtonTwo.removeEventListener('click', tunnelThree);

  //add 1 to playCount
  playCount += 1;

  //set the scene
  roomDescription.textContent = "";
  scrollingText("You jump into the pit and to your surprise, you don't die. The boulder passes over top and you are finally safe. You make your way to the exit and breathe out a sigh of relief. You hear a voice ask you if you would like to play again.")

  //set text content for button
  choiceButtonOne.textContent = 'Yes';
  choiceButtonTwo.textContent = 'No';

  //add event listeners for buttons
  choiceButtonOne.addEventListener('click', startGame);
  choiceButtonTwo.addEventListener('click', trueEnding);
}

//function for the ending of the game
const trueEnding = function() {
  //remove event listeners
  choiceButtonOne.removeEventListener('click', startGame);
  choiceButtonTwo.removeEventListener('click', trueEnding);

  //end of game message
  roomDescription.textContent = '';
  scrollingText( '"Aw why not?" says your friend. "' + playCount + `${playCount > 1 ? " times" : " time"}` + ' is enough." you say. Its a warm summer day in 2007. You head inside your house to get a drink of water and eat a snack. Just another fun day of playing Indiana Jones with your friends.')

  gameContainer.appendChild(theEnd);

  choiceButtonOne.style.display = 'none';
  choiceButtonTwo.style.display = 'none';
}

function scrollingText(string) {
  //set timerCount to zero, this will help look through the string
  let timerCount = 0
  //if the timer is currently in use
  if (typeof textTimer !== 'undefined') {
    //clear timer
    clearInterval(textTimer)
  }
  //start timer
  textTimer = setInterval(() => {
    //pull 1 letter from string
    let currentLetter = string[timerCount]
    //add that letter to the main text element
    roomDescription.textContent += currentLetter
    //move to the next letter
    timerCount++

    // if we arrive at last letter
    if (string[timerCount] === undefined) {
      //stop the timer
      clearInterval(textTimer)
    }
  }, 25)
}


//setup for the game. Title, description, buttons
document.querySelector('#game').textContent = 'DOM Adventure Game';
//set HTML elements into javascript variables
const gameContainer = document.querySelector('#game');
const roomDescription = document.createElement('p');
const choiceButtonOne = document.createElement('button');
const choiceButtonTwo = document.createElement('button');
const choiceButtonThree = document.createElement('button');
const theEnd = document.createElement('p');
theEnd.textContent = "The End";
//add some class names to the buttons
choiceButtonOne.className = 'choice-button';
choiceButtonTwo.className = 'choice-button';
choiceButtonThree.className = 'choice-button';
choiceButtonOne.textContent = 'Start';
choiceButtonOne.style.display = 'block';
//add the first inital text
roomDescription.textContent = '';
scrollingText('Welcome to my adventure game! Once you click start, you will be presented with a description of the room and 2 or 3 choices. Choose wisely and have fun!')
//add HTML elements to the DOM
gameContainer.appendChild(roomDescription);
gameContainer.appendChild(choiceButtonOne);
gameContainer.appendChild(choiceButtonTwo);
gameContainer.appendChild(choiceButtonThree);

//keep track of number of times the player has restarted after the end
let playCount = 0;
//define these values in the global scope
let boulderTimer;
let countdownTimer;
let timeRemaining = 0;

//create timer element to show later
const timer = document.createElement('p');
timer.className = 'timer';

//start the game
choiceButtonOne.addEventListener('click', startGame);
