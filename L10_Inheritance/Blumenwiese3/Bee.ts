namespace L10_2_Blumenwiese {
    export class Bee extends Moveable {
    position: Vector;
    velocity: Vector;
    type: string;

    constructor(_position: Vector, _type: string) {
        super(_position, _type);
        this.position = _position;   
        //this.velocity = new Vector(1100, 650);
        
        //this.velocity.random(createRandomNum(-300, 300), createRandomNum(-600, 600));
    }

    /*move(_timeSlice: number): void {
        //crc2d.restore();
        //this.position = new Vector (createRandomNum(150, 1100), createRandomNum(300, 650));  
       
        this.velocity = new Vector(1100, 650);
        
        this.velocity.random(createRandomNum(-300, 300), createRandomNum(-600, 600));
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
        
    }*/
    
    draw(): void {
            drawBee(this.position);  
     }
     }
}