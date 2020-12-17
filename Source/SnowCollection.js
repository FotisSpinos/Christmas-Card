class SnowCollection {
    constructor(snowFlakeAmount) {
        this.snowflakes = [];
        
        for(let i = 0; i < snowFlakeAmount; i++) {

            let randomPosition = Vector2D.random();
            randomPosition.x *= canvas.width;
            randomPosition.y *= canvas.height;

            let newSnowFlake = new Snowflake(randomPosition, 10, 30);

            this.snowflakes.push(newSnowFlake);
        }
    }
}