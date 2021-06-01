namespace L10_1_OldMacDonalsHeritage  {
    window.addEventListener("load", handleLoad);
    
    export let totalAmountGras: number = 500;
    export let totalAmountGrain: number = 100;
    export let totalAmountFish: number = 20;
    export let totalAmountMeat: number = 20;
    export let totalAmountJunk: number = 50;

    let animalNames: string [] = ["Biscuit", "Charlie", "Coco", "Sam", "Sandy", "Sky", "Waffles", "Max", "Nicky", "Danny", "Dobby", "Lucky", "Moonpie", "Peanut", "Sunny"];

    interface FarmAnimal {
        species: string;
        name: string;
        food: string;
        sound: string;
        eaten: number;
    }
    let allAnimals: FarmAnimal[] = [
        {
            species: "Cow",
            name: animalNames[createRandomNum(0, 14)],
            food: "grass",
            sound: "moo",
            eaten: createRandomNum(1, 50)
        },
        {
            species: "Cat",
            name: animalNames[createRandomNum(0, 14)],
            food: "fish",
            sound: "mewo",
            eaten: createRandomNum(1, 10)
        },
        {
            species: "Dog",
            name: animalNames[createRandomNum(0, 14)],
            food: "meat",
            sound: "woof",
            eaten: createRandomNum(1, 10)
        },
        {
            species: "Pig",
            name: animalNames[createRandomNum(0, 14)],
            food: "junk",
            sound: "oink",
            eaten: createRandomNum(1, 20)
        },
        {
            species: "Goat",
            name: animalNames[createRandomNum(0, 14)],
            food: "grass",
            sound: "maaeh",
            eaten: createRandomNum(1, 20)
        },
        {
            species: "Chicken",
            name: animalNames[createRandomNum(0, 14)],
            food: "grains",
            sound: "goawk",
            eaten: createRandomNum(1, 10)
        },
        {
            species: "Donkey",
            name: animalNames[createRandomNum(0, 14)],
            food: "grass",
            sound: "ih-ah",
            eaten: createRandomNum(1, 50)
        }, 
        {
            species: "Duck",
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
    
            animal.sing();
            animal.eaten();
            switch (allAnimals[i].species) {
                case "Cow":
                    let cow: Cow = new Cow(allAnimals[i].species, allAnimals[i].name, allAnimals[i].food, allAnimals[i].sound, allAnimals[i].eaten);
                    //cow.sing();
                    //cow.eaten();
                    cow.doSpecialAction();
                case "Cat":
                    let cat: Cat = new Cat(allAnimals[i].species, allAnimals[i].name, allAnimals[i].food, allAnimals[i].sound, allAnimals[i].eaten);
                    cat.sing();
                    cat.eaten();
                    cat.doSpecialAction();
            }
       }

        let btn: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#btn");
        btn.addEventListener("click", handleLoad);
    }
   
    function createRandomNum(_min: number, _max: number): number {
        return  Math.floor(Math.random() * (_max - _min + 1) + _min);
    } 
}