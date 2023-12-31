import * as el from './elements.js'
import state from './state.js'
import * as timer from './timer.js'
import * as sounds from './sounds.js'

export function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle('running')

  timer.countdown()
}

export function reset() {
  state.isRunning = false
  document.documentElement.classList.remove('running')
  timer.updateDisplay()
}

export function addFive() {
  let minutes = Number(el.minutes.textContent)
  minutes = minutes + 5
  let seconds = Number(el.seconds.textContent)
  if(minutes > 60) {
    minutes = 60
  }
  timer.updateDisplay(minutes,seconds)
}

export function decreaseFive() {
  let minutes = Number(el.minutes.textContent)
  minutes = minutes - 5
  let seconds = Number(el.seconds.textContent)
  if(minutes < 0){
    minutes = 0
  }
  timer.updateDisplay(minutes,seconds)
}

export function setSoundTree() {
  sounds.playTrack(sounds.bgTree)
}

export function setSoundRain() {
  sounds.playTrack(sounds.bgRain)
}

export function setSoundFire() {
  sounds.playTrack(sounds.bgFire)
}

export function setSoundCoffee() {
  sounds.playTrack(sounds.bgCoffee)
}