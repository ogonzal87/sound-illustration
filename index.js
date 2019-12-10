let mic;
let initialMessage = document.getElementsByTagName("h1");
let flares1 = document.getElementById("layer1");
let flares2 = document.getElementById("layer2");
let flares3 = document.getElementById("layer3");
let mainPlanet = document.getElementById("layer4");
let bluePlanet = document.getElementById("layer5");
let yellowPlanet = document.getElementById("layer6");
let purplePlanet = document.getElementById("layer7");
let clouds = document.getElementById("layer8");

function setup() {
    mic = new p5.AudioIn()
    mic.start();
}

console.log(initialMessage)

function draw() {
    micLevel = mic.getLevel();

    if (micLevel >= 0.0028) {
        initialMessage[0].style.opacity = 0;
        flares1.style.opacity = micLevel * 30;
        flares2.style.opacity = micLevel * 20;
        flares3.style.opacity = micLevel * 20;
        mainPlanet.style.opacity = micLevel * 70;
        mainPlanet.style.animationDuration = `${(micLevel * 10000) * .5}s`;
        bluePlanet.style.opacity = micLevel * 70;
        yellowPlanet.style.opacity = micLevel * 70;
        purplePlanet.style.opacity = micLevel * 70;
        clouds.style.opacity = micLevel * 20;
    } else {
        initialMessage[0].style.opacity = 1;
        flares1.style.opacity = 0;
        flares2.style.opacity = 0;
        flares3.style.opacity = 0;
        mainPlanet.style.opacity = 0;
        bluePlanet.style.opacity = 0;
        yellowPlanet.style.opacity = 0;
        purplePlanet.style.opacity = 0;
        clouds.style.opacity = 0;
    }
}