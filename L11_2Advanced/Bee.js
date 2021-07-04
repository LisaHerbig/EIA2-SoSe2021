"use strict";
var L11_2_Blumenwiese;
(function (L11_2_Blumenwiese) {
    class Bee extends L11_2_Blumenwiese.Moveable {
        constructor(_position, _type) {
            super(_position, _type);
            this.home = new L11_2_Blumenwiese.Vector(455, 655);
            this.task = L11_2_Blumenwiese.TASK.WORK;
            this.position = _position;
            for (let h = 0; h < 1; h++) {
                let i = L11_2_Blumenwiese.createRandomNum(0, L11_2_Blumenwiese.fullFlowers.length - 1);
                this.destination = new L11_2_Blumenwiese.Vector(L11_2_Blumenwiese.fullFlowers[i].x, L11_2_Blumenwiese.fullFlowers[i].y);
                L11_2_Blumenwiese.fullFlowers.splice(i, 1);
            }
        }
        flyToFlower(_timeSlice) {
            let posDes = this.position.x - this.destination.x;
            let posDesy = this.position.y - this.destination.y;
            console.log(posDes);
            this.velocity = new L11_2_Blumenwiese.Vector(0, 0);
            //this.velocity.random(createRandomNum(-300, 300), createRandomNum(-600, 600))
            let offset = new L11_2_Blumenwiese.Vector(posDes, posDesy);
            offset.scale(_timeSlice);
            this.position.add(offset);
            // this.direction = new Vector(this.destination.x - this.position.x, this.destination.y - this.position.y);
            // this.direction.scale(0.1);
            //this.position.add(this.direction);
            //this.position.scale(0.1);
            let difference = L11_2_Blumenwiese.Vector.getDifference(this.position, this.destination);
            if (difference.x < 1 || difference.y < 1) {
                this.task = L11_2_Blumenwiese.TASK.COLLECT;
                this.updateBeeTask();
                //console.log(this.direction);
            }
        }
        collectNectar() {
            console.log("collecting");
            L11_2_Blumenwiese.showNectar(this.destination, 10, "White", "Fuchsia", 20);
            L11_2_Blumenwiese.crc2d.save();
            L11_2_Blumenwiese.crc2d.beginPath();
            L11_2_Blumenwiese.crc2d.strokeStyle = "White";
            L11_2_Blumenwiese.crc2d.lineWidth = 5;
            L11_2_Blumenwiese.crc2d.lineCap = "round";
            L11_2_Blumenwiese.crc2d.arc(this.position.x + 2, this.position.y + 7, 10, 0, 360);
            L11_2_Blumenwiese.crc2d.stroke();
            L11_2_Blumenwiese.crc2d.closePath();
            L11_2_Blumenwiese.crc2d.restore();
            //setInterval ()
        }
        draw() {
            L11_2_Blumenwiese.drawBee(this.position, this.direction);
        }
        updateBeeTask() {
            switch (this.task) {
                case L11_2_Blumenwiese.TASK.WORK:
                    console.log("workling");
                    //this.flyToFlower();
                    break;
                case L11_2_Blumenwiese.TASK.COLLECT:
                    //console.log("collecting nectar");
                    this.collectNectar();
                    break;
                case L11_2_Blumenwiese.TASK.FLYHOME:
                    console.log("going home");
                    break;
                case L11_2_Blumenwiese.TASK.GOIN:
                    console.log("womit");
                    break;
                default:
                    console.log("something went wrong");
            }
        }
    }
    L11_2_Blumenwiese.Bee = Bee;
})(L11_2_Blumenwiese || (L11_2_Blumenwiese = {}));
//# sourceMappingURL=Bee.js.map