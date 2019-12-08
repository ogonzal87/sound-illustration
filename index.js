let mic;
let initialMessage = document.getElementsByTagName("h1");
let flares = document.getElementById("layer1");
let leaf1 = document.getElementById("layer2");
let unseen = document.getElementById("layer3");
let leaf2 = document.getElementById("layer4");
let leaf3 = document.getElementById("layer5");
let hear = document.getElementById("layer6");
let leaf4 = document.getElementById("layer7");
let the = document.getElementById("layer8");
let leaf5 = document.getElementById("layer9");
let background = document.getElementById("layer10");

function setup() {
    mic = new p5.AudioIn()
    mic.start();
}

console.log(initialMessage)

function draw() {
    micLevel = mic.getLevel();

    if (micLevel >= 0.002) {
        initialMessage[0].style.opacity = 0;
        flares.style.opacity = micLevel * 30;
        leaf1.style.opacity = micLevel * 80;
        unseen.style.opacity = micLevel * 20;
        leaf2.style.opacity = micLevel * 70;
        leaf3.style.opacity = micLevel * 60;
        hear.style.opacity = micLevel * 20;
        leaf4.style.opacity = micLevel * 50;
        the.style.opacity = micLevel * 20;
        leaf5.style.opacity = micLevel * 40;
        background.style.opacity = micLevel * 100;
    } else {
        initialMessage[0].style.opacity = 1;
        layer1.style.opacity = 0;
        leaf1.style.opacity = 0;
        unseen.style.opacity = 0;
        leaf2.style.opacity = 0;
        leaf3.style.opacity = 0;
        hear.style.opacity = 0;
        leaf4.style.opacity = 0;
        the.style.opacity = 0;
        leaf5.style.opacity = 0;
        background.style.opacity = 0;
    }
}