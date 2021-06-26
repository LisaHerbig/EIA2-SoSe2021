namespace L11_2_Blumenwiese {
    export class Flower3 extends Flower {
        private color: string = "Gold";
        private fps: number = 9;

        constructor(_position: Vector) {
            super();
        }

        public displayNectarLevel(): void {
            //Nectar
            showNectar(this.position, Flower3.degree, this.color, "white", this.fps);

            crc2d.save();
            crc2d.beginPath();
            crc2d.strokeStyle = this.color;
            crc2d.lineWidth = 5;
            crc2d.lineCap = "round";
            crc2d.arc(this.position.x + 2, this.position.y + 7, 10, 0, 360);
            crc2d.stroke();
            crc2d.closePath();
            crc2d.restore();
            
        }


        public draw(): void {
            //drawFlower1
            drawFlower3(this.position);
        }
    }
}