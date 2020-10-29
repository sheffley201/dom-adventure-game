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
let letterForTimer = 0;
let stringlength;
let timer;
//create player Object
const player = {
  health: 100
}

function gameStart() {
  //set the starter game Text
  scrollingText("You are a monster hunter getting chased in a forest by a band of monsters. You can meet up with your partner, or take the monsters on solo.")
//  gameText.textContent = "You are a monster hunter getting chased in a forest by a band of monsters. You can meet up with your partner, or take the monsters on solo.";

  // add text to buttons and eventListeners to each buttons
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
  button1.addEventListener('click', event => {
    gameOver('You try to fight them, but a small dagger was not enough to defend yourself and you die a valiant death')
  })

  // this is the only surviving option
  button2.textContent = 'Just your Sword'
  button2.addEventListener('click', survivedMonsters)

  //button 3 also leads to death
  button3.textContent = 'Why not both?'
  button3.style.display = 'block'
  button3.addEventListener('click', event => {
    gameOver('You dont know how to wield both efficiently, you got overconfiant and died.')
  })
}

function survivedMonsters() {
  //remove past listeners
  button1.removeEventListener('click', gameOver)
  button2.removeEventListener('click', survivedMonsters)
  button3.removeEventListener('click', event)

  //change main text element
  //change the game text
  gameText.textContent = ''
  scrollingText('You survived the monsters but you are severely hurt, you meet up with your partner and decide what to do next')

  //change button text
  button1.textContent = 'Hide in a nearby building'
  button2.textContent = 'Set traps for other pursuers'
  button3.textContent = ''
  button4.textContent = ''

  //show/hide buttons
  button1.style.display = 'block'
  button2.style.display = 'block'
  button3.style.display = 'none'
  button4.style.display = 'none'
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

  //change main text element
  if (!player.traps) {
    gameText.textContent = ''
    scrollingText('You kept running until you came across a building, it looks old and abandoned.')
  } else {
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


  gameText.textContent = ''
  scrollingText('you set traps behind you. will you wait for survivors or continue running')

  //change main text element
  gameText.textContent =

  //change button text
  button1.textContent = 'Wait for Survivors'
  button2.textContent = 'get a lead while you can'
  button2.addEventListener('click', keepRunning)
}

function insideBuilding() {
  //remove past listeners
  button1.removeEventListener('click', insideBuilding)

  gameText.textContent = ''
  scrollingText('Your inside the building and push furniture agianst he door to keep them out. you and your partner decide to sweep the building ot make sure no one is inside.')

  //change main text element
  gameText.textContent =

  //change button text
  button1.textContent = 'take the upstairs'
  button2.textContent = 'take the downstairs'
  button3.textContent = ''
  button4.textContent = ''
}


function gameOver(text) {
  //change main text element
  scrollingText(text + '. To start over refresh the page')

  //set each buttons display to none
  for (let button of buttons) {
    button.style.display = 'none'
  }
}

//i decided to make a template for a scene bc each one  is similar
function placeholder() {
  //remove past listeners
  button1.removeEventListener()
  button2.removeEventListener()
  button3.removeEventListener()
  button4.removeEventListener()

  //change main text element
  gameText.textContent = 'placeholder'

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

//given arg like 'string'
function scrollingText(string) {
  if (typeof timer !== 'undefined') {
    clearInterval(timer)
  }
  letterForTimer = 0
  stringlength = string.length
  //set timer to add letter
  timer = setInterval(() => {
    let currentLetter = string[letterForTimer]
    gameText.textContent += currentLetter
    //moves to next letter in string
    letterForTimer++
    // if we arrive at last letter
    if (string[letterForTimer] === undefined) {
      clearInterval(timer)
    }
  }, 30)
}

gameStart();
