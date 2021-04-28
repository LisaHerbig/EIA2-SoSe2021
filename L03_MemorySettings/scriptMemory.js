"use strict";
var MemorySettings;
(function (MemorySettings) {
    window.addEventListener("load", handleLoad);
    //Variablen zum Speichern des Formularinhalts
    let cardsNum = Number("");
    let cardsSize = Number("");
    let cardColor = "";
    let backgroundC = "";
    let fontColor = "";
    let fontStyle = "";
    //Array für die Kartenvorderseiten
    let fronts = [
        {
            class: "pair1",
            font: fontStyle,
            color: fontColor,
            text: "Ameise"
        },
        {
            class: "pair1",
            font: fontStyle,
            color: fontColor,
            text: "Ant"
        },
        {
            class: "pair2",
            font: fontStyle,
            color: fontColor,
            text: "Maus"
        },
        {
            class: "pair2",
            font: fontStyle,
            color: fontColor,
            text: "Mouse"
        }
    ];
    function handleLoad() {
        let form = document.querySelector("form");
        form.addEventListener("change", handleChange);
        let btn = document.querySelector("#btn");
        btn.addEventListener("pointerdown", handleBtn);
    }
    function handleChange(_event) {
        //Auswerten des Formulars 
        let formData = new FormData(document.forms[0]);
        //console.log(formData);
        for (let entry of formData) {
            //console.log(entry);
            switch (entry[0]) {
                case "Stepper":
                    cardsNum = Number(entry[1]);
                    break;
                case "Slider":
                    cardsSize = Number(entry[1]);
                    break;
                case "Color1":
                    backgroundC = String(entry[1]);
                    break;
                case "Color2":
                    cardColor = String(entry[1]);
                    break;
                case "Color3":
                    fontColor = String(entry[1]);
                    break;
                case "Select":
                    fontStyle = String(entry[1]);
                    break;
                default:
                    console.log("Something is wrong");
            }
        }
    }
    function handleBtn() {
        let form = document.querySelector("form");
        form.setAttribute("class", "hide");
        let btn = document.querySelector("#btn");
        btn.setAttribute("class", "hide");
        let explain = document.querySelector("#explain");
        explain.setAttribute("class", "hide");
        prepareGame();
    }
    function prepareGame() {
        let grid = document.createElement("div");
        grid.setAttribute("class", "grid");
        document.body.appendChild(grid);
        document.body.style.backgroundColor = backgroundC;
        //create Backside of cards and place them
        for (let i = 0; i < cardsNum; i++) {
            let back = document.createElement("div");
            back.style.backgroundColor = cardColor;
            back.style.width = cardsSize + "px";
            back.style.height = cardsSize + "px";
            grid.appendChild(back);
        }
    }
})(MemorySettings || (MemorySettings = {}));
//# sourceMappingURL=scriptMemory.js.map