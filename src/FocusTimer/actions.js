import state from "./state.js";
import * as el from "./elements.js";
import * as timer from "./timer.js";
import * as sounds from "./sounds.js";

export function toggleRunning(){
    state.isRunning = document.documentElement.classList.toggle("running");
    timer.countdown();
}
export function add(){
    if(state.minutes >= 60){
        return
    }
    reset();
    state.minutes += 5;
    clearTimeout(state.countdownId);
    timer.updateDisplay();
}
export function decrease(){
    if(state.minutes <= 0){
        return
    }
    reset();
    state.minutes -= 5;
    clearTimeout(state.countdownId);
    timer.updateDisplay();
}
export function reset(){
    state.isRunning = false;
    document.documentElement.classList.remove("running");
    timer.updateDisplay();
}
export function forest(){
    state.isMute = document.documentElement.classList.toggle("music-on");
    if(state.isMute){
        el.btnForest.classList.add("active");
        sounds.rain.pause();
        el.btnRain.classList.remove("active");
        sounds.cafe.pause();
        el.btnCafe.classList.remove("active");
        sounds.bonfire.pause();
        el.btnBonfire.classList.remove("active");
        sounds.forest.play();
        return
    }
    
    el.btnForest.classList.remove("active");
    sounds.forest.pause();
}
export function rain(){
    state.isMute = document.documentElement.classList.toggle("music-on");
    if(state.isMute){
        el.btnRain.classList.add("active");
        sounds.forest.pause();
        el.btnForest.classList.remove("active");
        sounds.cafe.pause();
        el.btnCafe.classList.remove("active");
        sounds.bonfire.pause();
        el.btnBonfire.classList.remove("active");
        sounds.rain.play();
        return
    }
    el.btnRain.classList.remove("active");
    sounds.rain.pause();
}
export function cafe(){
    state.isMute = document.documentElement.classList.toggle("music-on");
    if(state.isMute){
        el.btnCafe.classList.add("active");
        sounds.forest.pause();
        el.btnForest.classList.remove("active");
        sounds.rain.pause();
        el.btnRain.classList.remove("active");
        sounds.bonfire.pause();
        el.btnBonfire.classList.remove("active");
        sounds.cafe.play();
        return
    }
    el.btnCafe.classList.remove("active");
    sounds.cafe.pause();
}
export function bonfire(){
    state.isMute = document.documentElement.classList.toggle("music-on");
    if(state.isMute){
        el.btnBonfire.classList.add("active");
        sounds.forest.pause();
        el.btnForest.classList.remove("active");
        sounds.rain.pause();
        el.btnRain.classList.remove("active");
        sounds.cafe.pause();
        el.btnCafe.classList.remove("active");
        sounds.bonfire.play();
        return
    }
    el.btnBonfire.classList.remove("active");
    sounds.bonfire.pause();
}