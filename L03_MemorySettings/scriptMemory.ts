namespace MemorySettings {
window.addEventListener("load", handleLoad);
//Variablen zum Speichern des Formularinhalts
let cardsNum: number = Number("");
let cardsSize: number = Number("");
let cardColor: FormDataEntryValue = "";
let backgroundC: string = "";
let fontColor: FormDataEntryValue = "";
let fontStyle: FormDataEntryValue = "";

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
        console.log(entry);
        //if (entry[0] == "Stepper") {
           // cardsNum = entry[1];
        //}
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

function handleBtn(): void {
    let form: HTMLFormElement = <HTMLFormElement>document.querySelector("form");
    form.setAttribute("class", "hide");
    
    let btn: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#btn");
    btn.setAttribute("class", "hide");

    let expain: HTMLElement = <HTMLElement>document.querySelector("#explain");
    expain.setAttribute("class", "hide");

    prepareGame();
}

function prepareGame(): void {
    let grid: HTMLElement = document.createElement("div");
    grid.setAttribute("class", "grid");
    document.body.appendChild(grid);
    //create Backside of cards and place them
    for (let i: number = 0; i < cardsNum; i++) {
        let back: HTMLDivElement = document.createElement("div");
        back.style.backgroundColor = backgroundC;
        back.style.width = cardsSize + "px";
        back.style.height = cardsSize + "px";
        grid.appendChild(back);
        
        
        
    }
    console.log("HI");
    console.log(cardsNum);
    
    
}



}