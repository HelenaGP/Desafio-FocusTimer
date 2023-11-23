import state from "./state.js"

export const bgTree = new Audio('./sounds/floresta.wav')

export const bgFire = new Audio('./sounds/lareira.wav')

export const bgRain = new Audio('./sounds/chuva.wav')

export const bgCoffee = new Audio('./sounds/cafeteria.wav')

bgTree.loop = true
bgFire.loop = true
bgRain.loop = true
bgCoffee.loop = true

export function mute() {
  bgTree.pause()
  bgRain.pause()
  bgFire.pause()
  bgCoffee.pause()
}

export function playTrack(sound) {
  if(state.isMute){
    sound.play()
  }
  else {
    mute()
    sound.play()
  }
}