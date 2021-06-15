"use strict";
var L11_1_Blumenwiese;
(function (L11_1_Blumenwiese) {
    class Cloud extends L11_1_Blumenwiese.Moveable {
        constructor(_position, _type) {
            super(_position, _type);
            this.position = _position;
        }
        draw() {
            L11_1_Blumenwiese.drawCloud(this.position);
        }
    }
    L11_1_Blumenwiese.Cloud = Cloud;
})(L11_1_Blumenwiese || (L11_1_Blumenwiese = {}));
//# sourceMappingURL=Cloud.js.map