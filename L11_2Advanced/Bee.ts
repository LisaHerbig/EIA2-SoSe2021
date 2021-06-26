namespace L11_2_Blumenwiese {
    export class Bee extends Moveable {
        public collection: number;
        public destination: Vector;
        private home: Vector = new Vector(455, 655);
        private task: TASK = TASK.WORK;
        private direction: Vector;
  
    constructor(_position: Vector, _type: string) {
        super(_position, _type);
        this.position = _position;
        for (let h: number = 0; h < 1; h++) {
            let i: number = createRandomNum(0, fullFlowers.length - 1);
            this.destination = new Vector(fullFlowers[i].x, fullFlowers[i].y);
            fullFlowers.splice(i,  1);
    } }

 
    flyToFlower(_timeSlice: number): void {
        let posDes: number = this.position.x - this.destination.x;
        let posDesy: number = this.position.y - this.destination.y;
        console.log(posDes);
        this.velocity = new Vector(0, 0);
        //this.velocity.random(createRandomNum(-300, 300), createRandomNum(-600, 600))
        let offset: Vector = new Vector (posDes, posDesy);
        offset.scale(_timeSlice);
        this.position.add(offset);
        
       // this.direction = new Vector(this.destination.x - this.position.x, this.destination.y - this.position.y);
       // this.direction.scale(0.1);
        //this.position.add(this.direction);
        //this.position.scale(0.1);

        let difference: Vector = Vector.getDifference(this.position, this.destination);
        if (difference.x < 1 || difference.y < 1 ) {
         this.task = TASK.COLLECT;
         this.updateBeeTask();
         //console.log(this.direction);
        }

     }

     collectNectar(): void {
         console.log("collecting");
         showNectar(this.destination, 10, "White", "Fuchsia", 20);
         crc2d.save();
         crc2d.beginPath();
         crc2d.strokeStyle = "White";
         crc2d.lineWidth = 5;
         crc2d.lineCap = "round";
         crc2d.arc(this.position.x + 2, this.position.y + 7, 10, 0, 360);
         crc2d.stroke();
         crc2d.closePath();
         crc2d.restore();
         //setInterval ()
         
     }

    public draw(): void {
            drawBee(this.position, this.direction);  
     }

    public updateBeeTask(): void {
        switch (this.task) {
            case TASK.WORK:
                console.log("workling");
                //this.flyToFlower();
                break;
            case TASK.COLLECT:
                //console.log("collecting nectar");
                this.collectNectar();
                break;
            case TASK.FLYHOME:
                console.log("going home");
                break;
            case TASK.GOIN:
                console.log("womit");
                break;
            default:
                console.log("something went wrong");      
            }
        }

    }
}