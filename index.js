let mic;
let box1 = document.getElementById("box1");
let box2 = document.getElementById("box2");
let box3 = document.getElementById("box3");

function setup() {
    mic = new p5.AudioIn()
    mic.start();
}

function draw() {
    micLevel = mic.getLevel();
    let level;

    if (micLevel >= 0.1) {
        box1.style.opacity = micLevel * 90;
        box2.style.opacity = micLevel * 30;
        box3.style.opacity = micLevel * 40;
    } else {
        box1.style.opacity = 0;
        box2.style.opacity = 0;
        box3.style.opacity = 0;
    }


}