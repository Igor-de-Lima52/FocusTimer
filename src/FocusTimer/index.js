import state from "./state.js";
import * as timer from "./timer.js";
import * as events from "./events.js";
import * as actions from "./actions.js";

let btnAdd = document.getElementById("btnAdd");
let btnDecrease = document.getElementById("btnDecrease");
let interval;

export function start(minutes, seconds){
    state.minutes = minutes;
    state.seconds = seconds;

    timer.updateDisplay();
    
    events.registerControls();
    events.registerMusics();
    btnAdd.addEventListener("mousedown", (e)=>{
        if(e.buttons == 1) {
            interval = setInterval(actions.add, 300);
        }
    });
    btnAdd.addEventListener("mouseup", () => {
        clearInterval(interval);
    });
    btnDecrease.addEventListener("mousedown", (e)=>{
        if(e.buttons == 1){
            interval = setInterval(actions.decrease, 300);
        }
    })
    btnDecrease.addEventListener("mouseup", ()=>{
        clearInterval(interval);
    })
}