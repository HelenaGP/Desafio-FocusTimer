import { controls, soundsControls } from './elements.js';
import * as actions from './actions.js'

export function registerControls() {
  controls.addEventListener('click', (event) => {
    const action = event.target.dataset.action
    if(typeof actions[action] != 'function') {
      return
    }
    actions[action]()
  })
}

export function registerSoundsControls() {
  soundsControls.addEventListener('click', (event) => {
    const soundAction = event.target.dataset.action
    if(typeof actions[soundAction] != 'function'){
      return
    }

    actions[soundAction]()
  })
}