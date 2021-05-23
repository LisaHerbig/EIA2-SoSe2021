"use strict";
var L09_2_Blumenwiese;
(function (L09_2_Blumenwiese) {
    class Bee {
        constructor() {
            this.position = new L09_2_Blumenwiese.Vector(L09_2_Blumenwiese.createRandomNum(200, 290), L09_2_Blumenwiese.createRandomNum(60, 140));
            //this.velocity = new Vector(0, 0);
            //this.velocity.random(createRandomNum(-100, 100), createRandomNum(-200, 200));
        }
        move(_timeSlice) {
            console.log("Move Cloud");
            this.velocity = new L09_2_Blumenwiese.Vector(0, 0);
            this.velocity.random(L09_2_Blumenwiese.createRandomNum(-300, 300), L09_2_Blumenwiese.createRandomNum(-600, 600));
            let offset = new L09_2_Blumenwiese.Vector(this.velocity.x, this.velocity.y);
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
            console.log("drawBee");
            L09_2_Blumenwiese.drawBee(this.position);
        }
    }
    L09_2_Blumenwiese.Bee = Bee;
})(L09_2_Blumenwiese || (L09_2_Blumenwiese = {}));
//# sourceMappingURL=Bee.js.map