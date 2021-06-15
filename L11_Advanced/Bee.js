"use strict";
var L11_1_Blumenwiese;
(function (L11_1_Blumenwiese) {
    class Bee extends L11_1_Blumenwiese.Moveable {
        constructor(_position, _type) {
            super(_position, _type);
            this.position = _position;
        }
        draw() {
            L11_1_Blumenwiese.drawBee(this.position);
        }
    }
    L11_1_Blumenwiese.Bee = Bee;
})(L11_1_Blumenwiese || (L11_1_Blumenwiese = {}));
//# sourceMappingURL=Bee.js.map