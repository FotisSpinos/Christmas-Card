
    class Vector2D {
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }

        add(addVec) {
            let output = new Vector2D(0, 0);
            
            let x = this.x + addVec.x;
            let y = this.y + addVec.y;

            output = new Vector2D(x, y);
            return output;
        }

        scale(num) {
            let output = new Vector2D(0, 0);
            output.x = this.x * num;
            output.y = this.y * num;

            return output;
        }
    }
