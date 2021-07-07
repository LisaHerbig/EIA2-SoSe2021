namespace Endaufgabe_FußballSiumulation {
    export abstract class Moveable {
        position: Vector;
        radius: number;

        constructor(_position: Vector) {
            this.position = _position;
        }

        abstract move(_speed: number, _start: Vector, _end: Vector): void;
        abstract draw(): void;
    }
}