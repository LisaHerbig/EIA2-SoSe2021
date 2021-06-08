"use strict";
var L10_2_Blumenwiese;
(function (L10_2_Blumenwiese) {
    class Vector {
        constructor(_x, _y) {
            //console.log("construct");  
            this.set(_x, _y);
        }
        set(_x, _y) {
            //console.log("set");
            this.x = _x;
            this.y = _y;
        }
        scale(_factor) {
            //console.log("Scale");
            this.x *= _factor;
            this.y *= _factor;
        }
        add(_addEnd) {
            //console.log("add");
            this.x += _addEnd.x;
            this.y += _addEnd.y;
        }
        random(_minLength, _maxLength) {
            //console.log("random");
            let length = _minLength + Math.random() * (_maxLength - _minLength);
            let direction = Math.random() * 2 * Math.PI;
            this.set(Math.cos(direction), Math.sin(direction));
            this.scale(length);
        }
    }
    L10_2_Blumenwiese.Vector = Vector;
})(L10_2_Blumenwiese || (L10_2_Blumenwiese = {}));
//# sourceMappingURL=Vector.js.map