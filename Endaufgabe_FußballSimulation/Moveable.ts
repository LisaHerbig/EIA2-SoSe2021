namespace Endaufgabe_FußballSiumulation {
    export abstract class Moveable {
        position: Vector;
        radius: number;

        constructor(_position: Vector) {
            this.position = _position;
        }

        isCloseTo(_partner: Moveable): boolean {
            let difference: Vector = Vector.getDifference(this.position, _partner.position);
            let distance: number = difference.length;
            if (distance <= 30) {
                return true;
            }
            return false;
        }

        abstract move(): void;
        abstract draw(): void;
    }
}