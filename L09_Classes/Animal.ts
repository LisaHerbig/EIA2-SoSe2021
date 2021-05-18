namespace L09_MyFarm {
  export class Animal {
      species: string;
      myName: string;
      favFood: string;
      sound: string;

      currentAnimal(_species: string, _myName: string, _favFood: string, _sound: string): void {
        this.species = _species;
        this.myName = _myName;
        this.favFood = _favFood;
        this.sound = _sound;
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

      eaten(_amount: string): void {
        console.log("Hello, my Name is " + this.myName + ". I am a " + this.species + " and I ate " + _amount + " kg of " + this.favFood + " today. Have a nice evening.");
        
      }


  }  
}