namespace L10_2_Blumenwiese { 
    export class Moveable {
        position: Vector;
        velocity: Vector;

        constructor(_position: Vector) {
            console.log("MoveableConstructor");
            
            this.position = _position;
            this.velocity = new Vector(0, 0);
            this.velocity.random(100, 0);
        }

        move(_timeslice: number): void {
           console.log("MoveavleMove");
           
            //if()
           let offset: Vector = this.velocity.copy();
           offset.scale(_timeslice);
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
            console.log("MoveableDraw");
            
            //drawMoveable
        }
    
    }
}