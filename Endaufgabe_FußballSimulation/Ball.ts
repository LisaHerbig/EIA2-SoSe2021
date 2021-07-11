namespace Endaufgabe_FußballSiumulation {
    export class Ball extends Moveable {
        start: Vector = new Vector (width / 2, height / 2);
        speed: number = 50;
        targetPosition: Vector;

        constructor(_position: Vector) {
            super (_position);
            this.position = _position;
        }
        move(_event?: MouseEvent): void {
            //console.log("Ball moves towards click position");  
            if (_event) {
                console.log("Ball moves towards click position");  
                let x: number = _event.clientX;
                let y: number = _event.clientY;
                let clickPosition: Vector = new Vector(x, y);
                let difference: Vector = Vector.getDifference(clickPosition, this.position);
                let length: number = difference.length / 10;
                let offset: Vector = new Vector(difference.x, difference.y);
                offset.scale(1 / this.speed);
                console.log(length / 10);
                this.position.add(offset);
                if (length > 55) {
                    console.log("Radius muss super groß sein");  
                }
                if (length > 30) {
                    console.log("Radius muss groß sein");  
                    this.position.add(offset);
                }
                if (length < 30) {
                    this.position.add(offset);
                    //imation = true;
                    console.log("Radius smaller");
                    if (length < 25) {
                        console.log("smaller");
                        if (length < 10) {
                            console.log("Super small");
                            
                        }
                        
                    }
                    
                }
                
                if (this.position.x == clickPosition.x && this.position.y == clickPosition.y) {
                    ballMoves = false;
                }
            }
        }

        draw(): void {
            drawBall(this.position);
        }
    }
}