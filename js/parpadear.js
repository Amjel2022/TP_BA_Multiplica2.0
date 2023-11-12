timer();
function timer() {
    let blink = document.getElementById("blink");
    blink.style.opacity = blink.style.opacity == 0 ? 1 : 0;
    setTimeout(timer, 500); 
}