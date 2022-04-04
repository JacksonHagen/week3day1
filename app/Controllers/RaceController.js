import { AppState } from "../AppState.js"


//Any input is handled by the controller
let _intervalID = 0

function _drawRacers(){
    let template = ''
    let racers = AppState.racers
    racers.forEach(r => template += r.Template)
    document.getElementById('track').innerHTML =  template
}

function _moveRacers() {
    let racers = AppState.racers
    let undefinedFlag = racers.find(r => r.distance > 95)
    if(undefinedFlag === undefined){
        racers.forEach(r => r.move())
        _drawRacers()
    } else {
        clearInterval(_intervalID)
        // window.alert(`${undefinedFlag.name} won the race!!`)
        Swal.fire({
            icon: 'warning',
            title:`${undefinedFlag.name} won the race!`
        })
    }

}

export class RaceController {
    constructor(){
        _drawRacers()
    }

    startRace() {
       _intervalID = setInterval(_moveRacers, 100)
    }

    reset() {
        AppState.racers.forEach(r => r.distance = 0)
        clearInterval(_intervalID)
        _drawRacers()
    }

    changeName(newName){
        racersService.changeName(newName)
        // service layer would look something like this:
        // changeName(newName){
            // talks to racer in the appstate and will edit the name

        // }
    }
}