"use strict";
var L10_2_Blumenwiese;
(function (L10_2_Blumenwiese) {
    class Moveable {
        constructor(_position) {
            console.log("MoveableConstructor");
            this.position = _position;
            this.velocity = new L10_2_Blumenwiese.Vector(0, 0);
            this.velocity.random(100, 0);
        }
        move(_timeslice) {
            console.log("MoveavleMove");
            //if()
            let offset = this.velocity.copy();
            offset.scale(_timeslice);
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
            console.log("MoveableDraw");
            //drawMoveable
        }
    }
    L10_2_Blumenwiese.Moveable = Moveable;
})(L10_2_Blumenwiese || (L10_2_Blumenwiese = {}));
//# sourceMappingURL=Moveable.js.map