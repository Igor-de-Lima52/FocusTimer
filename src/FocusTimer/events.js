import * as actions from "./actions.js";
import * as el from "./elements.js";
import { updateDisplay } from "./timer.js";

export function registerControls(){
    el.controls.addEventListener("click", (event) => {
        const action = event.target.dataset.action;
        if(typeof actions[action]() != "function") return;
        actions[action]();
        updateDisplay();
    });
}
export function registerMusics(){
    el.sounds.addEventListener("click", (event)=>{
        const sound = event.target.dataset.sound;
        if(typeof actions[sound]() != "function") return;
        actions[sound]();
        updateDisplay();
    });
}