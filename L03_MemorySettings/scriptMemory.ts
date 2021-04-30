namespace MemorySettings {

window.addEventListener("load", handleLoad);

//Variables for saving form content
let cardsNum: number = Number("");
let cardsSize: number = Number("");
let cardColor: string = "";
let backgroundC: string = "";
let fontColor: string = "";
let fontStyle: string = "";

//Variable for Timer 
let start: number = 0;

//Array for counting turns
let countPoint: number[] = [];

//Array for pointed cards (to compare)
let pointedCard: HTMLElement[] = [];

//Array for backs
let backs: HTMLElement[] = [];

//Array for counting strikes
let countStrikes: HTMLElement[] = [];

//Array for fronts in Game
let frontsGame: HTMLElement[] = [];

let fronts: HTMLElement[] = [];

//Paar1
let front1: HTMLElement = document.createElement("div");
front1.setAttribute("class", "pair1");
front1.innerText = "Ameise";
fronts.push(front1);

let front2: HTMLElement = document.createElement("div");
front2.setAttribute("class", "pair1");
front2.innerText = "Ant";
fronts.push(front2);

//Paar 2
let front3: HTMLElement = document.createElement("div");
front3.setAttribute("class", "pair2");
front3.innerText = "Maus";
fronts.push(front3);

let front4: HTMLElement = document.createElement("div");
front4.setAttribute("class", "pair2");
front4.innerText = "Mouse";
fronts.push(front4);

//Paar3
let front5: HTMLElement = document.createElement("div");
front5.setAttribute("class", "pair3");
front5.innerText = "Hase";
fronts.push(front5);

let front6: HTMLElement = document.createElement("div");
front6.setAttribute("class", "pair3");
front6.innerText = "Rabbit";
fronts.push(front6);

//Paar4
let front7: HTMLElement = document.createElement ("div");
front7.setAttribute("class", "pair4");
front7.innerText = "Löwe";
fronts.push(front7);

let front8: HTMLElement = document.createElement("div");
front8.setAttribute("class", "pair4");
front8.innerText = "Lion";
fronts.push(front8);

//Paar5
let front9: HTMLElement = document.createElement("div");
front9.setAttribute("class", "pair5");
front9.innerText = "Katze";
fronts.push(front9);

let front10: HTMLElement = document.createElement("div");
front10.setAttribute("class", "pair5");
front10.innerText = "Cat";
fronts.push(front10);

//Paar6
let front11: HTMLElement = document.createElement("div");
front11.setAttribute("class", "pair6");
front11.innerText = "Hund";
fronts.push(front11);

let front12: HTMLElement = document.createElement("div");
front12.setAttribute("class", "pair6");
front12.innerText = "Dog";
fronts.push(front12);

//Paar7
let front13: HTMLElement = document.createElement("div");
front13.setAttribute("class", "pair7");
front13.innerText = "Fisch";
fronts.push(front13);

let front14: HTMLElement = document.createElement("div");
front14.setAttribute("class", "pair7");
front14.innerText = "Fish";
fronts.push(front14);

//Paar8
let front15: HTMLElement = document.createElement("div");
front15.setAttribute("class", "pair8");
front15.innerText = "Frosch";
fronts.push(front15);

let front16: HTMLElement = document.createElement("div");
front16.setAttribute("class", "pair8");
front16.innerText = "Frog";
fronts.push(front16);

//Paar9
let front17: HTMLElement = document.createElement("div");
front17.setAttribute("class", "pair9");
front17.innerText = "Elefant";
fronts.push(front17);

let front18: HTMLElement = document.createElement("div");
front18.setAttribute("class", "pair9");
front18.innerText = "Elephant";
fronts.push(front18);

//Paar 10
let front19: HTMLElement = document.createElement("div");
front19.setAttribute("class", "pair10");
front19.innerText = "Schlange";
fronts.push(front19);

let front20: HTMLElement = document.createElement("div");
front20.setAttribute("class", "pair10");
front20.innerText = "Snake";
fronts.push(front20);

//Paar11
let front21: HTMLElement = document.createElement("div");
front21.setAttribute("class", "pair11");
front21.innerText = "Spinne";
fronts.push(front21);

let front22: HTMLElement = document.createElement("div");
front22.setAttribute("class", "pair11");
front22.innerText = "Spider";
fronts.push(front22);

//Paar12
let front23: HTMLElement = document.createElement("div");
front23.setAttribute("class", "pair12");
front23.innerText = "Biene";
fronts.push(front23);

let front24: HTMLElement = document.createElement("div");
front24.setAttribute("class", "pair12");
front24.innerText = "Bee";
fronts.push(front24);

//Paar13
let front25: HTMLElement = document.createElement("div");
front25.setAttribute("class", "pair13");
front25.innerText = "Hummel";
fronts.push(front25);

let front26: HTMLElement = document.createElement("div");
front26.setAttribute("class", "pair13");
front26.innerText = "Bumblebee";
fronts.push(front26);

//Paar14
let front27: HTMLElement = document.createElement("div");
front27.setAttribute("class", "pair14");
front27.innerText = "Eidechse";
fronts.push(front27);

let front28: HTMLElement = document.createElement("div");
front28.setAttribute("class", "pair14");
front28.innerText = "Lizard";
fronts.push(front28);

//Paar 15
let front29: HTMLElement = document.createElement("div");
front29.setAttribute("class", "pair15");
front29.innerText = "Krokodil";
fronts.push(front29);

let front30: HTMLElement = document.createElement("div");
front30.setAttribute("class", "pair15");
front30.innerText = "Crocodile";
fronts.push(front30);

//Paar16
let front31: HTMLElement = document.createElement("div");
front31.setAttribute("class", "pair16");
front31.innerText = "Biber";
fronts.push(front31);

let front32: HTMLElement = document.createElement("div");
front32.setAttribute("class", "pair16");
front32.innerText = "Beaver";
fronts.push(front32);

//Paar17
let front33: HTMLElement = document.createElement("div");
front33.setAttribute("class", "pair17");
front33.innerText = "Dachs";
fronts.push(front33);

let front34: HTMLElement = document.createElement("div");
front34.setAttribute("class", "pair17");
front34.innerText = "Badger";
fronts.push(front34);

//Paar18
let front35: HTMLElement = document.createElement("div");
front35.setAttribute("class", "pair18");
front35.innerText = "Delfin";
fronts.push(front35);

let front36: HTMLElement = document.createElement("div");
front36.setAttribute("class", "pair36");
front36.innerText = "Dolphin";
fronts.push(front36);

//Paar19
let front37: HTMLElement = document.createElement("div");
front37.setAttribute("class", "pair19");
front37.innerText = "Eichhörchen";
fronts.push(front37);

let front38: HTMLElement = document.createElement("div");
front38.setAttribute("class", "pair19");
front38.innerText = "Squirrel";
fronts.push(front38);

//Paar20
let front39: HTMLElement = document.createElement("div");
front39.setAttribute("class", "pair20");
front39.innerText = "Fuchs";
fronts.push(front39);

let front40: HTMLElement = document.createElement("div");
front40.setAttribute("class", "pair20");
front40.innerText = "Fox";
fronts.push(front40);

//Paar21
let front41: HTMLElement = document.createElement("div");
front41.setAttribute("class", "pair21");
front41.innerText = "Igel";
fronts.push(front41);

let front42: HTMLElement = document.createElement("div");
front42.setAttribute("class", "pair21");
front42.innerText = "Hedgehog";
fronts.push(front42);

//Paar22
let front43: HTMLElement = document.createElement("div");
front43.setAttribute("class", "pair22");
front43.innerText = "Maulwurf";
fronts.push(front43);

let front44: HTMLElement = document.createElement("div");
front44.setAttribute("class", "pair22");
front44.innerText = "Mole";
fronts.push(front44);

//Paar 23
let front45: HTMLElement = document.createElement("div");
front45.setAttribute("class", "pair23");
front45.innerText = "Schaf";
fronts.push(front45);

let front46: HTMLElement = document.createElement("div");
front46.setAttribute("class", "pair23");
front46.innerText = "Sheep";
fronts.push(front46);

//Paar24
let front47: HTMLElement = document.createElement("div");
front47.setAttribute("class", "pair24");
front47.innerText = "Pferd";
fronts.push(front47);

let front48: HTMLElement = document.createElement("div");
front48.setAttribute("class", "pair24");
front48.innerText = "Horse";
fronts.push(front48);

//Paar25
let front49: HTMLElement = document.createElement("div");
front49.setAttribute("class", "pair25");
front49.innerText = "Schmetterling";
fronts.push(front49);

let front50: HTMLElement = document.createElement("div");
front50.setAttribute("class", "pair25");
front50.innerText = "Butterfly";
fronts.push(front50);

function handleLoad(): void {
    let form: HTMLFormElement = <HTMLFormElement>document.querySelector("form");
    form.addEventListener("change", handleChange);

    let btn: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#btn");
    btn.addEventListener("pointerdown", handleBtn);
}

function handleChange(_event: Event): void {
    //Auswerten des Formulars 
    let formData: FormData = new FormData(document.forms[0]);
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

function handleBtn(): void {
    let form: HTMLFormElement = <HTMLFormElement>document.querySelector("form");
    form.setAttribute("class", "hide");
    
    let btn: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#btn");
    btn.setAttribute("class", "hide");

    let explain: HTMLElement = <HTMLElement>document.querySelector("#explain");
    explain.setAttribute("class", "hide");

    prepareGame();
}

function prepareGame(): void {
    let grid: HTMLElement = document.createElement("div");
    grid.setAttribute("class", "grid");
    document.body.appendChild(grid);
    document.body.style.backgroundColor = backgroundC;
    document.body.style.textAlign = "center";
    //create Backside of cards and place them
    for (let i: number = 0; i < cardsNum * 2; i++) {
        let back: HTMLDivElement = document.createElement("div");
        back.style.backgroundColor = cardColor;
        back.style.width = cardsSize + "px";
        back.style.height = cardsSize + "px";
        back.setAttribute("id", "backN" + i);
        grid.appendChild(back);
        //Eventlistener for the back
        //back.addEventListener("pointerdown", handlePoint);
        //Push back into back Array
        backs.push(back);
        //Moreover, the number of cards that is needed for the game has to be pushed in the fontsGame Array
        frontsGame.push(fronts[i]);
    } 

    //Mix the Array of Card fronts in Game
    frontsGame.sort(() => Math.random() - 0.5);
    //Change color and Family of the font
    for (let i: number = 0; i < frontsGame.length; i++ ) {
        backs[i].appendChild(frontsGame[i]);
        frontsGame[i].style.fontFamily = fontStyle;
        frontsGame[i].style.color = fontColor;
        frontsGame[i].style.width = cardsSize + "px";
        frontsGame[i].style.height = cardsSize + "px";
        frontsGame[i].addEventListener("pointerdown", handlePoint);
        frontsGame[i].style.opacity = "0";
    }
    //Timer
    start = Date.now();
}
//console.log(frontsGame);
console.log(backs);


function handlePoint(_event: Event): void {
   countPoint.push(1);
   //if (countPoint.length <= 2) {
       
   //if (countStrikes.length == cardsNum * 2) {
           //stop the time
           //const stop: number = Date.now();
           //get the time 
           //let time: number = stop - start;
           //create a div for congratiolation
           //let congrats: HTMLDivElement = document.createElement("div");
           //congrats.innerText = "Congratiolations! You finished the game in " + time + "seconds! Press the button to go to the menu.";
           //document.body.appendChild(congrats);
           // create Button to start a new game
           //let startAgain: HTMLButtonElement = document.createElement("button");
           //startAgain.innerHTML = "Start a new game";
           //startAgain.addEventListener("pointerdown", newGame);
           //document.body.appendChild(startAgain);
        //} 
       //else 
   if (countPoint.length <= 2) {
                turnCard(_event);
                //countPoint.length = 0;
        }
    //}
    
}

function turnCard(_event: Event): void {
    if (_event.target == null) {
        console.log("fehler");
        
    }
    else {
    let onpoint: HTMLElement = <HTMLElement> _event.target;
    onpoint.style.opacity = "1";
    setTimeout(function(): void {onpoint.style.opacity = "0"; }, 2000);
    pointedCard.push(onpoint);
    compareCards();
    }
}

function compareCards (): void {
    if (countPoint.length == 2) {
        if (pointedCard[0].className == pointedCard[1].className) {
            pointedCard[0].style.backgroundColor = backgroundC;
            let parent: HTMLElement = <HTMLElement>pointedCard[0].parentElement;
            parent.style.backgroundColor = backgroundC;
            pointedCard[0].removeEventListener("pointerdown", handlePoint);
            countStrikes.push(pointedCard[0]);
            pointedCard[1].style.backgroundColor = backgroundC;
            let parent2: HTMLElement = <HTMLElement>pointedCard[1].parentElement;
            parent2.style.backgroundColor = backgroundC;
            pointedCard[1].removeEventListener("pointerdown", handlePoint);
            countStrikes.push(pointedCard[1]);
        
            console.log(countStrikes);
            //countPoint.length = 0;
            if (countStrikes.length == cardsNum * 2) {
                //stop the time
                const stop: number = Date.now();
                //get the time 
                let time: number = stop - start;
                //create a div for congratiolation
                let displayCongrats: HTMLElement = <HTMLElement>document.querySelector("#congrats");
                let congrats: HTMLDivElement = document.createElement("div");
                congrats.innerText = "Congratiolations! You finished the game in " + time + " ms! Press the button to go to the menu.";
                congrats.setAttribute("id", "congrats");
                displayCongrats.appendChild(congrats);
                // create Button to start a new game
                let startAgain: HTMLButtonElement = document.createElement("button");
                startAgain.innerHTML = "Start a new game";
                startAgain.addEventListener("pointerdown", newGame);
                congrats.appendChild(startAgain);
             } 
        }

        pointedCard = [];
        countPoint.length = 0;
    }
}

function newGame(): void {
    location.reload();
}


}