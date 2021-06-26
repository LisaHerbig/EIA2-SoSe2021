"use strict";
var L11_2_Blumenwiese;
(function (L11_2_Blumenwiese) {
    /*
   Aufgabe: L11.1 BlumenwieseAdvanced
   Name: Lisa Herbig
   Matrikel: 266236
   Datum: 17.06.2021
   Inspiration: Code und Diagramm aus den Lektionen, für die Kreisanimation:https://codepen.io/egorava/pen/wGmmJW
   */
    window.addEventListener("load", handleLoad);
    let imgData;
    let TASK;
    (function (TASK) {
        TASK[TASK["WORK"] = 0] = "WORK";
        TASK[TASK["COLLECT"] = 1] = "COLLECT";
        TASK[TASK["FLYHOME"] = 2] = "FLYHOME";
        TASK[TASK["GOIN"] = 3] = "GOIN";
    })(TASK = L11_2_Blumenwiese.TASK || (L11_2_Blumenwiese.TASK = {}));
    let moveables = [];
    let flowers = [];
    L11_2_Blumenwiese.fullFlowers = [];
    for (let h = 0; h < 1; h++) {
        let type = 0;
        switch (type) {
            case (0):
                let pos1 = new L11_2_Blumenwiese.Vector(L11_2_Blumenwiese.createRandomNum(10, 1200), L11_2_Blumenwiese.createRandomNum(400, 700));
                L11_2_Blumenwiese.fullFlowers.push(pos1);
                let flower1 = new L11_2_Blumenwiese.Flower1(pos1);
                flowers.push(flower1);
                console.log(pos1);
                break;
            case (1):
                let pos2 = new L11_2_Blumenwiese.Vector(L11_2_Blumenwiese.createRandomNum(10, 310), L11_2_Blumenwiese.createRandomNum(400, 700));
                L11_2_Blumenwiese.fullFlowers.push(pos2);
                let flower2 = new L11_2_Blumenwiese.Flower2(pos2);
                flowers.push(flower2);
                break;
            case (2):
                let pos3 = new L11_2_Blumenwiese.Vector(L11_2_Blumenwiese.createRandomNum(10, 310), L11_2_Blumenwiese.createRandomNum(400, 700));
                L11_2_Blumenwiese.fullFlowers.push(pos3);
                let flower3 = new L11_2_Blumenwiese.Flower3(pos3);
                flowers.push(flower3);
                break;
            case (3):
                let pos4 = new L11_2_Blumenwiese.Vector(L11_2_Blumenwiese.createRandomNum(10, 310), L11_2_Blumenwiese.createRandomNum(400, 700));
                L11_2_Blumenwiese.fullFlowers.push(pos4);
                let flower4 = new L11_2_Blumenwiese.Flower4(pos4);
                flowers.push(flower4);
                break;
            case (4):
                let pos5 = new L11_2_Blumenwiese.Vector(L11_2_Blumenwiese.createRandomNum(10, 310), L11_2_Blumenwiese.createRandomNum(400, 700));
                L11_2_Blumenwiese.fullFlowers.push(pos5);
                let flower5 = new L11_2_Blumenwiese.Flower5(pos5);
                flowers.push(flower5);
                break;
            case (5):
                let pos6 = new L11_2_Blumenwiese.Vector(L11_2_Blumenwiese.createRandomNum(10, 310), L11_2_Blumenwiese.createRandomNum(400, 700));
                L11_2_Blumenwiese.fullFlowers.push(pos6);
                let flower6 = new L11_2_Blumenwiese.Flower6(pos6);
                flowers.push(flower6);
                break;
            default:
                console.log("Something went wrong");
        }
    }
    function handleLoad() {
        //console.log("Hello");
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        L11_2_Blumenwiese.crc2d = canvas.getContext("2d");
        L11_2_Blumenwiese.drawBackground();
        L11_2_Blumenwiese.drawSun(new L11_2_Blumenwiese.Vector(L11_2_Blumenwiese.createRandomNum(20, 1100), L11_2_Blumenwiese.createRandomNum(10, 130)));
        L11_2_Blumenwiese.drawMountains(new L11_2_Blumenwiese.Vector(0, 320), 60, 180, "grey", "White");
        L11_2_Blumenwiese.drawMountains(new L11_2_Blumenwiese.Vector(0, 320), 20, 120, "black", "lightgrey");
        L11_2_Blumenwiese.drawHouse(new L11_2_Blumenwiese.Vector(0, 340), 80, -40);
        for (let flower of flowers) {
            flower.draw();
            flower.displayNectarLevel();
        }
        L11_2_Blumenwiese.drawBeehive(new L11_2_Blumenwiese.Vector(600, 500));
        imgData = L11_2_Blumenwiese.crc2d.getImageData(0, 0, L11_2_Blumenwiese.crc2d.canvas.width, L11_2_Blumenwiese.crc2d.canvas.height);
        window.setInterval(update, 100);
    }
    //Coud
    for (let j = 0; j < 3; j++) {
        let type = "Cloud";
        let pos = new L11_2_Blumenwiese.Vector(5 * j, 15);
        let cloud = new L11_2_Blumenwiese.Cloud(pos, type);
        moveables.push(cloud);
    }
    //Bee
    for (let k = 0; k < 3; k++) {
        let type = "Bee";
        let pos = new L11_2_Blumenwiese.Vector(655, 455);
        let bee = new L11_2_Blumenwiese.Bee(pos, type);
        moveables.push(bee);
    }
    let testBee = new L11_2_Blumenwiese.Bee(new L11_2_Blumenwiese.Vector(655, 455), "Bee");
    //testBee.findDestination();
    function update() {
        L11_2_Blumenwiese.crc2d.clearRect(0, 0, 360, 720);
        L11_2_Blumenwiese.crc2d.putImageData(imgData, 0, 0);
        testBee.flyToFlower(1 / 50);
        testBee.draw();
    }
})(L11_2_Blumenwiese || (L11_2_Blumenwiese = {}));
//# sourceMappingURL=Main.js.map