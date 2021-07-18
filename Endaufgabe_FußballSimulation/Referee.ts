namespace Endaufgabe_FußballSiumulation {
    export class Referee extends Moveable {
        private color: string;
        private speed: number = 150;
        private typ: string = "referee";
        private whistle: HTMLAudioElement = new Audio ("Sounds/Whistle.wav");

        constructor(_position: Vector, _color: string) {
            super(_position);
            this.position = _position;
            this.color = _color;
        }

        public move(): void {
            let xleftMax: number = width / 21.5;
            let xrightMax: number = width / 110 * 78.5;
            let moveX: number = createRandomNum(xleftMax, xrightMax);
            let moveXDirection: number = createRandomNum(-moveX, moveX);

            let xtopMax: number = canvas.height / 2 + 110;
            let xBottomMax: number = canvas.height / 2 + 110;
            let moveY: number = createRandomNum(xtopMax, xBottomMax);
            let moveYDirection: number = createRandomNum(-moveY, moveY);

            let position: Vector = new Vector(moveXDirection, moveYDirection);
            position.scale(1 / this.speed);
            this.position.add(position);
        }

        public playWhistle(): void {
            this.whistle.play();
        }
        
        public draw(): void {
            drawShirt(this.position, this.color, this.typ, "team2");
        }

    }
}