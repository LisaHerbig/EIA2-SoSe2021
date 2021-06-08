namespace L09_2_Blumenwiese {
    export class Bee {
    position: Vector;
    velocity: Vector;

    constructor() {
        this.position = new Vector (createRandomNum(150, 250), createRandomNum(300, 400));
         
        //this.position = new Vector (0, 0);
        //this.velocity = new Vector(0, 0);
        //this.velocity.random(createRandomNum(-100, 100), createRandomNum(-200, 200));
     
        
    }

    move(_timeSlice: number): void {
        crc2d.restore();
        //console.log("Move Cloud");
        this.velocity = new Vector(200, 350);
        //this.velocity = this.position;
        this.velocity.random(createRandomNum(-300, 300), createRandomNum(-600, 600));
    
        //this.position = new Vector (createRandomNum(200, 290), createRandomNum(60, 140));
        let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
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
        //console.log("drawBee");
        //this.position = new Vector (createRandomNum(200, 290), createRandomNum(60, 140));
        //for (let j: number = 0; j < 3; j++) {
            //this.position = new Vector (createRandomNum(200, 290), createRandomNum(60, 140));
            drawBee(this.position);  
        //}
    }


}
}