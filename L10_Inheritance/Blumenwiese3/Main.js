"use strict";
var L10_2_Blumenwiese;
(function (L10_2_Blumenwiese) {
    /*
   Aufgabe: L10.2 Blumenwiese
   Name: Lisa Herbig
   Matrikel: 266236
   Datum: 29.05.2021
   Inspiration: Code und Diagramm aus der Lektion (L08.2), bei Sonne, Wolken und Bergen und L09 Asteroids für die Animation
   */
    window.addEventListener("load", handleLoad);
    let imgData;
    //console.log("Moveable" + moveables.length);
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
    let moveables = [];
    for (let j = 0; j < 3; j++) {
        let pos = new L10_2_Blumenwiese.Vector(5 * j, 15);
        let cloud = new L10_2_Blumenwiese.Cloud(pos);
        moveables.push(cloud);
        console.log("MoveableInCloud" + moveables.length);
    }
    for (let k = 0; k < 8; k++) {
        let pos = new L10_2_Blumenwiese.Vector(655, 455);
        let bee = new L10_2_Blumenwiese.Bee(pos);
        moveables.push(bee);
        console.log("MoveableInBee " + moveables.length);
    }
    function update() {
        L10_2_Blumenwiese.crc2d.clearRect(0, 0, 360, 720);
        L10_2_Blumenwiese.crc2d.putImageData(imgData, 0, 0);
        for (let moveable of moveables) {
            moveable.move(1 / 50);
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