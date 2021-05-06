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
        //Create background of Canvas
        let gradient = crc2d.createRadialGradient(0, 50, 15, 150, 60, 800);
        gradient.addColorStop(0, colors[createRandomNum()]);
        gradient.addColorStop(.5, colors[createRandomNum()]);
        gradient.addColorStop(1, colors[createRandomNum()]);
        crc2d.fillStyle = gradient;
        crc2d.fillRect(0, 0, crc2d.canvas.width, crc2d.canvas.height);
        //Create a Circle
        /*for (i; i <= createNumPxCanvas() * 2; i++) {
            crc2d.beginPath();
            crc2d.ellipse(createNumPxCanvas(), createNumPxCanvas(), createRandomNum(), createRandomNum(), Math.PI / 1, 0, 2 * Math.PI);
            crc2d.strokeStyle = colors[createRandomNum()];
            if (createRandomNum() > 70) {
                crc2d.translate(createRandomNum(), createRandomNum());
                //crc2d.scale(createRandomNum(), createRandomNum());
            }
            crc2d.stroke();
        }*/
        //Create Cheese Circle
        /*for (i; i < createRandomNum() * 2; i++) {
            let num: number = createRandomNum();
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
        }*/
        //Create filled Circles
        /*for (i; i < createRandomNum(); i++) {
            crc2d.fillStyle = colors[createRandomNum()];
            crc2d.beginPath();
            let num: number = createRandomNum();
            crc2d.ellipse(createNumPxCanvas(), createNumPxCanvas(), num, num, 0, 0, 2 * Math.PI);
            crc2d.fill();
            //crc2d.stroke();
        }*/
        //Create Triangle
        /*for (i; i < createRandomNum() * 2; i++) {
            crc2d.beginPath();
            crc2d.moveTo(createNumPxCanvas(), createNumPxCanvas());
            crc2d.lineTo(createNumPxCanvas(), createNumPxCanvas());
            crc2d.lineTo(createNumPxCanvas(), createNumPxCanvas());
            crc2d.closePath();
            //crc2d.strokeStyle = colors[createRandomNum()];
            crc2d.stroke();
        }*/
        //Create Triangle with Shaddow
        /*for (i; i < createRandomNum(); i++) {
            crc2d.beginPath();
            crc2d.moveTo(createNumPxCanvas(), createNumPxCanvas());
            crc2d.lineTo(createNumPxCanvas(), createNumPxCanvas());
            crc2d.lineTo(createNumPxCanvas(), createNumPxCanvas());
            crc2d.closePath();
            crc2d.shadowColor = colors[createRandomNum()];
            crc2d.shadowOffsetY = createRandomNum();
            crc2d.shadowOffsetX = createRandomNum();
            crc2d.stroke();
        }*/
        // Curves
        /*for (i; i < createRandomNum(); i++) {
            crc2d.beginPath();
            crc2d.moveTo(0, 0);
            crc2d. bezierCurveTo(0, createNumPxCanvas(), createNumPxCanvas(), createNumPxCanvas(), 800, 800);
            crc2d.lineWidth = createRandomNum() * 0.1;
            crc2d.stroke();
        }*/
        //Cheese Curve
        for (i; i < createRandomNum(); i++) {
            crc2d.beginPath();
            if (createRandomNum() < 50) {
                crc2d.moveTo(0, 0);
                crc2d.bezierCurveTo(0, createNumPxCanvas(), createNumPxCanvas(), createNumPxCanvas(), createNumPxCanvas(), createNumPxCanvas());
                crc2d.setLineDash([5, 10]);
                //crc2d.stroke();
            }
            else {
                crc2d.moveTo(800, 800);
                crc2d.bezierCurveTo(0, createNumPxCanvas(), createNumPxCanvas(), createNumPxCanvas(), createNumPxCanvas(), createNumPxCanvas());
                let currentNum = createRandomNum();
                crc2d.lineWidth = currentNum * 0.1;
                crc2d.lineCap = "round";
            }
            crc2d.stroke();
        }
    }
})(GenerativeArtTSL04 || (GenerativeArtTSL04 = {}));
//# sourceMappingURL=GenerativeArtScript.js.map