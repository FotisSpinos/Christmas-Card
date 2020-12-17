class PhysicsObject {
    constructor(mass, position) {
        this.mass = mass;
        this.position = position;

        this.acceleration = new Vector2D(0, 0.0001);
        this.maxAcceleration = new Vector2D(10, 10);
        this.velocity = new Vector2D(0, 0);
    }

    update(deltaTime) {
        this.position = this.position.add((this.velocity).scale(deltaTime));
        this.velocity = this.velocity.add((this.acceleration).scale(deltaTime));
    }

    applyForce(force) {
        this.acceleration = force / this.mass;
    }
}