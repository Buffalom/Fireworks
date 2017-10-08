let fireworks;
let gravity;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    angleMode(DEGREES);

    fireworks = [];
    gravity = createVector(0, 0.1);
}

function draw() {
    background(0);
    stroke(255);
    strokeWeight(4);

    if (random() < 0.03) {
        fireworks.push(new Firework());
    }

    for (let x = 0; x < fireworks.length; x++) {
        let firework = fireworks[x];
        if (firework.dead == true) {
            fireworks.splice(x, 1);
        }
        firework.update();
        firework.show();
    }
}