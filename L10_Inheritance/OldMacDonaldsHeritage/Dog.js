"use strict";
var L10_1_OldMacDonalsHeritage;
(function (L10_1_OldMacDonalsHeritage) {
    class Dog extends L10_1_OldMacDonalsHeritage.Animal {
        constructor(_species, _myName, _favFood, _sound, _eaten) {
            super(_species, _myName, _favFood, _sound, _eaten);
            //console.log("CowConstructor");
            this.special = "to evict intruders ";
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
            //On Canvas
            L10_1_OldMacDonalsHeritage.crc2d.save();
            L10_1_OldMacDonalsHeritage.crc2d.font = "12px Arial";
            L10_1_OldMacDonalsHeritage.crc2d.strokeText("Old Mac Donald had a farm", 120, 200);
            L10_1_OldMacDonalsHeritage.crc2d.restore();
            L10_1_OldMacDonalsHeritage.crc2d.save();
            L10_1_OldMacDonalsHeritage.crc2d.font = "12px Arial";
            L10_1_OldMacDonalsHeritage.crc2d.strokeText("Ee i ee i o", 120, 215);
            L10_1_OldMacDonalsHeritage.crc2d.restore();
            L10_1_OldMacDonalsHeritage.crc2d.save();
            L10_1_OldMacDonalsHeritage.crc2d.font = "12px Arial";
            L10_1_OldMacDonalsHeritage.crc2d.strokeText("And on his farm he had some " + this.species + "s", 120, 230);
            L10_1_OldMacDonalsHeritage.crc2d.restore();
            L10_1_OldMacDonalsHeritage.crc2d.save();
            L10_1_OldMacDonalsHeritage.crc2d.font = "12px Arial";
            L10_1_OldMacDonalsHeritage.crc2d.strokeText("Ee i ee i o", 120, 245);
            L10_1_OldMacDonalsHeritage.crc2d.restore();
            L10_1_OldMacDonalsHeritage.crc2d.save();
            L10_1_OldMacDonalsHeritage.crc2d.font = "12px Arial";
            L10_1_OldMacDonalsHeritage.crc2d.strokeText("With a " + this.sound + " " + this.sound + " here and a " + this.sound + " " + this.sound + " there", 120, 260);
            L10_1_OldMacDonalsHeritage.crc2d.restore();
            L10_1_OldMacDonalsHeritage.crc2d.save();
            L10_1_OldMacDonalsHeritage.crc2d.font = "12px Arial";
            L10_1_OldMacDonalsHeritage.crc2d.strokeText("Here a " + this.sound + " there a " + this.sound + "Everywhere a " + this.sound + "" + this.sound, 120, 275);
            L10_1_OldMacDonalsHeritage.crc2d.restore();
            L10_1_OldMacDonalsHeritage.crc2d.save();
            L10_1_OldMacDonalsHeritage.crc2d.font = "12px Arial";
            L10_1_OldMacDonalsHeritage.crc2d.strokeText("Old Mac Donald had a farm ", 120, 290);
            L10_1_OldMacDonalsHeritage.crc2d.restore();
            L10_1_OldMacDonalsHeritage.crc2d.save();
            L10_1_OldMacDonalsHeritage.crc2d.font = "12px Arial";
            L10_1_OldMacDonalsHeritage.crc2d.strokeText("Ee i ee i o", 120, 305);
            L10_1_OldMacDonalsHeritage.crc2d.restore();
        }
        eaten() {
            let leftOverMeat = 0;
            leftOverMeat = L10_1_OldMacDonalsHeritage.totalAmountFish - this.ate;
            L10_1_OldMacDonalsHeritage.totalAmountMeat = leftOverMeat;
            console.log("Hello, my Name is " + this.myName + ". I am a " + this.species + " and I ate " + this.ate + " kg of " + this.favFood + " today. That means " + leftOverMeat + " kg are left.");
            //leftOver = 0;
            //Canvas
            L10_1_OldMacDonalsHeritage.crc2d.save();
            L10_1_OldMacDonalsHeritage.crc2d.font = "12px Arial";
            L10_1_OldMacDonalsHeritage.crc2d.strokeText("Hello, my Name is " + this.myName + ". I am a " + this.species + " and I ate " + this.ate + " kg of " + this.favFood + " today. That means " + leftOverMeat + " kg are left.", 50, 320);
            L10_1_OldMacDonalsHeritage.crc2d.restore();
        }
        doSpecialAction() {
            console.log("My special action is  " + this.special);
            //Canvas
            L10_1_OldMacDonalsHeritage.crc2d.save();
            L10_1_OldMacDonalsHeritage.crc2d.font = "12px Arial";
            L10_1_OldMacDonalsHeritage.crc2d.strokeText("My special Action is " + this.special, 50, 335);
            L10_1_OldMacDonalsHeritage.crc2d.restore();
        }
        draw() {
            L10_1_OldMacDonalsHeritage.drawDog();
        }
    }
    L10_1_OldMacDonalsHeritage.Dog = Dog;
})(L10_1_OldMacDonalsHeritage || (L10_1_OldMacDonalsHeritage = {}));
//# sourceMappingURL=Dog.js.map