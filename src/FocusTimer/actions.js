import state from './state.js'
import * as timer from './timer.js'
import * as el from './elements.js'
import * as sounds from './sounds.js'

export function toggleRunning() {
    state.isRunning = document.documentElement.classList.toggle('running')

    timer.countdown()
    sounds.buttonPressAudio.play()
}

export function reset() {
    state.isRunning = false
    document.documentElement.classList.remove('running')
    timer.updateDisplay()

    sounds.buttonPressAudio.play()
    
}

export function set() {
    el.minutes.setAttribute('contenteditable', true)
    el.minutes.focus()

    
}

export function toggleMusic() {
    state.isMute = document.documentElement.classList.toggle('music-on')

    if(state.isMute) {
        sounds.bgAudio.play()
        return
    }

    sounds.bgAudio.pause()
    
}

export function btnFloresta() {        
    state.isMute = document.documentElement.classList.toggle('music-on')

    if(state.isMute) {
        sounds.btnFloresta.play();
        return
    }

    sounds.btnFloresta.pause()
}

export function btnChuva() {
    state.isMute = document.documentElement.classList.toggle('music-on')

    if(state.isMute) {
        sounds.btnChuva.play();
        return
    }
    
    sounds.btnChuva.pause()
}

export function btnCafeteira() {
    state.isMute = document.documentElement.classList.toggle('music-on')

    if(state.isMute) {
        sounds.btnCafeteira.play();
        return
    }
    
    sounds.btnCafeteira.pause()
}

export function btnLareira() {
    state.isMute = document.documentElement.classList.toggle('music-on')

    if(state.isMute) {
        sounds.btnLareira.play();
        return
    }
    
    sounds.btnLareira.pause()
}