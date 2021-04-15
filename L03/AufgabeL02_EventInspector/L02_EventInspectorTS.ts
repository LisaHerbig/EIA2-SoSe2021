namespace L02_EventInspector {
//wait for DOM to load and call handleLoad
window.addEventListener("load", handleLoad);

//Variables
let div0: HTMLDivElement = <HTMLDivElement> document.querySelector("#div0");
let div1: HTMLDivElement = <HTMLDivElement> document.querySelector("#div1");
let span: HTMLSpanElement = document.createElement("span");

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
    //container.addEventListener("mousemove", setInfoBox);
    //container.addEventListener("click", logInfo);
    //container.addEventListener("keyup", logInfo);
    div0.addEventListener("mousemove", setInfoBox);
    div0.addEventListener("click", logInfo);
    div0.addEventListener("keyup", logInfo);
    div1.addEventListener("mousemove", setInfoBox);
    div1.addEventListener("click", logInfo);
    div1.addEventListener("keyup", logInfo);
}

//when the mouse moves, setInfoBox is called
function setInfoBox(_event: MouseEvent): void {
    _event.stopPropagation();
    //mouse moves again -> the "old" span element has to be deleted
    if (document.body.contains(span) == true) {
        document.body.removeChild(span);
    }
    span.innerText = _event.currentTarget  + "  position left " + _event.pageX + " px" +   "  position top " + _event.pageY + " px";
    span.style.left = _event.pageX  + 9 + "px";
    span.style.top = _event.pageY + 11  + "px";
    span.setAttribute("class", "span");
    document.body.appendChild (span);
}

//when something is clicked or the keyup event is triggerd logInfo will be called
function logInfo(_event: Event): void {
    _event.stopPropagation();
    console.log(_event.type);
    console.log(_event.target);
    console.log(_event.currentTarget);
    console.log(_event);   
}

}
