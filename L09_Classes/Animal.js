"use strict";
var L09_MyFarm;
(function (L09_MyFarm) {
    class Animal {
        current(_species, _myName, _favFood, _sound) {
            this.species = _species;
            this.myName = _myName;
            this.favFood = _favFood;
            this.sound = _sound;
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
        eaten(_amount, _totalAmount) {
            console.log("Hello, my Name is " + this.myName + ". I am a " + this.species + " and I ate " + parseInt(_amount) + " kg of " + this.favFood + " today. That means " + (_totalAmount - parseInt(_amount)) + " kg are left.");
        }
    }
    L09_MyFarm.Animal = Animal;
})(L09_MyFarm || (L09_MyFarm = {}));
//# sourceMappingURL=Animal.js.map