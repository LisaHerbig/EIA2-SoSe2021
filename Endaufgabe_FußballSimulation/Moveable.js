"use strict";
var Endaufgabe_FußballSiumulation;
(function (Endaufgabe_FußballSiumulation) {
    class Moveable {
        constructor(_position) {
            this.position = _position;
        }
        isCloseTo(_partner) {
            let difference = Endaufgabe_FußballSiumulation.Vector.getDifference(this.position, _partner.position);
            let distance = difference.length;
            if (distance <= 30) {
                return true;
            }
            return false;
        }
    }
    Endaufgabe_FußballSiumulation.Moveable = Moveable;
})(Endaufgabe_FußballSiumulation || (Endaufgabe_FußballSiumulation = {}));
//# sourceMappingURL=Moveable.js.map