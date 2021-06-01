"use strict";
var L10_1_OldMacDonalsHeritage;
(function (L10_1_OldMacDonalsHeritage) {
    class Cat extends L10_1_OldMacDonalsHeritage.Animal {
        constructor(_species, _myName, _favFood, _sound, _eaten) {
            super(_species, _myName, _favFood, _sound, _eaten);
            //console.log("CowConstructor");
            this.special = "to catch mice ";
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
            L10_1_OldMacDonalsHeritage.crc2d.strokeText("Old Mac Donald had a farm", 665, 10);
            L10_1_OldMacDonalsHeritage.crc2d.restore();
            L10_1_OldMacDonalsHeritage.crc2d.save();
            L10_1_OldMacDonalsHeritage.crc2d.font = "12px Arial";
            L10_1_OldMacDonalsHeritage.crc2d.strokeText("Ee i ee i o", 665, 25);
            L10_1_OldMacDonalsHeritage.crc2d.restore();
            L10_1_OldMacDonalsHeritage.crc2d.save();
            L10_1_OldMacDonalsHeritage.crc2d.font = "12px Arial";
            L10_1_OldMacDonalsHeritage.crc2d.strokeText("And on his farm he had some " + this.species + "s", 665, 40);
            L10_1_OldMacDonalsHeritage.crc2d.restore();
            L10_1_OldMacDonalsHeritage.crc2d.save();
            L10_1_OldMacDonalsHeritage.crc2d.font = "12px Arial";
            L10_1_OldMacDonalsHeritage.crc2d.strokeText("Ee i ee i o", 665, 55);
            L10_1_OldMacDonalsHeritage.crc2d.restore();
            L10_1_OldMacDonalsHeritage.crc2d.save();
            L10_1_OldMacDonalsHeritage.crc2d.font = "12px Arial";
            L10_1_OldMacDonalsHeritage.crc2d.strokeText("With a " + this.sound + " " + this.sound + " here and a " + this.sound + " " + this.sound + " there", 665, 70);
            L10_1_OldMacDonalsHeritage.crc2d.restore();
            L10_1_OldMacDonalsHeritage.crc2d.save();
            L10_1_OldMacDonalsHeritage.crc2d.font = "12px Arial";
            L10_1_OldMacDonalsHeritage.crc2d.strokeText("Here a " + this.sound + " there a " + this.sound + "Everywhere a " + this.sound + "" + this.sound, 665, 85);
            L10_1_OldMacDonalsHeritage.crc2d.restore();
            L10_1_OldMacDonalsHeritage.crc2d.save();
            L10_1_OldMacDonalsHeritage.crc2d.font = "12px Arial";
            L10_1_OldMacDonalsHeritage.crc2d.strokeText("Old Mac Donald had a farm ", 665, 100);
            L10_1_OldMacDonalsHeritage.crc2d.restore();
            L10_1_OldMacDonalsHeritage.crc2d.save();
            L10_1_OldMacDonalsHeritage.crc2d.font = "12px Arial";
            L10_1_OldMacDonalsHeritage.crc2d.strokeText("Ee i ee i o", 665, 115);
            L10_1_OldMacDonalsHeritage.crc2d.restore();
        }
        eaten() {
            let leftOverFish = 0;
            leftOverFish = L10_1_OldMacDonalsHeritage.totalAmountFish - this.ate;
            L10_1_OldMacDonalsHeritage.totalAmountFish = leftOverFish;
            console.log("Hello, my Name is " + this.myName + ". I am a " + this.species + " and I ate " + this.ate + " kg of " + this.favFood + " today. That means " + leftOverFish + " kg are left.");
            //leftOver = 0;
            //Canvas
            L10_1_OldMacDonalsHeritage.crc2d.save();
            L10_1_OldMacDonalsHeritage.crc2d.font = "12px Arial";
            L10_1_OldMacDonalsHeritage.crc2d.strokeText("Hello, my Name is " + this.myName + ". I am a " + this.species + " and I ate " + this.ate + " kg of " + this.favFood + " today. That means " + leftOverFish + " kg are left.", 600, 135);
            L10_1_OldMacDonalsHeritage.crc2d.restore();
        }
        doSpecialAction() {
            console.log("My special action is  " + this.special);
            //Canvas
            L10_1_OldMacDonalsHeritage.crc2d.save();
            L10_1_OldMacDonalsHeritage.crc2d.font = "12px Arial";
            L10_1_OldMacDonalsHeritage.crc2d.strokeText("My special Action is " + this.special, 600, 155);
            L10_1_OldMacDonalsHeritage.crc2d.restore();
        }
        draw() {
            L10_1_OldMacDonalsHeritage.drawCat();
        }
    }
    L10_1_OldMacDonalsHeritage.Cat = Cat;
})(L10_1_OldMacDonalsHeritage || (L10_1_OldMacDonalsHeritage = {}));
//# sourceMappingURL=Cat.js.map