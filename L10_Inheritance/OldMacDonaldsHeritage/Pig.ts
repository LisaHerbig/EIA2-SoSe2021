namespace L10_1_OldMacDonalsHeritage {
    export class Pig extends Animal {
        special: string;

        constructor(_species: string, _myName: string, _favFood: string, _sound: string, _eaten: number) {
            super(_species, _myName, _favFood, _sound, _eaten);
            //console.log("CowConstructor");
            this.special = " dancing ballet";
            
        }
        sing(): void {
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
        crc2d.save();
        crc2d.font = "12px Arial";
        crc2d.strokeText("Old Mac Donald had a farm",   665, 200);
        crc2d.restore();
        crc2d.save();
        crc2d.font = "12px Arial";
        crc2d.strokeText("Ee i ee i o", 665, 215);
        crc2d.restore();
        crc2d.save();
        crc2d.font = "12px Arial";
        crc2d.strokeText("And on his farm he had some " +  this.species + "s", 665, 230);
        crc2d.restore();
        crc2d.save();
        crc2d.font = "12px Arial";
        crc2d.strokeText("Ee i ee i o", 665, 245);
        crc2d.restore();
        crc2d.save();
        crc2d.font = "12px Arial";
        crc2d.strokeText("With a " + this.sound + " " + this.sound + " here and a " + this.sound + " " + this.sound + " there", 665, 260);
        crc2d.restore();
        crc2d.save();
        crc2d.font = "12px Arial";
        crc2d.strokeText("Here a " + this.sound + " there a " + this.sound + "Everywhere a " + this.sound + "" + this.sound, 665, 275);
        crc2d.restore();
        crc2d.save();
        crc2d.font = "12px Arial";
        crc2d.strokeText("Old Mac Donald had a farm ", 665, 290);
        crc2d.restore();
        crc2d.save();
        crc2d.font = "12px Arial";
        crc2d.strokeText("Ee i ee i o", 665, 305);
        crc2d.restore();
        }

        eaten(): void {
            let leftOverJunk: number = 0;
            leftOverJunk = totalAmountJunk - this.ate;
            totalAmountJunk = leftOverJunk;
            console.log("Hello, my Name is " + this.myName + ". I am a " + this.species + " and I ate " + this.ate + " kg of " + this.favFood + " today. That means " + leftOverJunk + " kg are left.");
            //leftOver = 0; 

            //Canvas
            crc2d.save();
            crc2d.font = "12px Arial";
            crc2d.strokeText("Hello, my Name is " + this.myName + ". I am a " + this.species + " and I ate " + this.ate + " kg of " + this.favFood + " today. That means " + leftOverJunk + " kg are left.", 600, 320);
            crc2d.restore();
        }
        doSpecialAction(): void {
            console.log("My special Action is " + this.special);

            
            //Canvas
            crc2d.save();
            crc2d.font = "12px Arial";
            crc2d.strokeText("My special Action is " + this.special, 600, 335);
            crc2d.restore();
            
        }

        draw(): void {
            drawPig();
        }
    }
}