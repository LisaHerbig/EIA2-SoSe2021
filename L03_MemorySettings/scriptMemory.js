"use strict";
var MemorySettings;
(function (MemorySettings) {
    window.addEventListener("load", handleLoad);
    //Variablen zum Speichern des Formularinhalts
    let cardsNum = "";
    let cardsSize = "";
    let cardColor = "";
    let backgroundC = "";
    let fontColor = "";
    let fontStyle = "";
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
            console.log(entry);
            //if (entry[0] == "Stepper") {
            // cardsNum = entry[1];
            //}
            switch (entry[0]) {
                case "Stepper":
                    cardsNum = entry[1];
                    break;
                case "Slider":
                    cardsSize = entry[1];
                    break;
                case "Color1":
                    backgroundC = entry[1];
                    break;
                case "Color2":
                    cardColor = entry[1];
                    break;
                case "Color3":
                    fontColor = entry[1];
                    break;
                case "Select":
                    fontStyle = entry[1];
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
        let expain = document.querySelector("#explain");
        expain.setAttribute("class", "hide");
    }
})(MemorySettings || (MemorySettings = {}));
//# sourceMappingURL=scriptMemory.js.map