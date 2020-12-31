class PhysicsObject {
    constructor(mass, position) {
        this.mass = mass;
        this.position = position;

        this.acceleration = new Vector2D(0, 0.1);
        this.maxVelocity = 5.0;
        this.maxAcceleration = 5.0;
        this.velocity = new Vector2D(0, 0);
    }

    update(deltaTime) {
        this.position = this.position.add((this.velocity).scale(deltaTime));
        let newVelocity = this.velocity.add((this.acceleration).scale(deltaTime));

        if (newVelocity.magnitude() < this.maxVelocity) {
            this.velocity = newVelocity;
        }
        else
            this.velocity = newVelocity.unit().scale(this.maxVelocity);
    }

    applyForce(force) {
        let newAcceleration = this.acceleration.add(force.scale(1 / this.mass));

        if (newAcceleration.magnitude() < this.maxAcceleration)
            this.acceleration = newAcceleration;
        else
            this.acceleration = newAcceleration.unit().scale(this.maxAcceleration);
    }
}