namespace MemorySettings {
window.addEventListener("load", handleLoad);
//Variablen zum Speichern des Formularinhalts
let cardsNum: FormDataEntryValue = "";
let cardsSize: FormDataEntryValue = "";
let cardColor: FormDataEntryValue = "";
let backgroundC: FormDataEntryValue = "";
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

function handleBtn(): void {
    let form: HTMLFormElement = <HTMLFormElement>document.querySelector("form");
    form.setAttribute("class", "hide");
    
    let btn: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#btn");
    btn.setAttribute("class", "hide");

    let expain: HTMLElement = <HTMLElement>document.querySelector("#explain");
    expain.setAttribute("class", "hide");
}




}