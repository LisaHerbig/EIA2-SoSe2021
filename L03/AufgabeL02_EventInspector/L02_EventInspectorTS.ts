namespace L02_EventInspector {
//wait for DOM to load and call handleLoad
window.addEventListener("load", handleLoad);
//Variables
let div0: HTMLDivElement = <HTMLDivElement> document.querySelector("#div0");
let div1: HTMLDivElement = <HTMLDivElement> document.getElementById("div1");

//handleLoad
function handleLoad (): void {
    //install mouse move listener on document
    document.addEventListener("mousemove", setInfoBox);
    //install click- and keyup-listeners on document,  
    document.addEventListener("click", logInfo);
    document.addEventListener("keyup", logInfo);
    //body
    document.body.addEventListener("click", logInfo);
    document.body.addEventListener("keyup", logInfo);
    //and divs
    div0.addEventListener("click", logInfo);
    div0.addEventListener("keyup", logInfo);
    div1.addEventListener("click", logInfo);
    div1.addEventListener("keyup", logInfo);
}

//when mouse moves, setInfoBox is called
function setInfoBox(_event: Event): void {
    //Variables for the x und y coordinates
    //let x: number = _event.;
    //creating the span Element
    let span: HTMLSpanElement = document.createElement("span");
    span.innerHTML = _event.currentTarget + /*_event.pageX +*/  "lala" ;
    span.style.left = "10px"; //Eigentlich hier die x koordinate meines mouseEvents
    span.style.right = "50px"; //hier y Koordinate
    span.style.width = "10px";
    span.style.height = "20px";
    document.body.appendChild(span);
    //Irgendwie muss ich das dann wieder rauslöschen
    
}
//when something is clicked or the keyup event is triggerd logInfo will be called
function logInfo(_event: Event): void {
    console.log(_event.type);
    console.log(_event.target);
    console.log(_event.currentTarget);
    console.log(_event);
    
}

}
