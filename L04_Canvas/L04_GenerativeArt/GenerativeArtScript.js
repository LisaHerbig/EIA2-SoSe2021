"use strict";
var GenerativeArtTSL04;
(function (GenerativeArtTSL04) {
    window.addEventListener("load", handleLoad);
    //Get Context
    let crc2d;
    let i = 0;
    //Array for different colors
    let colors = ["AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Beige", "Bisque", "Black", "Blue", "BlueViolet", "BurlyWood", "CadetBlue", "Chartreuse", "Coral", "CornflowerBlue", "Crimson", "Cyan", "DarkBlue", "DarkCyan", "DarkGray", "DarkGrey", "DarkGreen", "DarkMagenta", "DarkOrange", "DarkOrchid", "DarkSalmon", "DarkSeaGreen", "DarkSlateBlue", "DarkSlateGray", "DarkTurquoise", "DarkViolet", "DeepPink", "DeepSkyBlue", "DimGrey", "DodgerBlue", "ForestGreen", "Fuchsia", "Gold", "Green", "GreenYellow", "HotPink", "IndianRed", "Indigo", "Lavender", "LawnGreen", "LightBlue", "LightCoral", "LightCyan", "LightGray", "LightGreen", "LightPink", "LightSalmon", "LightSeaGreen", "LightSkyBlue", "LightSlateGrey", "LightSteelBlue", "Lime", "LimeGreen", "LightYellow", "Magenta", "MediumAquaMarine", "MediumBlue", "MediumOrchid", "MediumPurple", "MediumSeaGreen", "MediumSlateBlue", "MediumSpringGreen", "MediumTurquoise", "MediumVioletRed", "MidnightBlue", "Navy", "Moccasin", "Orange", "OrangeRed", "Orchid", "PaleGreen", "PaleTurquoise", "PaleVioletRed", "Plum", "PowderBlue", "Purple", "RebeccaPurple", "Red", "RosyBrown", "RoyalBlue", "Salmon", "SeaGreen", "Silver", "SkyBlue", "SlateBlue", "SlateGray", "SpringGreen", "SteelBlue", "Teal", "Thistle", "Tomato", "Turquoise", "Violet", "White", "Yellow", "YellowGreen"];
    //Create a random Number
    function createRandomNum() {
        let min = 0;
        let max = 100;
        let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
        return randomNum;
    }
    function createNumPxCanvas() {
        let min = 0;
        let max = 800;
        let numPxCanvas = Math.floor(Math.random() * (max - min + 1)) + min;
        return numPxCanvas;
    }
    function handleLoad() {
        let canvas = document.querySelector("canvas");
        crc2d = canvas.getContext("2d");
        displayArt();
    }
    function displayArt() {
        console.log(colors.length);
        createBackgound();
        crc2d.resetTransform();
        createCircle();
        crc2d.resetTransform();
        createTriangle();
        crc2d.resetTransform();
        createShaddowTriangle();
        crc2d.resetTransform();
        createCurve();
        crc2d.resetTransform();
        createCheeseCircle();
        crc2d.resetTransform();
        createFilledCircle();
        crc2d.resetTransform();
        createCheeseCurve();
        //crc2d.resetTransform();
        if (createRandomNum() > 95) {
            createPattern1();
        }
        if (createRandomNum() < 30) {
            createPattern2();
        }
    }
    //Create background of Canvas
    function createBackgound() {
        let gradient = crc2d.createRadialGradient(0, 50, 15, 150, 60, 800);
        gradient.addColorStop(0, colors[createRandomNum()]);
        gradient.addColorStop(.5, colors[createRandomNum()]);
        gradient.addColorStop(1, colors[createRandomNum()]);
        crc2d.fillStyle = gradient;
        crc2d.fillRect(0, 0, crc2d.canvas.width, crc2d.canvas.height);
    }
    //Create a Circle
    function createCircle() {
        for (i; i <= createNumPxCanvas() * 2; i++) {
            crc2d.beginPath();
            crc2d.arc(createRandomNum(), createRandomNum(), createRandomNum(), 0, 2 * Math.PI);
            crc2d.strokeStyle = colors[createRandomNum()];
            if (createRandomNum() > 70) {
                crc2d.translate(createRandomNum(), createRandomNum());
                crc2d.shadowBlur = createRandomNum();
                crc2d.shadowColor = colors[createRandomNum()];
                crc2d.shadowOffsetY = createRandomNum();
                crc2d.shadowOffsetX = createRandomNum();
                //crc2d.scale(createRandomNum(), createRandomNum());
            }
            crc2d.stroke();
        }
        //crc2d.resetTransform();
    }
    //Create Segment Circle
    function createCheeseCircle() {
        for (i; i < createNumPxCanvas(); i++) {
            let num = createRandomNum();
            crc2d.beginPath();
            crc2d.ellipse(createNumPxCanvas(), createNumPxCanvas(), num, num, Math.PI / num, num, num * Math.PI);
            //crc2d.ellipse(createRandomNum(), createRandomNum(), createRandomNum(), createRandomNum(), Math.PI / createRandomNum(), createRandomNum ), createRandomNum() * Math.PI);
            crc2d.strokeStyle = colors[createRandomNum()];
            crc2d.lineWidth = num * 0.2;
            if (createRandomNum() < 20) {
                crc2d.translate(createRandomNum() * 6, createRandomNum() * 6);
            }
            crc2d.setLineDash([5, createRandomNum()]);
            crc2d.stroke();
        }
        //crc2d.resetTransform();
    }
    //Create filled Circles
    function createFilledCircle() {
        for (i; i < createRandomNum(); i++) {
            crc2d.fillStyle = colors[createRandomNum()];
            crc2d.beginPath();
            let num = createRandomNum();
            crc2d.ellipse(createNumPxCanvas(), createNumPxCanvas(), num, num, 0, 0, 2 * Math.PI);
            crc2d.fill();
            crc2d.stroke();
        }
        //crc2d.resetTransform();
    }
    //Create Triangle
    function createTriangle() {
        for (i; i < createRandomNum(); i++) {
            crc2d.beginPath();
            crc2d.moveTo(createNumPxCanvas(), createNumPxCanvas());
            crc2d.lineTo(createNumPxCanvas(), createNumPxCanvas());
            crc2d.lineTo(createNumPxCanvas(), createNumPxCanvas());
            crc2d.closePath();
            if (createNumPxCanvas() < 200) {
                crc2d.scale(createRandomNum() / 10, createRandomNum() / 10);
            }
            //crc2d.strokeStyle = colors[createRandomNum()];
            crc2d.stroke();
        }
        //crc2d.resetTransform();
    }
    //Create Triangle with Shaddow
    function createShaddowTriangle() {
        for (i; i < createRandomNum(); i++) {
            crc2d.beginPath();
            crc2d.moveTo(createNumPxCanvas(), createNumPxCanvas());
            crc2d.lineTo(createNumPxCanvas(), createNumPxCanvas());
            crc2d.lineTo(createNumPxCanvas(), createNumPxCanvas());
            crc2d.closePath();
            crc2d.shadowColor = colors[createRandomNum()];
            crc2d.shadowOffsetY = createRandomNum();
            crc2d.shadowOffsetX = createRandomNum();
            crc2d.shadowBlur = createRandomNum() / 2;
            crc2d.stroke();
        }
        //crc2d.resetTransform();
    }
    // Curves
    function createCurve() {
        for (i; i < createRandomNum(); i++) {
            crc2d.beginPath();
            crc2d.moveTo(0, 0);
            crc2d.bezierCurveTo(0, createNumPxCanvas(), createNumPxCanvas(), createNumPxCanvas(), 800, 800);
            crc2d.lineWidth = createRandomNum() * 0.1;
            crc2d.stroke();
            if (createRandomNum() < 35) {
                crc2d.setLineDash([5, 15]);
                crc2d.stroke();
            }
            //crc2d.stroke();  
        }
        //crc2d.resetTransform();
    }
    //Cheese Curve
    function createCheeseCurve() {
        for (i; i < createRandomNum() / 10; i++) {
            crc2d.beginPath();
            if (createRandomNum() < 50) {
                crc2d.moveTo(0, 0);
                crc2d.bezierCurveTo(0, createNumPxCanvas(), createNumPxCanvas(), createNumPxCanvas(), createNumPxCanvas(), createNumPxCanvas());
                crc2d.setLineDash([5, 10]);
                crc2d.stroke();
                //crc2d.stroke();
            }
            else if (createRandomNum() < 2) {
                crc2d.lineCap = "round";
                crc2d.stroke();
            }
            else {
                crc2d.moveTo(800, 800);
                crc2d.bezierCurveTo(0, createNumPxCanvas(), createNumPxCanvas(), createNumPxCanvas(), createNumPxCanvas(), createNumPxCanvas());
                let currentNum = createRandomNum();
                crc2d.lineWidth = currentNum * 0.1;
                //crc2d.lineCap = "round";
                crc2d.stroke();
            }
            crc2d.stroke();
        }
        //crc2d.resetTransform();
    }
    //Pattern
    function createPattern1() {
        let pattern = document.createElement("canvas").getContext("2d");
        pattern.canvas.width = 80;
        pattern.canvas.height = 80;
        pattern.fillStyle = "rgba(0, 0, 0, 0)";
        pattern.fillRect(0, 0, pattern.canvas.width, pattern.canvas.height);
        pattern.moveTo(0, 20);
        pattern.lineTo(20, 20);
        pattern.lineTo(0, 40);
        pattern.lineTo(60, 0);
        pattern.lineTo(0, 80);
        pattern.lineTo(100, 0);
        pattern.lineTo(0, 120);
        pattern.lineTo(140, 0);
        pattern.strokeStyle = colors[createRandomNum()];
        pattern.stroke();
        crc2d.fillStyle = crc2d.createPattern(pattern.canvas, "repeat");
        crc2d.fillRect(0, 0, 800, 800);
    }
    function createPattern2() {
        let pattern = document.createElement("canvas").getContext("2d");
        pattern.canvas.width = 800;
        pattern.canvas.height = 800;
        pattern.fillStyle = "rgba(0, 0, 0, 0)";
        pattern.fillRect(0, 0, pattern.canvas.width, pattern.canvas.height);
        pattern.moveTo(100, 0);
        pattern.bezierCurveTo(100, 0, 100, 700, 800, 700);
        pattern.moveTo(200, 0);
        pattern.bezierCurveTo(200, 0, 200, 600, 800, 600);
        pattern.moveTo(300, 0);
        pattern.bezierCurveTo(300, 0, 300, 500, 800, 500);
        pattern.moveTo(400, 0);
        pattern.bezierCurveTo(400, 0, 400, 400, 800, 400);
        pattern.moveTo(500, 0);
        pattern.bezierCurveTo(500, 0, 500, 300, 800, 300);
        pattern.moveTo(600, 0);
        pattern.bezierCurveTo(600, 0, 600, 200, 800, 200);
        pattern.moveTo(700, 0);
        pattern.bezierCurveTo(700, 0, 700, 100, 800, 100);
        // other side
        pattern.moveTo(0, 100);
        pattern.bezierCurveTo(0, 100, 700, 100, 700, 800);
        pattern.moveTo(0, 200);
        pattern.bezierCurveTo(0, 200, 600, 200, 600, 800);
        pattern.moveTo(0, 300);
        pattern.bezierCurveTo(0, 300, 500, 300, 500, 800);
        pattern.moveTo(0, 400);
        pattern.bezierCurveTo(0, 400, 400, 400, 400, 800);
        pattern.moveTo(0, 500);
        pattern.bezierCurveTo(0, 500, 300, 500, 300, 800);
        pattern.moveTo(0, 600);
        pattern.bezierCurveTo(0, 600, 200, 600, 200, 800);
        pattern.moveTo(0, 700);
        pattern.bezierCurveTo(0, 700, 100, 700, 100, 800);
        pattern.strokeStyle = colors[createRandomNum()];
        pattern.stroke();
        crc2d.fillStyle = crc2d.createPattern(pattern.canvas, "repeat");
        crc2d.fillRect(0, 0, 800, 800);
    }
})(GenerativeArtTSL04 || (GenerativeArtTSL04 = {}));
//# sourceMappingURL=GenerativeArtScript.js.map