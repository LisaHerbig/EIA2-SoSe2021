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
        //console.log("sings"); 
      }

  eaten(): void {
  //Eats
  }
  draw(): void {
    //drawAnimal
  }


  }  
  
}