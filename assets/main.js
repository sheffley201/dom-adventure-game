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

//pitrap function here
const pitTrap = function() {
  //change text of main paragraph
  mainPara.textContent = "You take a step into the room and find yourself sliding down a ramp. Quick, press spacebar to jump!";
  //remove buttons
  const section = document.querySelector('#buttonArea');
  const button1 = document.querySelector('button');
  const button2 = document.getElementsByTagName('button')[1];
  section.removeChild(button1);
  section.removeChild(button2);
  //set a timer to return death after 9seconds
  let trapFall = setTimeout(() => {
  return death("You fail to jump over the gap and fall into a pit.")
  }, 9000);
  //if the user presses spacebar within 10seconds move to new Room
  //stop timer if spacebar is pressed
  window.addEventListener("keyup", event => {
    if (event.key == " ") {
    clearTimeout(trapFall);
    return hallway();
    }
  });
}

//hallway function
const hallway = function () {
  //change text of mainPara
  mainPara.textContent = 'You jump from the ramp and land roughly. You stand up and find yourself in a hallway with two directions. Which way do you go? (Use "d" for right and "a" for left.)'
  window.addEventListener("keydown", event => {
    if (event.key == "a") {
      return death("As you walk down the left hallway a slab of stone falls from the ceiling and crushes you.");
    } else if (event.key == "d") {
      return ghostRoom();
    }
  })
};

//adding a ghost room because reasons
const ghostRoom = function() {
  //variable for key is false
  //variable for cloth is false
  //variable for ghost is false
  //change the mainPara text
  //add 3 buttons
  //name buttons
  //remove event listener for keydown
  //add event listeners for buttons
  //button1 check door
    // if no key, it's locked
    //if key , opens to new Room
  //button 2 check table
    //if cloth false remove cloth to find hand
      //cloth equals true
      //change button to check hand
    //if cloth equals true, look at hand decide not to take it
  //button3 check closet
    //if ghost false, open doors and find ghost head
      //set ghost to true
    //if ghost true, pick up key on ground
      //set key to true
}



//add death function
const death = function(string) {
  //change text of paragraph
  mainPara.textContent = string + " You are dead. Play again?";
  //remove buttons
  const section = document.querySelector('#buttonArea');
  const button1 = document.querySelector('button');
  const button2 = document.getElementsByTagName('button')[1];
  const button3 = document.querySelector('button:last-child');
  section.removeChild(button1);
  section.removeChild(button2);
  section.removeChild(button3);
};

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
}


const bearTaunt = function () {
  mainPara.textContent = "The bear seems a bit mad but moves to the side of the room. What would you like to do now?"
  //store buttons in variables and remove event listeners
  const button1 = document.querySelector('button');
  const button2 = document.getElementsByTagName('button')[1];
  const button3 = document.querySelector('button:last-child');
  button1.removeEventListener('click', taunt);
  button2.removeEventListener('click', door);
  button3.removeEventListener('click', honey);
  //add functions for when each one is pressed
  button1.addEventListener('click', taunt = ()=> {
    return death("The bear has had enough of you. He charges you and bites your head off.");
  });
  button2.addEventListener('click', door = ()=>{
    return goldRoom();
  });
  button3.addEventListener('click', honey = ()=> {
    return death("That was really stupid. The bear bites your head off.")
  });
}


const goldRoom = function() {
  //set variable for amount of gold
  let gold = 0;
  mainPara.textContent = "You enter the room and find yourself staring at a room full of gold. On the other side of the room there's a door. What do you do?";
  //store buttons in variables and remove event listeners
  const button1 = document.querySelector('button');
  const button2 = document.getElementsByTagName('button')[1];
  const button3 = document.querySelector('button:last-child');
  button1.removeEventListener('click', taunt);
  button2.removeEventListener('click', door);
  button3.removeEventListener('click', honey);
  //change button textContent
  button1.textContent = "take some gold";
  button2.textContent = "take all gold";
  button3.textContent = "use door";
  //add event listeners button1
  button1.addEventListener('click', someGold = () => {
    if (gold === 0) {
      mainPara.textContent = "You've taken some gold.";
      gold++;
      button1.textContent = "Take more?";
    } else if (gold === 1) {
      mainPara.textContent = "You've taken some more gold. You're pockets are feeling heavy.";
      gold++;
    } else if (gold === 2) {
      return death("You've been greedy. The floor opens up and swallows you whole.");
    }
  });
  //add event listener button2
  button2.addEventListener('click', allGold = () => {
    return death("You're too greedy. The floor opens up and swallows you whole.");
  });
  //add event listener to button3
  button3.addEventListener('click', door = () => {
    //option for taking no gold
    if (gold === 0) {
      mainPara.textContent = "You open the door and find yourself outside. You've survived."
    };
    //option for taking some gold
    if (gold === 1) {
      mainPara.textContent = "You open the door and find the outdoors to greet you. You've survived, and a little richer to boot."
    };
    //option for taking alot of gold
    if (gold === 2) {
      mainPara.textContent = "You open the door and find the outdoors to greet you. You've survived, and with quite a bit of gold as reward."
    };
    //delete buttons
    const section = document.querySelector('section');
    section.removeChild(button1);
    section.removeChild(button2);
    section.removeChild(button3);
  });
}

startGame();
