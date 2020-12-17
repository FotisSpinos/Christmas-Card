class Snowflake extends DrawObj {
    constructor(position, sizeX, sizeY) {
        super();
        this.position = position;
        this.sizeX = sizeX;
        this.sizeY = sizeY;
        this.physicsObj = new PhysicsObject(1, this.position);
        this.physicsObj.velocity = new Vector2D(0, 10);

        this.image = new Image(1, 1);
        this.image.src = '../Assets/Snowflake.png';
    }

    update(deltaTime) {
        this.physicsObj.update(deltaTime);
        this.position = this.physicsObj.position;
    }

    render() {
        ctx.drawImage(this.image, this.position.x, this.position.y, this.sizeX, this.sizeY);
    }
}