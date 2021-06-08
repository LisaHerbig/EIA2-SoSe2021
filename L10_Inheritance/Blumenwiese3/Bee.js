"use strict";
var L10_2_Blumenwiese;
(function (L10_2_Blumenwiese) {
    class Bee {
        constructor(_position) {
            //super(_position);
            this.position = _position;
            //this.velocity = new Vector(1100, 650);
            //this.velocity.random(createRandomNum(-300, 300), createRandomNum(-600, 600));
        }
        move(_timeSlice) {
            //crc2d.restore();
            //this.position = new Vector (createRandomNum(150, 1100), createRandomNum(300, 650));  
            this.velocity = new L10_2_Blumenwiese.Vector(1100, 650);
            this.velocity.random(L10_2_Blumenwiese.createRandomNum(-300, 300), L10_2_Blumenwiese.createRandomNum(-600, 600));
            let offset = new L10_2_Blumenwiese.Vector(this.velocity.x, this.velocity.y);
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
            L10_2_Blumenwiese.drawBee(this.position);
        }
    }
    L10_2_Blumenwiese.Bee = Bee;
})(L10_2_Blumenwiese || (L10_2_Blumenwiese = {}));
//# sourceMappingURL=Bee.js.map