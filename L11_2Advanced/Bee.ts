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
    }

    public findDestination(): void {
        console.log(fullFlowers);
        for (let h: number = 0; h < 1; h++) {
            let i: number = createRandomNum(0, fullFlowers.length - 1);
            this.destination = new Vector(fullFlowers[i].x, fullFlowers[i].y);
            fullFlowers.splice(i,  1); 
        }
            console.log(this.destination);
            
            
    }
    flyToFlower(): void {
        //let x: number =  this.position.x - this.destination.x;
        //let y: number =  this.position.y - this.destination.y;
        //const x: number = this.destination.x - this.position.x;
        //const y: number = this.destination.y - this.position.y;
        
        this.direction = new Vector(this.destination.x - this.position.x, this.destination.y - this.position.y);
        this.direction.scale(0.1);
        this.position.add(this.direction);

        let difference: Vector = Vector.getDifference(this.position, this.destination);
        if (difference.x < 1 || difference.y < 1 ) {
         this.task = TASK.COLLECT;
         this.updateBeeJob();
        }

     }

    public draw(): void {
            drawBee(this.position, this.direction);  
     }

    public updateBeeJob(): void {
        switch (this.task) {
            case TASK.WORK:
                console.log("workling");
                break;
            case TASK.COLLECT:
                //console.log("collecting nectar");
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