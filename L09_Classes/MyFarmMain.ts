namespace L09_MyFarm {
    window.addEventListener("load", handleLoad);

    let maxAmount: number = 0;
    let animalNames: string [] = ["Biscuit", "Charlie", "Coco", "Sam", "Sandy", "Sky", "Waffles", "Max", "Nicky", "Danny", "Dobby", "Lucky", "Moonpie", "Peanut", "Sunny"];
    //let animalSounds: string [] = ["moo", "meow", "woof", "oink", "maa", "goawk", "ih-ah", "quak"];

    interface FarmAnimal {
        species: string;
        name: string;
        food: string;
        sound: string;
    }
    let allAnimals: FarmAnimal[] = [
        {
            species: "cow",
            name: animalNames[createRandomNum(0, 14)],
            food: "grass",
            sound: "moo"
        },
        {
            species: "cat",
            name: animalNames[createRandomNum(0, 14)],
            food: "fish",
            sound: "mewo"
        },
        {
            species: "dog",
            name: animalNames[createRandomNum(0, 14)],
            food: "meat",
            sound: "woof"
        },
        {
            species: "pig",
            name: animalNames[createRandomNum(0, 14)],
            food: "junk",
            sound: "oink"
        },
        {
            species: "goat",
            name: animalNames[createRandomNum(0, 14)],
            food: "grass",
            sound: "maaeh"
        },
        {
            species: "chicken",
            name: animalNames[createRandomNum(0, 14)],
            food: "grains",
            sound: "goawk"
        },
        {
            species: "donkey",
            name: animalNames[createRandomNum(0, 14)],
            food: "grass",
            sound: "ih-ah"
        }, 
        {
            species: "duck",
            name: animalNames[createRandomNum(0, 14)],
            food: "grains",
            sound: "ih-ah"
        }
    ];
  

    function handleLoad(): void {
        console.log("Farmday over"); 
        
        for (let i: number = 0; i < allAnimals.length; i ++) {
            let animal: Animal = new Animal();
            //animal.species = allAnimals[i].species;
            //animal.myName = allAnimals[i].name;
            //animal.favFood = allAnimals[i].food;
            //animal.sound = allAnimals[i].sound;
            animal.currentAnimal(allAnimals[i].species, allAnimals[i].name, allAnimals[i].food, allAnimals[i].sound);
           
            animal.sing();
            let eatenFood: number = createRandomNum(2, 16) / createRandomNum(1, 15);
            animal.eaten(eatenFood.toFixed(2));
       }
    }

    function createRandomNum(_min: number, _max: number): number {
        //let min: number = 5;
        //let max: number = 15;
        maxAmount = Math.floor(Math.random() * (_max - _min + 1) + _min);
        return maxAmount;
    }

 
    
}