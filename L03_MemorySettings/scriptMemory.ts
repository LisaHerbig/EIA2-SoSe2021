namespace MemorySettings {

window.addEventListener("load", handleLoad);

//Variablen zum Speichern des Formularinhalts
let cardsNum: number = Number("");
let cardsSize: number = Number("");
let cardColor: string = "";
let backgroundC: string = "";
let fontColor: string = "";
let fontStyle: string = "";

//Interface für die Kartenvorderseiten
interface Front {
    class: string;
    font: string;
    color: string;
    text: string;
}
//Array für die Kartenvorderseiten
let fronts: Front[] = [
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
    //create Backside of cards and place them
    for (let i: number = 0; i < cardsNum; i++) {
        let back: HTMLDivElement = document.createElement("div");
        back.style.backgroundColor = cardColor;
        back.style.width = cardsSize + "px";
        back.style.height = cardsSize + "px";
        grid.appendChild(back);
    
    }   
}




}