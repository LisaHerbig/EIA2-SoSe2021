"use strict";
var Endaufgabe_FußballSiumulation;
(function (Endaufgabe_FußballSiumulation) {
    class Vector {
        constructor(_x = 0, _y = 0) {
            this.set(_x, _y);
        }
        static getDifference(_v0, _v1) {
            return new Vector(_v0.x - _v1.x, _v0.y - _v1.y);
        }
        static getNormalisedVector(_normalise, _length) {
            let magnitude = Math.sqrt(_normalise.x * _normalise.x + _normalise.y * _normalise.y);
            if (magnitude > 0) {
                let normalised = new Vector(_normalise.x / magnitude, _normalise.y / magnitude);
                return normalised;
            }
            return undefined;
        }
        //public static getRandom(_minLength: number, _maxLength: number): Vector {
        //let length: number = _minLength + Math.random() * (_maxLength - _minLength);
        //let direction: number = Math.random() * 2 * Math.PI;
        // return Vector.getPolar(direction, length);
        //}
        //public static getPolar(_angle: number, _length: number): Vector {
        ////let vector: Vector = new Vector();
        // vector.set(Math.cos(_angle), Math.sin(_angle));
        // vector.scale(_length);
        //return vector;
        //}
        get length() {
            return Math.hypot(this.x, this.y);
        }
        set(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        scale(_factor) {
            this.x *= _factor;
            this.y *= _factor;
        }
        add(_addend) {
            this.x += _addend.x;
            this.y += _addend.y;
        }
        copy() {
            return new Vector(this.x, this.y);
        }
    }
    Endaufgabe_FußballSiumulation.Vector = Vector;
})(Endaufgabe_FußballSiumulation || (Endaufgabe_FußballSiumulation = {}));
//# sourceMappingURL=Vector.js.map