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
        },
        {
            class: "pair3",
            font: fontStyle,
            color: fontColor,
            text: "Hase"
        },
        {
            class: "pair3",
            font: fontStyle,
            color: fontColor,
            text: "rabbit"
        },
        {
            class: "pair4",
            font: fontStyle,
            color: fontColor,
            text: "Löwe"
        },
        {
            class: "pair4",
            font: fontStyle,
            color: fontColor,
            text: "Lion"
        },
        {
            class: "pair5",
            font: fontStyle,
            color: fontColor,
            text: "Katze"
        },
        {
            class: "pair5",
            font: fontStyle,
            color: fontColor,
            text: "Cat"
        },
        {
            class: "pair6",
            font: fontStyle,
            color: fontColor,
            text: "Hund"
        },
        {
            class: "pair6",
            font: fontStyle,
            color: fontColor,
            text: "Dog"
        },
        {
            class: "pair7",
            font: fontStyle,
            color: fontColor,
            text: "Fisch"
        },
        {
            class: "pair7",
            font: fontStyle,
            color: fontColor,
            text: "Fish"
        },
        {
            class: "pair8",
            font: fontStyle,
            color: fontColor,
            text: "Frosch"
        },
        {
            class: "pair8",
            font: fontStyle,
            color: fontColor,
            text: "Frog"
        },
        {
            class: "pair9",
            font: fontStyle,
            color: fontColor,
            text: "Elefant"
        },
        {
            class: "pair9",
            font: fontStyle,
            color: fontColor,
            text: "elephant"
        },
        {
            class: "pair10",
            font: fontStyle,
            color: fontColor,
            text: "Schlange"
        },
        {
            class: "pair10",
            font: fontStyle,
            color: fontColor,
            text: "Snake"
        },
        {
            class: "pair11",
            font: fontStyle,
            color: fontColor,
            text: "Spinne"
        },
        {
            class: "pair11",
            font: fontStyle,
            color: fontColor,
            text: "Spider"
        },
        {
            class: "pair12",
            font: fontStyle,
            color: fontColor,
            text: "Biene"
        },
        {
            class: "pair12",
            font: fontStyle,
            color: fontColor,
            text: "Bee"
        },
        {
            class: "pair13",
            font: fontStyle,
            color: fontColor,
            text: "Hummel"
        },
        {
            class: "pair13",
            font: fontStyle,
            color: fontColor,
            text: "Bumblebee"
        },
        {
            class: "pair14",
            font: fontStyle,
            color: fontColor,
            text: "Eidechse"
        },
        {
            class: "pair14",
            font: fontStyle,
            color: fontColor,
            text: "Lizard"
        },
        {
            class: "pair15",
            font: fontStyle,
            color: fontColor,
            text: "Krokodil"
        },
        {
            class: "pair15",
            font: fontStyle,
            color: fontColor,
            text: "Crocodile"
        },
        {
            class: "pair16",
            font: fontStyle,
            color: fontColor,
            text: "Biber"
        },
        {
            class: "pair16",
            font: fontStyle,
            color: fontColor,
            text: "Beaver"
        },
        {
            class: "pair17",
            font: fontStyle,
            color: fontColor,
            text: "Dachs"
        },
        {
            class: "pair17",
            font: fontStyle,
            color: fontColor,
            text: "Badger"
        },
        {
            class: "pair18",
            font: fontStyle,
            color: fontColor,
            text: "Delfin"
        },
        {
            class: "pair18",
            font: fontStyle,
            color: fontColor,
            text: "Dolphin"
        },
        {
            class: "pair19",
            font: fontStyle,
            color: fontColor,
            text: "Eichhörnchen"
        },
        {
            class: "pair19",
            font: fontStyle,
            color: fontColor,
            text: "Squirrel"
        },
        {
            class: "pair20",
            font: fontStyle,
            color: fontColor,
            text: "Fuchs"
        },
        {
            class: "pair20",
            font: fontStyle,
            color: fontColor,
            text: "Fox"
        },
        {
            class: "pair21",
            font: fontStyle,
            color: fontColor,
            text: "Igel"
        },
        {
            class: "pair21",
            font: fontStyle,
            color: fontColor,
            text: "Hedgehog"
        },
        {
            class: "pair22",
            font: fontStyle,
            color: fontColor,
            text: "Maulwurf"
        },
        {
            class: "pair22",
            font: fontStyle,
            color: fontColor,
            text: "Mole"
        },
        {
            class: "pair23",
            font: fontStyle,
            color: fontColor,
            text: "Schaf"
        },
        {
            class: "pair23",
            font: fontStyle,
            color: fontColor,
            text: "Sheep"
        },
        {
            class: "pair24",
            font: fontStyle,
            color: fontColor,
            text: "Pferd"
        },
        {
            class: "pair24",
            font: fontStyle,
            color: fontColor,
            text: "Horse"
        },
        {
            class: "pair25",
            font: fontStyle,
            color: fontColor,
            text: "Schmetterling"
        },
        {
            class: "pair25",
            font: fontStyle,
            color: fontColor,
            text: "Butterfly"
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