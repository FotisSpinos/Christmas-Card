class SnowCollection {
    constructor(src, snowFlakeAmount, minSize, maxSize) {
        this.snowflakes = [];
        this.windForce = Vector2D.zero();

        for (let i = 0; i < snowFlakeAmount; i++) {
            let randomPosition = Vector2D.random();
            randomPosition.x *= canvas.width;
            randomPosition.y *= canvas.height;

            let newSnowFlake = new Snowflake(src, randomPosition, minSize, maxSize);

            this.snowflakes.push(newSnowFlake);
        }
    }

    useRandomWindForce(active) {
        if (active) {
            let sign = Math.random() > 0.5 ? -1 : 1;
            this.windForce.x = Math.random() * 0.5 * sign;
        }
        else
            this.windForce.x = 0.0;
    }

    applyWindForce() {
        this.snowflakes.forEach(snowflake => {
            snowflake.physicsObj.applyForce(this.windForce);
        });
    }

    repulse(point, range, strength) {
        this.snowflakes.forEach(snowflake => {

            let pointToSnowflake = snowflake.position.subtract(point);
            let dir = pointToSnowflake.unit();
            let dist = pointToSnowflake.magnitude();

            if (dist < range) {
                let force = dir.scale(dist * strength);

                snowflake.physicsObj.applyForce(force);
            }
        })
    }
}