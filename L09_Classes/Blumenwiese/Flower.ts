namespace L09_2_Blumenwiese {
    export class Flower {
        position: Vector;
        type: number;
        size: number;

        constructor() {
            this.position.x = /*randomNumber*/ 1;
            this.position.y = /*randomNumber on canvas gras*/ 2;

            this.type = /*random num btw 0 and Array Flowers -1*/ 1;

            this.size = /*randomNum between 0.5 and 2*/ 1;
        }

        draw(): void {
            crc2d.save();
            crc2d.translate(this.position.x, this.position.y);
            crc2d.scale(this.size, this.size);
            crc2d.translate(-50, -50);
            //crc2d.stroke(Flowers[this.type]);
            crc2d.restore();
        }

    }
}