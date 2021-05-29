"use strict";
var L09_2_Blumenwiese;
(function (L09_2_Blumenwiese) {
    class Cloud {
        //size: number;
        constructor() {
            console.log("Constructor Cloud");
            this.position = new L09_2_Blumenwiese.Vector(L09_2_Blumenwiese.createRandomNum(200, 290), L09_2_Blumenwiese.createRandomNum(60, 140));
            this.velocity = new L09_2_Blumenwiese.Vector(0, 0);
            this.velocity.random(100, 0);
        }
        move(_timeSlice) {
            console.log("Move Cloud");
            let offset = new L09_2_Blumenwiese.Vector(this.velocity.x, 0);
            offset.scale(_timeSlice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += L09_2_Blumenwiese.crc2d.canvas.width;
            if (this.position.y < 0)
                this.position.y += L09_2_Blumenwiese.crc2d.canvas.height;
            if (this.position.x > L09_2_Blumenwiese.crc2d.canvas.width)
                this.position.x -= L09_2_Blumenwiese.crc2d.canvas.width;
            if (this.position.y > L09_2_Blumenwiese.crc2d.canvas.height)
                this.position.y -= L09_2_Blumenwiese.crc2d.canvas.height;
        }
        draw() {
            //console.log("drawCloud");
            L09_2_Blumenwiese.drawCloud(this.position);
        }
    }
    L09_2_Blumenwiese.Cloud = Cloud;
})(L09_2_Blumenwiese || (L09_2_Blumenwiese = {}));
//# sourceMappingURL=Cloud.js.map