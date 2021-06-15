"use strict";
var L11_1_Blumenwiese;
(function (L11_1_Blumenwiese) {
    /*
   Aufgabe: L11.1 BlumenwieseAdvanced
   Name: Lisa Herbig
   Matrikel: 266236
   Datum: 11.06.2021
   Inspiration: Code und Diagramm aus den Lektionen
   */
    window.addEventListener("load", handleLoad);
    let imgData;
    let moveables = [];
    let flowers = [];
    for (let h = 0; h < L11_1_Blumenwiese.createRandomNum(10, 100); h++) {
        //Flower1
        let pos1 = new L11_1_Blumenwiese.Vector(L11_1_Blumenwiese.createRandomNum(10, 310), L11_1_Blumenwiese.createRandomNum(400, 700));
        let flower1 = new L11_1_Blumenwiese.Flower1(pos1);
        flowers.push(flower1);
        //Flower2
        let pos2 = new L11_1_Blumenwiese.Vector(L11_1_Blumenwiese.createRandomNum(10, 310), L11_1_Blumenwiese.createRandomNum(400, 700));
        let flower2 = new L11_1_Blumenwiese.Flower1(pos2);
        flowers.push(flower2);
        //Flower3
        let pos3 = new L11_1_Blumenwiese.Vector(L11_1_Blumenwiese.createRandomNum(10, 310), L11_1_Blumenwiese.createRandomNum(400, 700));
        let flower3 = new L11_1_Blumenwiese.Flower1(pos3);
        flowers.push(flower3);
        //Flower4
        let pos4 = new L11_1_Blumenwiese.Vector(L11_1_Blumenwiese.createRandomNum(10, 310), L11_1_Blumenwiese.createRandomNum(400, 700));
        let flower4 = new L11_1_Blumenwiese.Flower1(pos4);
        flowers.push(flower4);
        //Flower5
        let pos5 = new L11_1_Blumenwiese.Vector(L11_1_Blumenwiese.createRandomNum(10, 310), L11_1_Blumenwiese.createRandomNum(400, 700));
        let flower5 = new L11_1_Blumenwiese.Flower1(pos5);
        flowers.push(flower5);
        //Flower6
        let pos6 = new L11_1_Blumenwiese.Vector(L11_1_Blumenwiese.createRandomNum(10, 310), L11_1_Blumenwiese.createRandomNum(400, 700));
        let flower6 = new L11_1_Blumenwiese.Flower6(pos6);
        flowers.push(flower6);
    }
    console.log("FlowersArray" + flowers.length);
    function handleLoad() {
        //console.log("Hello");
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        L11_1_Blumenwiese.crc2d = canvas.getContext("2d");
        L11_1_Blumenwiese.drawBackground();
        L11_1_Blumenwiese.drawSun(new L11_1_Blumenwiese.Vector(L11_1_Blumenwiese.createRandomNum(20, 1100), L11_1_Blumenwiese.createRandomNum(10, 130)));
        L11_1_Blumenwiese.drawMountains(new L11_1_Blumenwiese.Vector(0, 320), 60, 180, "grey", "White");
        L11_1_Blumenwiese.drawMountains(new L11_1_Blumenwiese.Vector(0, 320), 20, 120, "black", "lightgrey");
        L11_1_Blumenwiese.drawHouse(new L11_1_Blumenwiese.Vector(0, 340), 80, -40);
        //for (let i: number = 0; i < createRandomNum(50, 100); i ++) {
        //let flower: Flower = new Flower();
        //flower.draw();
        //}
        for (let flower of flowers) {
            flower.draw();
        }
        L11_1_Blumenwiese.drawBeehive(new L11_1_Blumenwiese.Vector(600, 500));
        imgData = L11_1_Blumenwiese.crc2d.getImageData(0, 0, L11_1_Blumenwiese.crc2d.canvas.width, L11_1_Blumenwiese.crc2d.canvas.height);
        window.setInterval(update, 20);
    }
    //Coud
    for (let j = 0; j < 3; j++) {
        let type = "Cloud";
        let pos = new L11_1_Blumenwiese.Vector(5 * j, 15);
        let cloud = new L11_1_Blumenwiese.Cloud(pos, type);
        moveables.push(cloud);
        //console.log("MoveableInCloud" + moveables.length);
    }
    //Bee
    for (let k = 0; k < 8; k++) {
        let type = "Bee";
        let pos = new L11_1_Blumenwiese.Vector(655, 455);
        let bee = new L11_1_Blumenwiese.Bee(pos, type);
        moveables.push(bee);
        //console.log("MoveableInBee " + moveables.length);
    }
    function update() {
        L11_1_Blumenwiese.crc2d.clearRect(0, 0, 360, 720);
        L11_1_Blumenwiese.crc2d.putImageData(imgData, 0, 0);
        for (let moveable of moveables) {
            moveable.move(1 / 50);
            moveable.draw();
        }
    }
})(L11_1_Blumenwiese || (L11_1_Blumenwiese = {}));
//# sourceMappingURL=Main.js.map