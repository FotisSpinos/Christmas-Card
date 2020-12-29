
class Vector2D {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static zero() {
        return new Vector2D(0.0, 0.0);
    }

    static random() {
        return new Vector2D(Math.random(), Math.random());
    }

    add(vec) {
        return new Vector2D(this.x + vec.x, this.y + vec.y);
    }

    subtract(vec) {
        return new Vector2D(this.x - vec.x, this.y - vec.y);
    }

    scale(num) {
        return new Vector2D(this.x * num, this.y * num);
    }

    magnitude() {
        return Math.sqrt((this.x * this.x + this.y * this.y));
    }

    unit() {
        let magnitude = this.magnitude();
        return new Vector2D(this.x / magnitude, this.y / magnitude);
    }

    getString() {
        return `${this.x}, ${this.y}`;
    }
}
