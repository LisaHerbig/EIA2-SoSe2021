"use strict";
var L10_2_Blumenwiese;
(function (L10_2_Blumenwiese) {
    class Cloud extends L10_2_Blumenwiese.Moveable {
        //velocity: Vector;
        //type: string;
        constructor(_position, _type) {
            //console.log("CloudConstructor");
            super(_position, _type);
            this.position = _position;
            //this.position = new Vector (createRandomNum(50, 110), createRandomNum(10 , 110));
            //this.velocity = new Vector(0, 0);
            //this.velocity.random(100, 0);
        }
        /*move(_timeSlice: number): void {

            let offset: Vector = new Vector(this.velocity.x, 0);
            offset.scale(_timeSlice);
            this.position.add(offset);
 
            if (this.position.x < 0)
                 this.position.x += crc2d.canvas.width;
            if (this.position.y < 0)
                 this.position.y += crc2d.canvas.height;
            if (this.position.x > crc2d.canvas.width)
                 this.position.x -= crc2d.canvas.width;
            if (this.position.y > crc2d.canvas.height)
                 this.position.y -= crc2d.canvas.height;
        }*/
        draw() {
            L10_2_Blumenwiese.drawCloud(this.position);
            console.log("DrawingCloud");
        }
    }
    L10_2_Blumenwiese.Cloud = Cloud;
})(L10_2_Blumenwiese || (L10_2_Blumenwiese = {}));
//# sourceMappingURL=Cloud.js.map