"use strict";
var MemorySettings;
(function (MemorySettings) {
    window.addEventListener("load", handleLoad);
    //Variables for saving form content
    let cardsNum = Number("");
    let cardsSize = Number("");
    let cardColor = "";
    let backgroundC = "";
    let fontColor = "";
    let fontStyle = "";
    //Variable for Timer 
    let start = 0;
    //Array for counting turns
    let countPoint = [];
    //Array for backs
    let backs = [];
    //Array for counting strikes
    let countStrikes = [];
    //Array for fronts in Game
    let frontsGame = [];
    let fronts = [];
    //Paar1
    let front1 = document.createElement("div");
    front1.setAttribute("class", "pair1");
    front1.innerText = "Ameise";
    fronts.push(front1);
    let front2 = document.createElement("div");
    front2.setAttribute("class", "pair1");
    front2.innerText = "Ant";
    fronts.push(front2);
    //Paar 2
    let front3 = document.createElement("div");
    front3.setAttribute("class", "pair2");
    front3.innerText = "Maus";
    fronts.push(front3);
    let front4 = document.createElement("div");
    front4.setAttribute("class", "pair2");
    front4.innerText = "Mouse";
    fronts.push(front4);
    //Paar3
    let front5 = document.createElement("div");
    front5.setAttribute("class", "pair3");
    front5.innerText = "Hase";
    fronts.push(front5);
    let front6 = document.createElement("div");
    front6.setAttribute("class", "pair3");
    front6.innerText = "Rabbit";
    fronts.push(front6);
    //Paar4
    let front7 = document.createElement("div");
    front7.setAttribute("class", "pair4");
    front7.innerText = "Löwe";
    fronts.push(front7);
    let front8 = document.createElement("div");
    front8.setAttribute("class", "pair4");
    front8.innerText = "Lion";
    fronts.push(front8);
    //Paar5
    let front9 = document.createElement("div");
    front9.setAttribute("class", "pair5");
    front9.innerText = "Katze";
    fronts.push(front9);
    let front10 = document.createElement("div");
    front10.setAttribute("class", "pair5");
    front10.innerText = "Cat";
    fronts.push(front10);
    //Paar6
    let front11 = document.createElement("div");
    front11.setAttribute("class", "pair6");
    front11.innerText = "Hund";
    fronts.push(front11);
    let front12 = document.createElement("div");
    front12.setAttribute("class", "pair6");
    front12.innerText = "Dog";
    fronts.push(front12);
    //Paar7
    let front13 = document.createElement("div");
    front13.setAttribute("class", "pair7");
    front13.innerText = "Fisch";
    fronts.push(front13);
    let front14 = document.createElement("div");
    front14.setAttribute("class", "pair7");
    front14.innerText = "Fish";
    fronts.push(front14);
    //Paar8
    let front15 = document.createElement("div");
    front15.setAttribute("class", "pair8");
    front15.innerText = "Frosch";
    fronts.push(front15);
    let front16 = document.createElement("div");
    front16.setAttribute("class", "pair8");
    front16.innerText = "Frog";
    fronts.push(front16);
    //Paar9
    let front17 = document.createElement("div");
    front17.setAttribute("class", "pair9");
    front17.innerText = "Elefant";
    fronts.push(front17);
    let front18 = document.createElement("div");
    front18.setAttribute("class", "pair9");
    front18.innerText = "Elephant";
    fronts.push(front18);
    //Paar 10
    let front19 = document.createElement("div");
    front19.setAttribute("class", "pair10");
    front19.innerText = "Schlange";
    fronts.push(front19);
    let front20 = document.createElement("div");
    front20.setAttribute("class", "pair10");
    front20.innerText = "Snake";
    fronts.push(front20);
    //Paar11
    let front21 = document.createElement("div");
    front21.setAttribute("class", "pair11");
    front21.innerText = "Spinne";
    fronts.push(front21);
    let front22 = document.createElement("div");
    front22.setAttribute("class", "pair11");
    front22.innerText = "Spider";
    fronts.push(front22);
    //Paar12
    let front23 = document.createElement("div");
    front23.setAttribute("class", "pair12");
    front23.innerText = "Biene";
    fronts.push(front23);
    let front24 = document.createElement("div");
    front24.setAttribute("class", "pair12");
    front24.innerText = "Bee";
    fronts.push(front24);
    //Paar13
    let front25 = document.createElement("div");
    front25.setAttribute("class", "pair13");
    front25.innerText = "Hummel";
    fronts.push(front25);
    let front26 = document.createElement("div");
    front26.setAttribute("class", "pair13");
    front26.innerText = "Bumblebee";
    fronts.push(front26);
    //Paar14
    let front27 = document.createElement("div");
    front27.setAttribute("class", "pair14");
    front27.innerText = "Eidechse";
    fronts.push(front27);
    let front28 = document.createElement("div");
    front28.setAttribute("class", "pair14");
    front28.innerText = "Lizard";
    fronts.push(front28);
    //Paar 15
    let front29 = document.createElement("div");
    front29.setAttribute("class", "pair15");
    front29.innerText = "Krokodil";
    fronts.push(front29);
    let front30 = document.createElement("div");
    front30.setAttribute("class", "pair15");
    front30.innerText = "Crocodile";
    fronts.push(front30);
    //Paar16
    let front31 = document.createElement("div");
    front31.setAttribute("class", "pair16");
    front31.innerText = "Biber";
    fronts.push(front31);
    let front32 = document.createElement("div");
    front32.setAttribute("class", "pair16");
    front32.innerText = "Beaver";
    fronts.push(front32);
    //Paar17
    let front33 = document.createElement("div");
    front33.setAttribute("class", "pair17");
    front33.innerText = "Dachs";
    fronts.push(front33);
    let front34 = document.createElement("div");
    front34.setAttribute("class", "pair17");
    front34.innerText = "Badger";
    fronts.push(front34);
    //Paar18
    let front35 = document.createElement("div");
    front35.setAttribute("class", "pair18");
    front35.innerText = "Delfin";
    fronts.push(front35);
    let front36 = document.createElement("div");
    front36.setAttribute("class", "pair36");
    front36.innerText = "Dolphin";
    fronts.push(front36);
    //Paar19
    let front37 = document.createElement("div");
    front37.setAttribute("class", "pair19");
    front37.innerText = "Eichhörchen";
    fronts.push(front37);
    let front38 = document.createElement("div");
    front38.setAttribute("class", "pair19");
    front38.innerText = "Squirrel";
    fronts.push(front38);
    //Paar20
    let front39 = document.createElement("div");
    front39.setAttribute("class", "pair20");
    front39.innerText = "Fuchs";
    fronts.push(front39);
    let front40 = document.createElement("div");
    front40.setAttribute("class", "pair20");
    front40.innerText = "Fox";
    fronts.push(front40);
    //Paar21
    let front41 = document.createElement("div");
    front41.setAttribute("class", "pair21");
    front41.innerText = "Igel";
    fronts.push(front41);
    let front42 = document.createElement("div");
    front42.setAttribute("class", "pair21");
    front42.innerText = "Hedgehog";
    fronts.push(front42);
    //Paar22
    let front43 = document.createElement("div");
    front43.setAttribute("class", "pair22");
    front43.innerText = "Maulwurf";
    fronts.push(front43);
    let front44 = document.createElement("div");
    front44.setAttribute("class", "pair22");
    front44.innerText = "Mole";
    fronts.push(front44);
    //Paar 23
    let front45 = document.createElement("div");
    front45.setAttribute("class", "pair23");
    front45.innerText = "Schaf";
    fronts.push(front45);
    let front46 = document.createElement("div");
    front46.setAttribute("class", "pair23");
    front46.innerText = "Sheep";
    fronts.push(front46);
    //Paar24
    let front47 = document.createElement("div");
    front47.setAttribute("class", "pair24");
    front47.innerText = "Pferd";
    fronts.push(front47);
    let front48 = document.createElement("div");
    front48.setAttribute("class", "pair24");
    front48.innerText = "Horse";
    fronts.push(front48);
    //Paar25
    let front49 = document.createElement("div");
    front49.setAttribute("class", "pair25");
    front49.innerText = "Schmetterling";
    fronts.push(front49);
    let front50 = document.createElement("div");
    front50.setAttribute("class", "pair25");
    front50.innerText = "Butterfly";
    fronts.push(front50);
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
        document.body.style.textAlign = "center";
        //create Backside of cards and place them
        for (let i = 0; i < cardsNum * 2; i++) {
            let back = document.createElement("div");
            back.style.backgroundColor = cardColor;
            back.style.width = cardsSize + "px";
            back.style.height = cardsSize + "px";
            back.setAttribute("id", "backN" + i);
            grid.appendChild(back);
            //Eventlistener for the back
            back.addEventListener("pointerdown", handlePoint);
            //Push back into back Array
            backs.push(back);
            //Moreover, the number of cards that is needed for the game has to be pushed in the fontsGame Array
            frontsGame.push(fronts[i]);
        }
        //Mischeln des neu geformten frontGames Array
        frontsGame.sort(() => Math.random() - 0.5);
        for (let i = 0; i < frontsGame.length; i++) {
            grid.appendChild(frontsGame[i]);
            frontsGame[i].style.fontFamily = fontStyle;
            frontsGame[i].style.color = fontColor;
        }
        //Timer
        start = Date.now();
    }
    //console.log(frontsGame);
    console.log(backs);
    function handlePoint(_event) {
        countPoint.push(1);
        if (countPoint.length == 2) {
            if (countStrikes.length >= cardsNum * 2) {
                //stop the time
                const stop = Date.now();
                //get the time 
                let time = stop - start;
                //create a div for congratiolation
                let congrats = document.createElement("div");
                congrats.innerText = "Congratiolations! You finished the game in " + time + "seconds! Press the button to go to the menu.";
                // create Button to start a new game
                let startAgain = document.createElement("button");
                startAgain.innerHTML = "Start a new game";
                startAgain.addEventListener("pointerdown", newGame);
            }
            else {
                turnCard(_event);
                countPoint.length = 0;
            }
        }
    }
    function turnCard(_event) {
        console.log(_event.currentTarget);
    }
    function newGame() {
        location.reload();
    }
})(MemorySettings || (MemorySettings = {}));
//# sourceMappingURL=scriptMemory.js.map