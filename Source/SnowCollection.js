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

    repulse(point, range, strength) {
        this.snowflakes.forEach(snowflake => {

            console.log('snowflake position: ' + snowflake.position.getString());
            console.log('point pos: ' + point.getString())

            let pointToSnowflake = snowflake.position.subtract(point);
            let dir = pointToSnowflake.unit();
            let dist = pointToSnowflake.magnitude();

            if (dist < range) {
                let force = dir.scale(dist * strength);
                //console.log('Apply Force! ' + force.getString())
                snowflake.physicsObj.applyForce(force);
            }
        })
    }
}