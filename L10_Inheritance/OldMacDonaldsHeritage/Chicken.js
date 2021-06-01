"use strict";
var L10_1_OldMacDonalsHeritage;
(function (L10_1_OldMacDonalsHeritage) {
    class Chicken extends L10_1_OldMacDonalsHeritage.Animal {
        constructor(_species, _myName, _favFood, _sound, _eaten) {
            super(_species, _myName, _favFood, _sound, _eaten);
            //console.log("CowConstructor");
            this.special = "to lay eggs ";
        }
        sing() {
            console.log("Old Mac Donald had a farm" + "\n"
                + "Ee i ee i o" + "\n"
                + "And on his farm he hand some " + this.species + "s" + "\n"
                + "Ee i ee i o" + "\n" +
                "With a " + this.sound + " " + this.sound + " here" + "\n" +
                "And a " + this.sound + " " + this.sound + " there" + "\n" +
                "Here a " + this.sound + " there a " + this.sound + "\n" +
                "Everywhere a " + this.sound + "" + this.sound + "\n" +
                "Old Mac Donald had a farm " + "\n" +
                "Ee i ee i o");
        }
        eaten() {
            let leftOverGrain = 0;
            leftOverGrain = L10_1_OldMacDonalsHeritage.totalAmountGrain - this.ate;
            L10_1_OldMacDonalsHeritage.totalAmountGrain = leftOverGrain;
            console.log("Hello, my Name is " + this.myName + ". I am a " + this.species + " and I ate " + this.ate + " kg of " + this.favFood + " today. That means " + leftOverGrain + " kg are left.");
            //leftOver = 0;
        }
        doSpecialAction() {
            console.log("My special action is  " + this.special);
        }
    }
    L10_1_OldMacDonalsHeritage.Chicken = Chicken;
})(L10_1_OldMacDonalsHeritage || (L10_1_OldMacDonalsHeritage = {}));
//# sourceMappingURL=Chicken.js.map