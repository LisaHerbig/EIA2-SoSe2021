"use strict";
/*namespace L03_Cocktailbar {
    window.addEventListener("load", handleLoad);
    //let total: number = 0;

    function handleLoad(_event: Event): void {
        console.log("Start");
        let form: HTMLDivElement = <HTMLDivElement> document.querySelector("div#form");
        let slider: HTMLInputElement = <HTMLInputElement>document.querySelector("input#amount");

        form.addEventListener("change", handleChange);
        slider.addEventListener("input", displayAmount);
    }

    function handleChange(_event: Event): void {
        //console.log(_event);
        //let drink: HTMLSelectElement = <HTMLSelectElement> document.querySelector("select");
        //console.log(drink.value);

        //let inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll("input");
        //console.log(inputs);
        let order: HTMLDivElement = <HTMLDivElement>document.querySelector("div#order");
        order.innerHTML = "";

        let formData: FormData = new FormData(document.forms[0]);
        //console.log(formData);
        for (let entry of formData) {
            //console.log(entry);
            let item: HTMLInputElement = <HTMLInputElement>document.querySelector("[value='" + entry[1] + "']");
            //console.log(item);
            let price: number = Number(item.getAttribute("price"));

            //let total: number = 0;
           
            //console.log(price);
            //let drinkAmount: HTMLInputElement = <HTMLInputElement>document.querySelector("#amount");
            //let priceAmount: string = drinkAmount.value;
            //let amountPrice: number = parseFloat(priceAmount);
            //let literPrice: number = amountPrice * 5;
            
            //wenn 1L 5€ Kostet
            //console.log(amountPrice * 5);
            
            
    
            //if (item.value == priceAmount) {
               // price = literPrice;
           // }
            if (entry[0] == "Drink") {

            order.innerHTML +=  "Drink" + item.value + "  € " + price + "<br>";
           }
           else if (entry[0] == "Amount") {

            order.innerHTML += "Amount" + item.value + "  € " + /*Number(item.value) * price*/ +"<br>";
/*}
else {
 order.innerHTML += item.name + item.value + "  € " + price + "<br>";
 total += price;
}
 //console.log(price);
 //let finalPrice: string = (total += price).toFixed(2);
 //total += price;
 //console.log(finalPrice);
 
 
 
}


}

function displayAmount(_event: Event): void {
let progress: HTMLProgressElement = <HTMLProgressElement>document.querySelector("progress");
let amount: string = (<HTMLInputElement>_event.target).value;
progress.value = parseFloat(amount);
}
}*/ 
//# sourceMappingURL=CocktailBar.js.map