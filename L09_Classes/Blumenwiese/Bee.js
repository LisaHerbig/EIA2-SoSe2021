"use strict";
var L10_2_Blumenwiese;
(function (L10_2_Blumenwiese) {
    class Bee {
        constructor() {
            this.position = new L10_2_Blumenwiese.Vector(L10_2_Blumenwiese.createRandomNum(150, 250), L10_2_Blumenwiese.createRandomNum(300, 400));
            //this.position = new Vector (0, 0);
            //this.velocity = new Vector(0, 0);
            //this.velocity.random(createRandomNum(-100, 100), createRandomNum(-200, 200));
        }
        move(_timeSlice) {
            L10_2_Blumenwiese.crc2d.restore();
            //console.log("Move Cloud");
            this.velocity = new L10_2_Blumenwiese.Vector(200, 350);
            //this.velocity = this.position;
            this.velocity.random(L10_2_Blumenwiese.createRandomNum(-300, 300), L10_2_Blumenwiese.createRandomNum(-600, 600));
            //this.position = new Vector (createRandomNum(200, 290), createRandomNum(60, 140));
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
            //console.log("drawBee");
            //this.position = new Vector (createRandomNum(200, 290), createRandomNum(60, 140));
            //for (let j: number = 0; j < 3; j++) {
            //this.position = new Vector (createRandomNum(200, 290), createRandomNum(60, 140));
            L10_2_Blumenwiese.drawBee(this.position);
            //}
        }
    }
    L10_2_Blumenwiese.Bee = Bee;
})(L10_2_Blumenwiese || (L10_2_Blumenwiese = {}));
//# sourceMappingURL=Bee.js.map