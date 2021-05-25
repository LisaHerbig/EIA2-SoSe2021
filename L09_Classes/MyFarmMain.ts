namespace L09_MyFarm {
    window.addEventListener("load", handleLoad);
    

    export let totalAmountGras: number = 500;
    export let totalAmountGrain: number = 100;
    export let totalAmountFish: number = 20;
    export let totalAmountMeat: number = 20;
    export let totalAmountJunk: number = 50;

    let animalNames: string [] = ["Biscuit", "Charlie", "Coco", "Sam", "Sandy", "Sky", "Waffles", "Max", "Nicky", "Danny", "Dobby", "Lucky", "Moonpie", "Peanut", "Sunny"];
    //let animalSounds: string [] = ["moo", "meow", "woof", "oink", "maa", "goawk", "ih-ah", "quak"];

    interface FarmAnimal {
        species: string;
        name: string;
        food: string;
        sound: string;
        eaten: number;
    }
    let allAnimals: FarmAnimal[] = [
        {
            species: "cow",
            name: animalNames[createRandomNum(0, 14)],
            food: "grass",
            sound: "moo",
            eaten: createRandomNum(1, 50)
        },
        {
            species: "cat",
            name: animalNames[createRandomNum(0, 14)],
            food: "fish",
            sound: "mewo",
            eaten: createRandomNum(1, 10)
        },
        {
            species: "dog",
            name: animalNames[createRandomNum(0, 14)],
            food: "meat",
            sound: "woof",
            eaten: createRandomNum(1, 10)
        },
        {
            species: "pig",
            name: animalNames[createRandomNum(0, 14)],
            food: "junk",
            sound: "oink",
            eaten: createRandomNum(1, 20)
        },
        {
            species: "goat",
            name: animalNames[createRandomNum(0, 14)],
            food: "grass",
            sound: "maaeh",
            eaten: createRandomNum(1, 20)
        },
        {
            species: "chicken",
            name: animalNames[createRandomNum(0, 14)],
            food: "grains",
            sound: "goawk",
            eaten: createRandomNum(1, 10)
        },
        {
            species: "donkey",
            name: animalNames[createRandomNum(0, 14)],
            food: "grass",
            sound: "ih-ah",
            eaten: createRandomNum(1, 50)
        }, 
        {
            species: "duck",
            name: animalNames[createRandomNum(0, 14)],
            food: "grains",
            sound: "quack",
            eaten: createRandomNum(1, 10)
        }
    ];


    function handleLoad(): void {
        console.log("Day over"); 
        
        for (let i: number = 0; i < allAnimals.length; i ++) {
            let animal: Animal = new Animal(allAnimals[i].species, allAnimals[i].name, allAnimals[i].food, allAnimals[i].sound, allAnimals[i].eaten);
    
            //animal.current(allAnimals[i].species, allAnimals[i].name, allAnimals[i].food, allAnimals[i].sound, allAnimals[i].eaten);
           
            animal.sing();

            //let eatenFood: number = createRandomNum(14, 15) / createRandomNum(2, 10);
            animal.eaten();
       }

        let btn: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#btn");
        btn.addEventListener("click", handleLoad);
    }
   
    function createRandomNum(_min: number, _max: number): number {
        //let min: number = 5;
        //let max: number = 15;
        return  Math.floor(Math.random() * (_max - _min + 1) + _min);
        //return maxAmount;
    }

    //function handleClick(): void {

        //for (let i: number = 0; i < allAnimals.length; i ++) {
            //let animal: Animal = new Animal();
    
            //animal.current(allAnimals[i].species, allAnimals[i].name, allAnimals[i].food, allAnimals[i].sound, allAnimals[i].eaten);
           
            //animal.sing();

            //let eatenFood: number = createRandomNum(14, 15) / createRandomNum(2, 10);
           // animal.eaten();
       //}
        
    //}
 
    
}