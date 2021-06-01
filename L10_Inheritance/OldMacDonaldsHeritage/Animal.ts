namespace L10_1_OldMacDonalsHeritage {
  export class Animal {
      species: string;
      myName: string;
      favFood: string;
      sound: string;
      ate: number;
     

      constructor(_species: string, _myName: string, _favFood: string, _sound: string, _eaten: number) {
        this.species = _species;
        this.myName = _myName;
        this.favFood = _favFood;
        this.sound = _sound;
        this.ate = _eaten;
      
      }

      sing(): void {
        /*console.log("Old Mac Donald had a farm" + "\n" 
        + "Ee i ee i o" + "\n" 
        + "And on his farm he hand some " + this.species + "s" + "\n"
        + "Ee i ee i o" + "\n" + 
        "With a " + this.sound + " " + this.sound + " here" + "\n" +
        "And a " + this.sound + " " + this.sound + " there" + "\n" +
        "Here a " + this.sound + " there a " + this.sound + "\n" +
        "Everywhere a " + this.sound + "" + this.sound + "\n" + 
        "Old Mac Donald had a farm " + "\n" + 
        "Ee i ee i o");*/
        //console.log("sings");
        
      }

  eaten(): void {
   /* let leftOver: number = 0;
    switch (this.favFood) {
          case "grass":
            leftOver = totalAmountGras - this.ate;
            totalAmountGras = leftOver;
            break;
          case "fish":
            leftOver = totalAmountFish - this.ate;
            totalAmountFish = leftOver;
            break;
          case "meat":
            leftOver = totalAmountMeat - this.ate;
            totalAmountMeat = leftOver;
            break;
          case "junk":
            leftOver = totalAmountJunk - this.ate;
            totalAmountJunk = leftOver;
            break;
          case "grains":
            leftOver = totalAmountGrain - this.ate;
            totalAmountGrain = leftOver;
            break;
          default:
          console.log("something is wrong");
    }
     
    console.log("Hello, my Name is " + this.myName + ". I am a " + this.species + " and I ate " + this.ate + " kg of " + this.favFood + " today. That means " + leftOver + " kg are left.");
    leftOver = 0; */  
  }


  }  
  
}