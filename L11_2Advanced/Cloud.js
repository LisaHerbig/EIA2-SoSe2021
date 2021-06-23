"use strict";
var L11_2_Blumenwiese;
(function (L11_2_Blumenwiese) {
    class Cloud extends L11_2_Blumenwiese.Moveable {
        constructor(_position, _type) {
            super(_position, _type);
            this.position = _position;
        }
        draw() {
            L11_2_Blumenwiese.drawCloud(this.position);
        }
    }
    L11_2_Blumenwiese.Cloud = Cloud;
})(L11_2_Blumenwiese || (L11_2_Blumenwiese = {}));
//# sourceMappingURL=Cloud.js.map