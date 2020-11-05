/**
 * DOM Adventure Game
 */

// create variables
let gameText = document.querySelector('.game-text')
let button1 = document.querySelector('.button1')
let button2 = document.querySelector('.button2')
let button3 = document.querySelector('.button3')
let button4 = document.querySelector('.button4')
let buttons = document.querySelectorAll('button')
let resetButton = document.querySelector('.resetButton')
let timer;

const player = {
  health: 100
}

function gameStart() {
  //hide reset button
  resetButton.style.display = 'none';
  //set the starter game Text
  gameText.textContent = '';
  scrollingText("You are a monster hunter getting chased in a forest by a band of monsters. You can meet up with your partner, or take the monsters on solo.")

  // add text to buttons and eventListeners to each button
  button1.style.display = 'inline'
  button2.style.display = 'inline'

  button1.textContent = 'Meet up with partner'
  button1.addEventListener('click', meetPartner)

  button2.textContent = "You're the confident type"
  button2.addEventListener('click', confidentType)

  //hide button 3 and 4 because there not being used
  button3.style.display = 'none'
  button4.style.display = 'none'
}

function confidentType() {
  //remove the listeners from previous buttons.
  button1.removeEventListener('click', meetPartner)
  button2.removeEventListener('click', confidentType)

  //change the game text
  gameText.textContent = ''
  scrollingText("You're so confident you stop in your tracks and prepare to fight. How do you draw your weapons")

  //button 1 leads to death
  button1.textContent = 'Just your dagger'
  button1.addEventListener('click', smallDagger = () => {
    gameOver('You try to fight them, but a small dagger was not enough to defend yourself and you die a valiant death')
  })

  // this is the only surviving option
  button2.textContent = 'Just your Sword'
  button2.addEventListener('click', survivedMonsters)

  //button 3 also leads to death
  button3.textContent = 'Why not both?'
  button3.style.display = 'block'
  button3.addEventListener('click', wieldBoth = () => {
    gameOver('You dont know how to wield both efficiently, you got overconfient and died.')
  })
}

function survivedMonsters() {
  //remove past listeners
  button1.removeEventListener('click', smallDagger)
  button2.removeEventListener('click', survivedMonsters)
  button3.removeEventListener('click', wieldBoth)

  //change the game text
  gameText.textContent = ''
  scrollingText('You survived the monsters but you are severely hurt, you meet up with your partner and decide what to do next. This is end of this path, please refresh')

  //change button text
  button1.textContent = 'Hide in a nearby building'
  button2.textContent = 'Set traps for other pursuers'

  //show/hide buttons
  button1.style.display = 'none'
  button2.style.display = 'none'
  button3.style.display = 'none'
  button4.style.display = 'none'

  //end of this path, reset the game
  resetButton.style.display = 'block';

  resetButton.addEventListener('click', gameStart);
}

function meetPartner() {
  //remove previous listeners
  button1.removeEventListener('click', meetPartner)
  button2.removeEventListener('click', confidentType)

  //set game text
  gameText.textContent = ''
  scrollingText('You meet your partner in a clearing. you can choose to set traps, or keep running.')


  //add new text and event listener
  button1.textContent = 'Set traps'
  button1.addEventListener('click', setTraps)

  button2.textContent = 'Keep running'
  button2.addEventListener('click', keepRunning)
}

function keepRunning() {
  //remove past listeners
  button1.removeEventListener('click', setTraps)
  button2.removeEventListener('click', keepRunning)

  //if they did not place traps display this
  if (!player.traps) {
    gameText.textContent = ''
    scrollingText('You kept running until you came across a building, it looks old and abandoned.')
  } else {
    //if they did place traps display this message
    gameText.textContent = ''
    scrollingText('As you keep running you hear and explosion behind you, you come across a old building that looks abandoned')
    player.timesRan = 1
  }

  //change button text
  button1.textContent = 'Hide in the building'
  button1.addEventListener('click', insideBuilding)
  button2.textContent = 'Too obvious, you keep running'

}

function setTraps() {
  //somehow remember that we set Traps
  player.traps = true
  //remove past listeners
  button1.removeEventListener('click', setTraps)
  button2.removeEventListener('click', keepRunning)

  //change main text
  gameText.textContent = ''
  scrollingText('you set traps behind you. will you wait for survivors or continue running')


  //change button text
  button1.textContent = 'Wait for Survivors'
  button2.textContent = 'get a lead while you can'
  button2.addEventListener('click', keepRunning)
}

function insideBuilding() {
  //remove past listeners
  button1.removeEventListener('click', insideBuilding)

  //change the game text
  gameText.textContent = ''
  scrollingText('Your inside the building and push furniture agianst he door to keep them out. you and your partner decide to sweep the building to make sure no one is inside.')


  //change button text
  button1.textContent = 'take the upstairs'
  button2.textContent = 'take the downstairs'
  button3.textContent = ''
  button4.textContent = ''

  button1.style.display = 'none'
  button2.style.display = 'none'

  //there is nothing after this, so we reset the game
  resetButton.style.display = 'block';

  resetButton.addEventListener('click', gameStart);
}

function gameOver(text) {
  //remove past listeners
  button1.removeEventListener('click', smallDagger)
  button2.removeEventListener('click', survivedMonsters)
  button3.removeEventListener('click', wieldBoth)
  //change main text element
  gameText.textContent = ''
  scrollingText(text + '. To start over refresh the page')

  //set each buttons display to none
  for (let button of buttons) {
    button.style.display = 'none'
  }

  //the game is over, reset the game
  resetButton.style.display = 'block';

  resetButton.addEventListener('click', gameStart);


}

//a fun function that displays the text like an adventure game
function scrollingText(string) {
  //set timerCount to zero, this will help look through the string
  let timerCount = 0
  //if the timer is currently in use
  if (typeof timer !== 'undefined') {
    //clear timer
    clearInterval(timer)
  }
  //start timer
  timer = setInterval(() => {
    //pull 1 letter from string
    let currentLetter = string[timerCount]
    //add that letter to the main text element
    gameText.textContent += currentLetter
    //move to the next letter
    timerCount++

    // if we arrive at last letter
    if (string[timerCount] === undefined) {
      //stop the timer
      clearInterval(timer)
    }
  }, 25)
}

//this is a template for a scene bc each one is similar
function placeholder() {
  //remove past listeners
  button1.removeEventListener()
  button2.removeEventListener()
  button3.removeEventListener()
  button4.removeEventListener()

  //change main text element
  gameText.textContent = ''
  scrollingText('placeholder')

  //change button text
  button1.textContent = 'block'
  button2.textContent = 'block'
  button3.textContent = ''
  button4.textContent = ''

  //show/hide buttons
  button1.style.display = 'block'
  button2.style.display = 'block'
  button3.style.display = 'block'
  button4.style.display = 'block'
}






gameStart();
