"use strict";
var L11_2_Blumenwiese;
(function (L11_2_Blumenwiese) {
    class Bee extends L11_2_Blumenwiese.Moveable {
        constructor(_position, _type) {
            super(_position, _type);
            this.home = new L11_2_Blumenwiese.Vector(455, 655);
            this.task = L11_2_Blumenwiese.TASK.WORK;
            this.position = _position;
        }
        findDestination() {
            console.log(L11_2_Blumenwiese.fullFlowers);
            for (let h = 0; h < 1; h++) {
                let i = L11_2_Blumenwiese.createRandomNum(0, L11_2_Blumenwiese.fullFlowers.length - 1);
                this.destination = new L11_2_Blumenwiese.Vector(L11_2_Blumenwiese.fullFlowers[i].x, L11_2_Blumenwiese.fullFlowers[i].y);
                L11_2_Blumenwiese.fullFlowers.splice(i, 1);
            }
            console.log(this.destination);
        }
        flyToFlower() {
            //let x: number =  this.position.x - this.destination.x;
            //let y: number =  this.position.y - this.destination.y;
            //const x: number = this.destination.x - this.position.x;
            //const y: number = this.destination.y - this.position.y;
            this.direction = new L11_2_Blumenwiese.Vector(this.destination.x - this.position.x, this.destination.y - this.position.y);
            this.direction.scale(0.1);
            this.position.add(this.direction);
            let difference = L11_2_Blumenwiese.Vector.getDifference(this.position, this.destination);
            if (difference.x < 1 || difference.y < 1) {
                this.task = L11_2_Blumenwiese.TASK.COLLECT;
                this.updateBeeJob();
            }
        }
        draw() {
            L11_2_Blumenwiese.drawBee(this.position, this.direction);
        }
        updateBeeJob() {
            switch (this.task) {
                case L11_2_Blumenwiese.TASK.WORK:
                    console.log("workling");
                    break;
                case L11_2_Blumenwiese.TASK.COLLECT:
                    //console.log("collecting nectar");
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