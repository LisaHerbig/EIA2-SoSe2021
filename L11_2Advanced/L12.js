"use strict";
var L12_Addition;
(function (L12_Addition) {
    let greets = [{ greet: "Hi" }, { greet: "Hallo" }, { greet: "Servus" }];
    let input = prompt("Lass dich grüßen!", "Gib hier eine Zahl ein");
    let greet = greets[Number(input)].greet;
    alert(greet);
    console.log("Done");
})(L12_Addition || (L12_Addition = {}));
//# sourceMappingURL=L12.js.map