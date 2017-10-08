class Particle {
    constructor(x, y, xVel, yVel, xAcc, yAcc, lifespan, color) {
        this.color =  color || {
            red: random(100, 255),
            green: random(100, 255),
            blue: random(100, 255),
            alpha: 255
        }
        this.pos = createVector(x, y) || createVector();
        this.vel = createVector(xVel, yVel) || createVector();
        this.acc = createVector(xAcc, yAcc) || createVector();
        this.lifespan = lifespan || 10;
        this.toLive = this.lifespan;
    }
    
    applyForce(force) {
        this.acc.add(force);
    }

    applyBehaviors() {
        this.applyForce(gravity);

        this.color.alpha = map(this.toLive, 0, this.lifespan, 0, 255);
        this.toLive -= 0.1;
    }

    update() {
        this.pos.add(this.vel);
        this.vel.add(this.acc);
        this.acc = createVector();
    }

    show() {
        stroke(this.color.red, this.color.green, this.color.blue, this.color.alpha);
        point(this.pos.x, this.pos.y);
    }
}