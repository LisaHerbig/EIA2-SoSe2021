namespace Endaufgabe_FußballSiumulation {
    export class LineJudge extends Moveable {
        color: string;
        speed: number = 150;
        typ: string = "lineJudge";

        constructor(_position: Vector, _color: string) {
            super(_position);
            this.position = _position;
            this.color = _color;
        }

        move(): void {
                //console.log("LineJudgeMoves");
                let leftMax: number = width / 110 * 5;
                let rightMax: number = width / 110 * 100;
                //let y: number = height / 75 * 6.5;
                let moveX: number = createRandomNum(leftMax, rightMax);
                let moveXDirection: number = createRandomNum(-moveX, moveX);
                let position: Vector = new Vector(moveXDirection,  0);
                position.scale(1 / this.speed);
                this.position.add(position);
                //console.log(this.position);

                if (this.position.x < 0)
                 this.position.x += crc2.canvas.width;
                //if (this.position.y < 0)
                 //this.position.y += crc2.canvas.height;
                if (this.position.x > crc2.canvas.width)
                 this.position.x -= crc2.canvas.width;
                //if (this.position.y > crc2.canvas.height)
                 //this.position.y -= crc2.canvas.height;
                
        }

        draw(): void {
            drawShirt(this.position, this.color, this.typ, "team2");
        }
    }
}