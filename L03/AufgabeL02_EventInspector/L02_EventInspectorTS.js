"use strict";
var L02_EventInspector;
(function (L02_EventInspector) {
    //wait for DOM to load and call handleLoad
    window.addEventListener("load", handleLoad);
    //Variables
    let div0 = document.querySelector("#div0");
    let div1 = document.querySelector("#div1");
    //let container: HTMLDivElement = <HTMLDivElement> document.querySelector("#container");
    //handleLoad
    function handleLoad() {
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
    function setInfoBox(_event) {
        _event.stopPropagation();
        //creating the span Element
        let span = document.createElement("span");
        span.innerText = _event.currentTarget + "  position left " + _event.pageX + " px" + "  position top " + _event.pageY + " px";
        span.style.left = _event.pageX + 9 + "px";
        span.style.top = _event.pageY + 11 + "px";
        span.setAttribute("class", "span");
        document.body.appendChild(span);
        console.log(_event.currentTarget);
        //mouse moves again -> the "old" span element has to be deleted
        //document.body.removeChild(span);
        console.log("hi");
    }
    //when something is clicked or the keyup event is triggerd logInfo will be called
    function logInfo(_event) {
        _event.stopPropagation();
        console.log(_event.type);
        console.log(_event.target);
        console.log(_event.currentTarget);
        console.log(_event);
    }
})(L02_EventInspector || (L02_EventInspector = {}));
//# sourceMappingURL=L02_EventInspectorTS.js.map