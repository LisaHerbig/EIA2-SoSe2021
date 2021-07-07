namespace Endaufgabe_FußballSiumulation {
    export class Referee extends Moveable {
        color: string;
        speed: number;
        typ: string = "referee";
        whistle: HTMLAudioElement = new Audio ("Sounds/Whistle.wav");

        constructor(_position: Vector, _color: string) {
            super(_position);
            this.position = _position;
            this.color = _color;
        }

        move(): void {
            console.log("Referee moves towards ball with distance (or super-slow)");
            
        }

        playWhistle(): void {
            this.whistle.play();
        }
        
        draw(): void {
            drawShirt(this.position, this.color, this.typ, "team2");
        }

    }
}