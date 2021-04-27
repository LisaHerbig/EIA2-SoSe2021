"use strict";
var L03_Cocktailbar;
(function (L03_Cocktailbar) {
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        console.log("Start");
        let form = document.querySelector("div#form");
        let slider = document.querySelector("input#amount");
        form.addEventListener("change", handleChange);
        slider.addEventListener("input", displayAmount);
    }
    function handleChange(_event) {
        //console.log(_event);
        //let drink: HTMLSelectElement = <HTMLSelectElement> document.querySelector("select");
        //console.log(drink.value);
        //let inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll("input");
        //console.log(inputs);
        let order = document.querySelector("div#order");
        order.innerHTML = "";
        let formData = new FormData(document.forms[0]);
        //console.log(formData);
        for (let entry of formData) {
            //console.log(entry);
            let item = document.querySelector("[value='" + entry[1] + "']");
            //console.log(item);
            let price = Number(item.getAttribute("price"));
            //console.log(price);
            let drinkAmount = document.querySelector("#amount");
            let priceAmount = _event.target.value;
            let amountPrice = parseFloat(priceAmount);
            //wenn 1L 5€ Kostet
            //console.log(amountPrice * 5);
            if (_event.target == drinkAmount) {
                order.innerHTML += item.value + " € " + (amountPrice * 5) + "<br>";
            }
            order.innerHTML += item.value + "  € " + price + "<br>";
        }
    }
    function displayAmount(_event) {
        let progress = document.querySelector("progress");
        let amount = _event.target.value;
        progress.value = parseFloat(amount);
    }
})(L03_Cocktailbar || (L03_Cocktailbar = {}));
//# sourceMappingURL=CocktailBar.js.map