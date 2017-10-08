class Particle {
    constructor(x, y, xVel, yVel, xAcc, yAcc, lifespan, color) {
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

        this.toLive -= 0.1;
    }

    update() {
        this.pos.add(this.vel);
        this.vel.add(this.acc);
        this.acc = createVector();
    }

    show() {
        stroke(255, map(this.toLive, 0, this.lifespan, 0, 255));
        point(this.pos.x, this.pos.y);
    }
}