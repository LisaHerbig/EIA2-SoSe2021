"use strict";
var L10_2_Blumenwiese;
(function (L10_2_Blumenwiese) {
    class Cloud {
        //size: number;
        constructor() {
            //console.log("Constructor Cloud");
            this.position = new L10_2_Blumenwiese.Vector(L10_2_Blumenwiese.createRandomNum(200, 290), L10_2_Blumenwiese.createRandomNum(60, 140));
            this.velocity = new L10_2_Blumenwiese.Vector(0, 0);
            this.velocity.random(100, 0);
        }
        move(_timeSlice) {
            //console.log("Move Cloud");
            let offset = new L10_2_Blumenwiese.Vector(this.velocity.x, 0);
            offset.scale(_timeSlice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += L10_2_Blumenwiese.crc2d.canvas.width;
            if (this.position.y < 0)
                this.position.y += L10_2_Blumenwiese.crc2d.canvas.height;
            if (this.position.x > L10_2_Blumenwiese.crc2d.canvas.width)
                this.position.x -= L10_2_Blumenwiese.crc2d.canvas.width;
            if (this.position.y > L10_2_Blumenwiese.crc2d.canvas.height)
                this.position.y -= L10_2_Blumenwiese.crc2d.canvas.height;
        }
        draw() {
            //console.log("drawCloud");
            L10_2_Blumenwiese.drawCloud(this.position);
        }
    }
    L10_2_Blumenwiese.Cloud = Cloud;
})(L10_2_Blumenwiese || (L10_2_Blumenwiese = {}));
//# sourceMappingURL=Cloud.js.map