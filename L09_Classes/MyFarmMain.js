"use strict";
var L09_MyFarm;
(function (L09_MyFarm) {
    window.addEventListener("load", handleLoad);
    L09_MyFarm.totalAmountGras = 500;
    L09_MyFarm.totalAmountGrain = 100;
    L09_MyFarm.totalAmountFish = 20;
    L09_MyFarm.totalAmountMeat = 20;
    L09_MyFarm.totalAmountJunk = 50;
    let animalNames = ["Biscuit", "Charlie", "Coco", "Sam", "Sandy", "Sky", "Waffles", "Max", "Nicky", "Danny", "Dobby", "Lucky", "Moonpie", "Peanut", "Sunny"];
    let allAnimals = [
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
    function handleLoad() {
        console.log("Day over");
        for (let i = 0; i < allAnimals.length; i++) {
            let animal = new L09_MyFarm.Animal();
            animal.current(allAnimals[i].species, allAnimals[i].name, allAnimals[i].food, allAnimals[i].sound, allAnimals[i].eaten);
            animal.sing();
            //let eatenFood: number = createRandomNum(14, 15) / createRandomNum(2, 10);
            animal.eaten();
        }
        let btn = document.querySelector("#btn");
        btn.addEventListener("click", handleLoad);
    }
    function createRandomNum(_min, _max) {
        //let min: number = 5;
        //let max: number = 15;
        return Math.floor(Math.random() * (_max - _min + 1) + _min);
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
})(L09_MyFarm || (L09_MyFarm = {}));
//# sourceMappingURL=MyFarmMain.js.map