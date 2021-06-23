"use strict";
var L11_2_Blumenwiese;
(function (L11_2_Blumenwiese) {
    class Moveable {
        constructor(_position, _type) {
            this.type = _type;
            this.position = _position;
            if (this.type == "Cloud") {
                this.velocity = new L11_2_Blumenwiese.Vector(0, 0);
                this.velocity.random(100, 0);
            }
        }
        move(_timeSlice) {
            if (this.type == "Bee") {
                this.velocity = new L11_2_Blumenwiese.Vector(1100, 650);
                this.velocity.random(L11_2_Blumenwiese.createRandomNum(-300, 300), L11_2_Blumenwiese.createRandomNum(-600, 600));
            }
            if (this.type == "Cloud") {
                let offset = new L11_2_Blumenwiese.Vector(this.velocity.x, 0);
                offset.scale(_timeSlice);
                this.position.add(offset);
            }
            if (this.type == "Bee") {
                let offset = new L11_2_Blumenwiese.Vector(this.velocity.x, this.velocity.y);
                offset.scale(_timeSlice);
                this.position.add(offset);
            }
            if (this.position.x < 0)
                this.position.x += L11_2_Blumenwiese.crc2d.canvas.width;
            if (this.position.y < 0)
                this.position.y += L11_2_Blumenwiese.crc2d.canvas.height;
            if (this.position.x > L11_2_Blumenwiese.crc2d.canvas.width)
                this.position.x -= L11_2_Blumenwiese.crc2d.canvas.width;
            if (this.position.y > L11_2_Blumenwiese.crc2d.canvas.height)
                this.position.y -= L11_2_Blumenwiese.crc2d.canvas.height;
        }
    }
    L11_2_Blumenwiese.Moveable = Moveable;
})(L11_2_Blumenwiese || (L11_2_Blumenwiese = {}));
//# sourceMappingURL=Moveable.js.map