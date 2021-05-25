"use strict";
var L09_MyFarm;
(function (L09_MyFarm) {
    class Animal {
        constructor(_species, _myName, _favFood, _sound, _eaten) {
            this.species = _species;
            this.myName = _myName;
            this.favFood = _favFood;
            this.sound = _sound;
            this.ate = _eaten;
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
            let leftOver = 0;
            switch (this.favFood) {
                case "grass":
                    leftOver = L09_MyFarm.totalAmountGras - this.ate;
                    L09_MyFarm.totalAmountGras = leftOver;
                    break;
                case "fish":
                    leftOver = L09_MyFarm.totalAmountFish - this.ate;
                    L09_MyFarm.totalAmountFish = leftOver;
                    break;
                case "meat":
                    leftOver = L09_MyFarm.totalAmountMeat - this.ate;
                    L09_MyFarm.totalAmountMeat = leftOver;
                    break;
                case "junk":
                    leftOver = L09_MyFarm.totalAmountJunk - this.ate;
                    L09_MyFarm.totalAmountJunk = leftOver;
                    break;
                case "grains":
                    leftOver = L09_MyFarm.totalAmountGrain - this.ate;
                    L09_MyFarm.totalAmountGrain = leftOver;
                    break;
                default:
                    console.log("something is wrong");
            }
            console.log("Hello, my Name is " + this.myName + ". I am a " + this.species + " and I ate " + this.ate + " kg of " + this.favFood + " today. That means " + leftOver + " kg are left.");
            leftOver = 0;
        }
    }
    L09_MyFarm.Animal = Animal;
})(L09_MyFarm || (L09_MyFarm = {}));
//# sourceMappingURL=Animal.js.map