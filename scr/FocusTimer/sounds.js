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
  if(state.isMute) {
    state.currentSound = sound
    state.isMute=false
    sound.play()
    return
  }
  if(state.currentSound != sound) {
    state.currentSound.pause()
  }
  else{
    sound.pause()
    state.isMute=true
    return
  }
  sound.play()
  state.currentSound = sound
}