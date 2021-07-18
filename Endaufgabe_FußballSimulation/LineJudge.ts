namespace Endaufgabe_FußballSiumulation {
    export class LineJudge extends Moveable {
        private color: string;
        private speed: number = 150;
        private typ: string = "lineJudge";

        constructor(_position: Vector, _color: string) {
            super(_position);
            this.position = _position;
            this.color = _color;
        }

        public move(): void {
                let leftMax: number = width / 110 * 5;
                let rightMax: number = width / 110 * 100;
                let moveX: number = createRandomNum(leftMax, rightMax);
                let moveXDirection: number = createRandomNum(-moveX, moveX);
                let position: Vector = new Vector(moveXDirection,  0);
                position.scale(1 / this.speed);
                this.position.add(position);

                if (this.position.x < 0)
                 this.position.x += crc2.canvas.width;
                if (this.position.x > crc2.canvas.width)
                 this.position.x -= crc2.canvas.width;
                
        }

        public draw(): void {
            drawShirt(this.position, this.color, this.typ, "team2");
        }
    }
}