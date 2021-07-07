namespace Endaufgabe_FußballSiumulation {
    export class Referee extends Moveable {
        color: string;
        speed: number;
        typ: string = "referee";

        constructor(_position: Vector, _color: string) {
            super(_position);
            this.position = _position;
            this.color = _color;
        }

        move(): void {
            console.log("Referee moves towards ball with distance (or super-slow)");
            
        }
        draw(): void {
            drawShirt(this.position, this.color, this.typ, "team2");
        }

    }
}