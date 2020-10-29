/**
 * DOM Adventure Game
 */

// create variables
let gameText = document.querySelector('.game-text')
let button1 = document.querySelector('.button1')
let button2 = document.querySelector('.button2')
let button3 = document.querySelector('.button3')
let button4 = document.querySelector('.button4')

//create Objects
const player = {
  health: 100
}

function gameStart() {

  //set the general Text
  gameText.textContent = "You are a monster hunter getting chased in a forest by a band of monsters. Do you want to meet up with your partner, or take them solo.";

  // add text to buttons and event listeners to buttons
  button1.textContent = 'Meet up with partner'
  button1.addEventListener('click', meetPartner)

  button2.textContent = "You're the confident type"
  button2.addEventListener('click', confidentType)

  button3.style.display = 'none'
  button4.style.display = 'none'
}

function confidentType() {
  button1.removeEventListener('click', meetPartner)
  button2.removeEventListener('click', confidentType)
  gameText.textContent = "You're so confident you stop in your tracks and prepare to fight. How do you draw your weapons"

  button1.textContent = 'Just your dagger'
  button1.addEventListener('click', event => {
    gameOver('you try to fight them but a small dagger was not enough to defend yourself, and you die a valiant death.')
  })

  button2.textContent = 'Just your Sword'

  button3.textContent = 'Why not both?'
  button3.style.display = 'block'
  button3.addEventListener('click', event => {
    gameOver('You couldnt take both weapons out in time so you ded')
  })
}

function meetPartner() {
  button1.removeEventListener('click', meetPartner)
  button2.removeEventListener('click', confidentType)

  gameText.textContent = 'You meet your partner in a clearing, while you arrive arrows fly past you torwards your pursuers. You turn to 2 dead vampires, but another 2 are rapidly approaching'

  button1.textContent = 'Draw your dagger'
  button1.addEventListener('click', partnerWithDagger)

  button2.textContent = 'Draw your Sword'

  button3.textContent = 'Draw both weapons'
  button3.style.display = 'block'
}

function partnerWithDagger() {
  //take damage and display message
  player.health -= 25
  gameText.textContent = 'You take out the remaining enemies with your partner and take minor damage. Your current health is ' + player.health + 'hp'

  button1.textContent = 'placeholder'
  button2.textContent = 'placeholder'
  button3.textContent = 'placeholder'
}

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
  button3.textContent = 'block'
  button4.textContent = 'block'

  //show/hide buttons
  button1.style.display = 'block'
  button2.style.display = 'block'
  button3.style.display = 'block'
  button4.style.display = 'block'
}


function gameOver(text) {
  /*remove past listeners
  button1.removeEventListener()
  button2.removeEventListener()
  button3.removeEventListener()
  button4.removeEventListner()
 */
  //change main text element
  gameText.textContent = text + ', To start over refresh the page.'
  clearListener(button1)
  //show/hide buttons
  button1.style.display = 'none'
  button2.style.display = 'none'
  button3.style.display = 'none'
  button4.style.display = 'none'
}
function clearListener(node) {
  let clone = node.cloneNode(true)
  console.log(clone)
  console.log(node)

}
gameStart();
