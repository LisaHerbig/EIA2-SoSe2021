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

//when the mouse moves, setInfoBox is called
function setInfoBox(_event: MouseEvent): void {
    //creating the span Element
    let span: HTMLSpanElement = document.createElement("span");
    span.innerHTML = _event.currentTarget  + "  position left " + _event.clientX + " px" +   "  position top " + _event.clientY + " px";
    span.style.left = _event.clientX  + "px"; //Eigentlich hier die x koordinate meines mouseEvents
    span.style.top = _event.clientY   + "px"; //hier y Koordinate
    span.setAttribute("class", "span");
    document.body.appendChild(span);
    //_event.stopPropagation();
    
    
    //mouse moves again -> the "old" span element has to be deleted
 
    document.body.removeChild(span);
    console.log("hi");
 
}


//when something is clicked or the keyup event is triggerd logInfo will be called
function logInfo(_event: Event): void {
    console.log(_event.type);
    console.log(_event.target);
    console.log(_event.currentTarget);
    console.log(_event);
    
}

}
