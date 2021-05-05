"use strict";
var L04_GenerativeArt;
(function (L04_GenerativeArt) {
    window.addEventListener("load", displayArt);
    //Get Context
    let crc2d;
    //Array for different colors
    let colorsArt = ["AntiqueWhite", "Aqua", "Aquamarine", "Beige", "Bisque", "Black", "Blue", "Blue", "BlueViolet", "DarkOrange", "BurlyWood", "CadetBlue", "Chartreuse", "DodgerBlue", "Coral", "CornflowerBlue", "Crimson", "Cyan", "DarkBlue", "DarkCyan", "DarkGrey", "DarkGreen", "DarkMagenta", "DarkOrange", "DarkOrchid", "DarkSalmon", "DarkSeaGreen", "DarkSlateBlue", "DeepPink", "DeepSkyBlue", "Fuchsia", "Gold", "Green", "GreenYellow", "HotPink", "IndianRed", "Indigo", "Lavender", "LawnGreen", "LightBlue", "LightCoral", "LightCyan", "LightGreen", "LightPink", "LightSalmon", "LightSeaGreen", "LightSkyBlue", "LightSteelBlue", "Lime", "LimeGreen", "Magenta", "MediumAquaMarine", "MediumBlue", "MediumOrchid", "MediumPurple", "MediumSeaGreen", "MediumSlateBlue", "MediumSpringGreen", "MediumTurquoise", "MediumVioletRed", "MidnightBlue", "Moccasin", "Navy", "Orange", "OrangeRed", "Orchid", "PaleGreen", "PaleTurquoise", "PeachPuff", "PowderBlue", "Purple", "RebeccaPurple", "Red", "RoyalBlue", "SeaGreen", "SkyBlue", "SlateBlue", "SlateGray", "SlateGrey", "SpringGreen", "SteelBlue", "Teal", "Thistle", "Tomato", "Turquoise", "Violet", "WhiteSmoke", "White", "Yellow", "YellowGreen", "Gainsboro", "Silver", "DimGray", "DarkSlateGray", "LightSlateGray", "SeaShell", "MistyRose", "Azure", " HoneyDew", "MintCream"];
    //Create a random Number
    function createRandomNum() {
        let min = 0;
        let max = 100;
        let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
        return randomNum;
    }
    //Display the Art
    function displayArt() {
        let canvas = document.querySelector("canvas");
        crc2d = canvas.getContext("2d");
        createBackgound();
        createThinCircle(createRandomNum());
        createSunCircle(createRandomNum());
        createOpenCircle();
        createFilledCircle(createRandomNum());
        createCheeseCircle(createRandomNum());
        createTriangle();
    }
    //backgound
    function createBackgound() {
        let gradient = crc2d.createRadialGradient(0, 50, 15, 150, 60, 800);
        gradient.addColorStop(0, colorsArt[createRandomNum()]);
        gradient.addColorStop(.5, colorsArt[createRandomNum()]);
        gradient.addColorStop(1, colorsArt[createRandomNum()]);
        crc2d.fillStyle = gradient;
        crc2d.fillRect(0, 0, crc2d.canvas.width, crc2d.canvas.height);
    }
    //Circles
    function createThinCircle(randomNum) {
        crc2d.beginPath();
        crc2d.ellipse(randomNum, randomNum, randomNum, randomNum, Math.PI / randomNum, randomNum, randomNum * Math.PI);
        crc2d.stroke();
    }
    function createSunCircle(randomNum) {
        crc2d.beginPath();
        crc2d.ellipse(randomNum, randomNum, randomNum, randomNum, Math.PI / randomNum, randomNum, randomNum * Math.PI);
        //crc2d.ellipse(createRandomNum(), createRandomNum(), createRandomNum(), createRandomNum(), Math.PI / createRandomNum(), createRandomNum(), createRandomNum() * Math.PI);
        crc2d.lineWidth = randomNum;
        //crc2d.lineWidth = randomNum;
    }
    function createOpenCircle() {
        if (createRandomNum() > 50) {
            crc2d.beginPath();
            crc2d.arc(createRandomNum(), createRandomNum(), createRandomNum(), 0, Math.PI, false);
            crc2d.stroke();
        }
        else {
            //crc2d.restore();
            crc2d.beginPath();
            crc2d.arc(createRandomNum(), createRandomNum(), createRandomNum(), 0, Math.PI, true);
            crc2d.stroke();
        }
    }
    function createFilledCircle(randomNum) {
        crc2d.fillStyle = colorsArt[randomNum];
        crc2d.beginPath();
        crc2d.ellipse(randomNum, randomNum, randomNum, randomNum, Math.PI / randomNum, randomNum, randomNum * Math.PI);
        crc2d.fill();
    }
    function createCheeseCircle(randomNum) {
        crc2d.beginPath();
        crc2d.ellipse(randomNum, randomNum, randomNum, randomNum, Math.PI / randomNum, randomNum, randomNum * Math.PI);
        crc2d.setLineDash([5, 15]);
        crc2d.stroke();
    }
    //Triangles
    function createTriangle() {
        crc2d.beginPath();
        crc2d.moveTo(createRandomNum(), createRandomNum());
        crc2d.lineTo(createRandomNum(), createRandomNum());
        crc2d.lineTo(createRandomNum(), createRandomNum());
        crc2d.closePath();
        crc2d.stroke();
    }
})(L04_GenerativeArt || (L04_GenerativeArt = {}));
//# sourceMappingURL=GenerativeArt.js.map