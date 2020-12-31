class Snowflake extends DrawObj {
    constructor(src, position, minSize, maxSize) {
        super();
        this.position = position;
        this.size = 0;

        this.minSize = minSize;
        this.maxSize = maxSize;
        this.randomizeSize();

        this.physicsObj = new PhysicsObject(1, this.position);
        this.physicsObj.velocity = new Vector2D(0, this.size / 10);
        this.physicsObj.maxVelocity = this.size / 3.0;
        this.physicsObj.maxAcceleration = this.size / 0.5;

        this.image = new Image(1, 1);
        this.image.src = src;
    }

    update(deltaTime) {
        this.physicsObj.applyForce(new Vector2D(0.0, 1))
        this.physicsObj.update(deltaTime);

        this.position = this.physicsObj.position;

        if (canvas.height < this.position.y)
            this.reset();
    }

    render(ctx) {
        ctx.drawImage(this.image, this.position.x, this.position.y, this.size, this.size);
    }

    reset() {
        this.randomizeSize();
        
        this.position.y = -this.size;
        this.position.x = Math.random() * canvas.width;
    }

    randomizeSize() {
        this.size = this.minSize + Math.random() * this.maxSize;
    }
}