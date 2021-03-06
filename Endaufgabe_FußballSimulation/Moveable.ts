namespace Endaufgabe_FußballSiumulation {
    export abstract class Moveable {
        
        //static home?: Vector;
        public position: Vector;
        //radius: number;


        constructor(_position: Vector) {
            this.position = _position;
        }

        abstract move(): void;
        abstract draw(): void;
    }
}