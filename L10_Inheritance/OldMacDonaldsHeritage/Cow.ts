namespace L10_1_OldMacDonalsHeritage {
    export class Cow extends Animal {
        special: string;

        constructor(_species: string, _myName: string, _favFood: string, _sound: string, _eaten: number) {
            super(_species, _myName, _favFood, _sound, _eaten);
            //console.log("CowConstructor");
            this.special = " to give you milk";
            
        }
        sing(): void {
        //Console
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
        crc2d.strokeText("Old Mac Donald had a farm",   120, 10);
        crc2d.restore();
        crc2d.save();
        crc2d.font = "12px Arial";
        crc2d.strokeText("Ee i ee i o", 120, 25);
        crc2d.restore();
        crc2d.save();
        crc2d.font = "12px Arial";
        crc2d.strokeText("And on his farm he had some " +  this.species + "s", 120, 40);
        crc2d.restore();
        crc2d.save();
        crc2d.font = "12px Arial";
        crc2d.strokeText("Ee i ee i o", 120, 55);
        crc2d.restore();
        crc2d.save();
        crc2d.font = "12px Arial";
        crc2d.strokeText("With a " + this.sound + " " + this.sound + " here and a " + this.sound + " " + this.sound + " there", 120, 70);
        crc2d.restore();
        crc2d.save();
        crc2d.font = "12px Arial";
        crc2d.strokeText("Here a " + this.sound + " there a " + this.sound + "Everywhere a " + this.sound + "" + this.sound, 120, 85);
        crc2d.restore();
        crc2d.save();
        crc2d.font = "12px Arial";
        crc2d.strokeText("Old Mac Donald had a farm ", 120, 100);
        crc2d.restore();
        crc2d.save();
        crc2d.font = "12px Arial";
        crc2d.strokeText("Ee i ee i o", 120, 115);
        crc2d.restore();
        }

        eaten(): void {
            //Console
            let leftOverGrass: number = 0;
            leftOverGrass = totalAmountGras - this.ate;
            totalAmountGras = leftOverGrass;
            console.log("Hello, my Name is " + this.myName + ". I am a " + this.species + " and I ate " + this.ate + " kg of " + this.favFood + " today. That means " + leftOverGrass + " kg are left.");
            //leftOver = 0; 

            //Canvas
            crc2d.save();
            crc2d.font = "12px Arial";
            crc2d.strokeText("Hello, my Name is " + this.myName + ". I am a " + this.species + " and I ate " + this.ate + " kg of " + this.favFood + " today. That means " + leftOverGrass + " kg are left.", 50, 135);
            crc2d.restore();
        }
        doSpecialAction(): void {
            //Console
            console.log("My special Action is " + this.special);  

            //Canvas
            crc2d.save();
            crc2d.font = "12px Arial";
            crc2d.strokeText("My special Action is " + this.special, 50, 155);
            crc2d.restore();
        }

        draw(): void {
            drawCow();
        }
        
    }
}