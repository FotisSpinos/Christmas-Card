class SnowCollection {
    constructor(src, snowFlakeAmount, minSize, maxSize) {
        this.snowflakes = [];

        let sign = Math.random() > 0.5 ? -1 : 1;
        this.windForce = new Vector2D(Math.random() * 5 * sign, 0.0);

        for (let i = 0; i < snowFlakeAmount; i++) {

            let randomPosition = Vector2D.random();
            randomPosition.x *= canvas.width;
            randomPosition.y *= canvas.height;

            let newSnowFlake = new Snowflake(src, randomPosition, minSize, maxSize);

            this.snowflakes.push(newSnowFlake);
            this.snowflakes[i].physicsObj.velocity.x = this.windForce.x;
        }
    }
}