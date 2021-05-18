"use strict";
var L09_1_Lektion;
(function (L09_1_Lektion) {
    class Vector {
        constructor() {
            this.x = 0;
            this.y = 0;
        }
        set(_x, _y) {
            this.x += _x;
            this.y += _y;
        }
        scale(_factor) {
            this.x *= _factor;
            this.y *= _factor;
        }
        add(_addend) {
            this.x += _addend.x;
            this.y += _addend.y;
        }
    }
    let v1 = new Vector();
    v1.set(2, 2);
    v1.scale(2);
    console.log(v1);
})(L09_1_Lektion || (L09_1_Lektion = {}));
//# sourceMappingURL=L09_1.js.map