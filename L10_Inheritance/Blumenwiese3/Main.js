"use strict";
var L10_2_Blumenwiese;
(function (L10_2_Blumenwiese) {
    /*
   Aufgabe: L10.2 Blumenwiese
   Name: Lisa Herbig
   Matrikel: 266236
   Datum: 08.06.2021
   Inspiration: Code und Diagramm aus den Lektionen
   */
    window.addEventListener("load", handleLoad);
    let imgData;
    let moveables = [];
    console.log("Moveable" + moveables.length);
    function handleLoad() {
        console.log("Hello");
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        L10_2_Blumenwiese.crc2d = canvas.getContext("2d");
        L10_2_Blumenwiese.drawBackground();
        L10_2_Blumenwiese.drawSun(new L10_2_Blumenwiese.Vector(L10_2_Blumenwiese.createRandomNum(20, 1100), L10_2_Blumenwiese.createRandomNum(10, 130)));
        L10_2_Blumenwiese.drawMountains(new L10_2_Blumenwiese.Vector(0, 320), 60, 180, "grey", "White");
        L10_2_Blumenwiese.drawMountains(new L10_2_Blumenwiese.Vector(0, 320), 20, 120, "black", "lightgrey");
        L10_2_Blumenwiese.drawHouse(new L10_2_Blumenwiese.Vector(0, 340), 80, -40);
        for (let i = 0; i < L10_2_Blumenwiese.createRandomNum(50, 100); i++) {
            let flower = new L10_2_Blumenwiese.Flower();
            flower.draw();
        }
        L10_2_Blumenwiese.drawBeehive(new L10_2_Blumenwiese.Vector(600, 500));
        imgData = L10_2_Blumenwiese.crc2d.getImageData(0, 0, L10_2_Blumenwiese.crc2d.canvas.width, L10_2_Blumenwiese.crc2d.canvas.height);
        //crc2d.save();
        window.setInterval(update, 20);
    }
    for (let j = 0; j < 3; j++) {
        let type = "Cloud";
        let pos = new L10_2_Blumenwiese.Vector(5 * j, 15);
        let cloud = new L10_2_Blumenwiese.Cloud(pos, type);
        moveables.push(cloud);
        console.log("MoveableInCloud" + moveables.length);
    }
    for (let k = 0; k < 8; k++) {
        let type = "Bee";
        let pos = new L10_2_Blumenwiese.Vector(655, 455);
        let bee = new L10_2_Blumenwiese.Bee(pos, type);
        moveables.push(bee);
        console.log("MoveableInBee " + moveables.length);
    }
    function update() {
        L10_2_Blumenwiese.crc2d.clearRect(0, 0, 360, 720);
        L10_2_Blumenwiese.crc2d.putImageData(imgData, 0, 0);
        //for (let m: number = 0; m < moveables.length; m++) {
        //moveables[m].move(1 / 50);
        //moveables[m].draw();
        //}
        for (let moveable of moveables) {
            if (moveable instanceof L10_2_Blumenwiese.Cloud) {
                moveable.move(1 / 50);
            }
            if (moveable instanceof L10_2_Blumenwiese.Bee) {
                moveable.move(1 / L10_2_Blumenwiese.createRandomNum(25, 125));
            }
            moveable.draw();
        }
        //for (let k: number = 0; k < 8; k++) {
        //bees[k].move(1 / createRandomNum(25, 125));
        //bees[k].draw();
        //}
    }
    console.log("Hi?");
})(L10_2_Blumenwiese || (L10_2_Blumenwiese = {}));
//# sourceMappingURL=Main.js.map