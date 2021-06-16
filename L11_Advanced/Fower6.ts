namespace L11_1_Blumenwiese {
   export  class Flower6 extends Flower {
        private color: string = "Blue";
        private fps: number = 5;

        constructor(_position: Vector) {
            super();
        }

        public displayNectarLevel(): void {
            //Nectar
            showNectar(this.position, Flower6.degree, this.color, this.fps);

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
            drawFlower6(this.position);
        }
    }
}