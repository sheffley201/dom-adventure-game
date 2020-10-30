/**
 * DOM Adventure Game
 */

//Create function that starts the game
//create a paragraph
const mainPara = document.createElement("p");
//add text content to the paragraph

const startGame = function() {
  //set variable for main
  const main = document.querySelector("#game");
  //create a variable for a div
  const content = document.createElement("div");
  //add text to main paragraph
  mainPara.textContent = "You awake in a dimly lit room. There are doors to your left and right. Which door do you pick?";
  //append content into the main
  main.appendChild(content);
  //append the paragraph into the div(content)
  content.appendChild(mainPara);
  //store section for buttons in a variable
  const btnArea = document.querySelector("#buttonArea");
  //create button elements
  const button1 = document.createElement("button");
  const button2 = document.createElement("button");
  //add text to buttons
  button1.textContent = "Left";
  button2.textContent = "right";
  //set event listeners for each button to go for each door
  //add function for which button is pressed
  button1.addEventListener("click", left = () => {
    return bearRoom();

  });
  button2.addEventListener("click", right = () => {
    return pitTrap();
  });
  //append buttons to btnArea
  btnArea.appendChild(button1);
  btnArea.appendChild(button2);
}
//add death function
const death = function(string) {
  //change text of paragraph
  mainPara.textContent = string + " You are dead. Press the space bar if you wish to start again.";
  //remove buttons
  const section = document.querySelector('#buttonArea');
  const button1 = document.querySelector('button');
  const button2 = document.getElementsByTagName('button')[1];
  const button3 = document.querySelector('button:last-child');
  section.removeChild(button1);
  section.removeChild(button2);
  section.removeChild(button3);
  //add listener for when you press spacebar
  //call function startGame when space is pressed
}

const bearRoom = function() {
  //change text of main paragraph
  mainPara.textContent = "There is a bear in here. It's sitting in front of another door eating from a pot of honey. How are you going to move the bear?";
  //store section in a variable
  const buttonSection = document.querySelector("#buttonArea");
  //store all buttons in variables
  const button1 = document.querySelector("button");
  const button2 = document.querySelector("button:last-child");
  //removing event listeners
  button1.removeEventListener('click', left);
  button2.removeEventListener('click', right);
  //create new button
  const button3 = document.createElement("button");
  //append third button
  buttonSection.appendChild(button3);
  //change text on buttons
  button1.textContent = "taunt bear";
  button2.textContent = "try door";
  button3.textContent = "take honey";
  //event listeners for each button
  button1.addEventListener('click', taunt = ()=> {
    return bearTaunt();
  });
  button2.addEventListener('click', door = ()=>{
    return death("The bear swats at you as you walk past.")
  });
  button3.addEventListener('click', honey = ()=> {
    return death("That was really stupid. The bear bites your head off.")
  });

const bearTaunt = function () {
  const button1 = document.querySelector('button');
}
}

startGame();
