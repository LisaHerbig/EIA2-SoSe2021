namespace L09_2_Blumenwiese {
    export class Cloud {
        position: Vector;
        velocity: Vector;
        //size: number;

        constructor() {
            console.log("Constructor Cloud");
            this.position = new Vector (createRandomNum(200, 290), createRandomNum(60, 140));
            

            this.velocity = new Vector(0, 0);
            this.velocity.random(100, 0);

            
        }

        move(_timeSlice: number): void {
            console.log("Move Cloud");
        
            let offset: Vector = new Vector(this.velocity.x, 0);
            offset.scale(_timeSlice);
            this.position.add(offset);
 
            if (this.position.x < 0)
                 this.position.x += crc2d.canvas.width;
            if (this.position.y < 0)
                 this.position.y += crc2d.canvas.height;
            if (this.position.x > crc2d.canvas.width)
                 this.position.x -= crc2d.canvas.width;
            if (this.position.y > crc2d.canvas.height)
                 this.position.y -= crc2d.canvas.height;
            
        }

        draw(): void {
            //console.log("drawCloud");
            drawCloud(this.position);  
        }
    }

}