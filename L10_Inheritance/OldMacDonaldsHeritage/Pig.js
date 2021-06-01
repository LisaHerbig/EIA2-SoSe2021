"use strict";
var L10_1_OldMacDonalsHeritage;
(function (L10_1_OldMacDonalsHeritage) {
    class Pig extends L10_1_OldMacDonalsHeritage.Animal {
        constructor(_species, _myName, _favFood, _sound, _eaten) {
            super(_species, _myName, _favFood, _sound, _eaten);
            //console.log("CowConstructor");
            this.special = " dancing ballet";
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
            L10_1_OldMacDonalsHeritage.crc2d.strokeText("Old Mac Donald had a farm", 665, 200);
            L10_1_OldMacDonalsHeritage.crc2d.restore();
            L10_1_OldMacDonalsHeritage.crc2d.save();
            L10_1_OldMacDonalsHeritage.crc2d.font = "12px Arial";
            L10_1_OldMacDonalsHeritage.crc2d.strokeText("Ee i ee i o", 665, 215);
            L10_1_OldMacDonalsHeritage.crc2d.restore();
            L10_1_OldMacDonalsHeritage.crc2d.save();
            L10_1_OldMacDonalsHeritage.crc2d.font = "12px Arial";
            L10_1_OldMacDonalsHeritage.crc2d.strokeText("And on his farm he had some " + this.species + "s", 665, 230);
            L10_1_OldMacDonalsHeritage.crc2d.restore();
            L10_1_OldMacDonalsHeritage.crc2d.save();
            L10_1_OldMacDonalsHeritage.crc2d.font = "12px Arial";
            L10_1_OldMacDonalsHeritage.crc2d.strokeText("Ee i ee i o", 665, 245);
            L10_1_OldMacDonalsHeritage.crc2d.restore();
            L10_1_OldMacDonalsHeritage.crc2d.save();
            L10_1_OldMacDonalsHeritage.crc2d.font = "12px Arial";
            L10_1_OldMacDonalsHeritage.crc2d.strokeText("With a " + this.sound + " " + this.sound + " here and a " + this.sound + " " + this.sound + " there", 665, 260);
            L10_1_OldMacDonalsHeritage.crc2d.restore();
            L10_1_OldMacDonalsHeritage.crc2d.save();
            L10_1_OldMacDonalsHeritage.crc2d.font = "12px Arial";
            L10_1_OldMacDonalsHeritage.crc2d.strokeText("Here a " + this.sound + " there a " + this.sound + "Everywhere a " + this.sound + "" + this.sound, 665, 275);
            L10_1_OldMacDonalsHeritage.crc2d.restore();
            L10_1_OldMacDonalsHeritage.crc2d.save();
            L10_1_OldMacDonalsHeritage.crc2d.font = "12px Arial";
            L10_1_OldMacDonalsHeritage.crc2d.strokeText("Old Mac Donald had a farm ", 665, 290);
            L10_1_OldMacDonalsHeritage.crc2d.restore();
            L10_1_OldMacDonalsHeritage.crc2d.save();
            L10_1_OldMacDonalsHeritage.crc2d.font = "12px Arial";
            L10_1_OldMacDonalsHeritage.crc2d.strokeText("Ee i ee i o", 665, 305);
            L10_1_OldMacDonalsHeritage.crc2d.restore();
        }
        eaten() {
            let leftOverJunk = 0;
            leftOverJunk = L10_1_OldMacDonalsHeritage.totalAmountJunk - this.ate;
            L10_1_OldMacDonalsHeritage.totalAmountJunk = leftOverJunk;
            console.log("Hello, my Name is " + this.myName + ". I am a " + this.species + " and I ate " + this.ate + " kg of " + this.favFood + " today. That means " + leftOverJunk + " kg are left.");
            //leftOver = 0; 
            //Canvas
            L10_1_OldMacDonalsHeritage.crc2d.save();
            L10_1_OldMacDonalsHeritage.crc2d.font = "12px Arial";
            L10_1_OldMacDonalsHeritage.crc2d.strokeText("Hello, my Name is " + this.myName + ". I am a " + this.species + " and I ate " + this.ate + " kg of " + this.favFood + " today. That means " + leftOverJunk + " kg are left.", 600, 320);
            L10_1_OldMacDonalsHeritage.crc2d.restore();
        }
        doSpecialAction() {
            console.log("My special Action is " + this.special);
            //Canvas
            L10_1_OldMacDonalsHeritage.crc2d.save();
            L10_1_OldMacDonalsHeritage.crc2d.font = "12px Arial";
            L10_1_OldMacDonalsHeritage.crc2d.strokeText("My special Action is " + this.special, 600, 335);
            L10_1_OldMacDonalsHeritage.crc2d.restore();
        }
        draw() {
            L10_1_OldMacDonalsHeritage.drawPig();
        }
    }
    L10_1_OldMacDonalsHeritage.Pig = Pig;
})(L10_1_OldMacDonalsHeritage || (L10_1_OldMacDonalsHeritage = {}));
//# sourceMappingURL=Pig.js.map