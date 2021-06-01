namespace L10_1_OldMacDonalsHeritage {
    export class Cow extends Animal {
        special: string;

        constructor(_species: string, _myName: string, _favFood: string, _sound: string, _eaten: number) {
            super(_species, _myName, _favFood, _sound, _eaten);
            //console.log("CowConstructor");
            this.special = "I gave you milk";
            
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
        }

        eaten(): void {
            let leftOver: number;
            leftOver = totalAmountGras - this.ate;
            totalAmountGras = leftOver;
            console.log("Hello, my Name is " + this.myName + ". I am a " + this.species + " and I ate " + this.ate + " kg of " + this.favFood + " today. That means " + leftOver + " kg are left.");
            leftOver = 0; 
        }
        doSpecialAction(): void {
            console.log("I´m special because " + this.special);
            
        }
    }
}