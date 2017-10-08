class Firework {
    constructor() {
        this.firework = new Particle(random(width), height, 0, random(-8, -15), 0, 0, 20);
        this.exploded = false;
        this.dead = false;
        this.particles = [];
    }

    explode() {
        for (let x = 0; x < 50; x++) {
            let vel = p5.Vector.random2D().mult(random(0, 3));
            this.particles.push(new Particle(this.firework.pos.x, this.firework.pos.y,vel.x, vel.y, 0, 0, 5));
        }
    }

    update() {
        if (!this.exploded) {
            this.firework.applyBehaviors();
            this.firework.update();
            
            if (this.firework.vel.y > 0) {
                this.exploded = true;
                this.explode();
            }
        } else {
            for (let x = 0; x < this.particles.length; x++) {
                this.particles[x].applyBehaviors();
                this.particles[x].update();
                if (this.particles[x].toLive <= 0) {
                    this.particles.splice(x, 1);
                }
            }
            if (this.particles.length == 0) {
                this.dead = true;
            }
        }
    }

    show() {
        if (!this.exploded) {
            this.firework.show();
        } else {
            for (let x = 0; x < this.particles.length; x++) {
                this.particles[x].show();
            }
        }
    }
}