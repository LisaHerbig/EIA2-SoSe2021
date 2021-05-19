"use strict";
var L09_MyFarm;
(function (L09_MyFarm) {
    window.addEventListener("load", handleLoad);
    let totalAmount = 15;
    let animalNames = ["Biscuit", "Charlie", "Coco", "Sam", "Sandy", "Sky", "Waffles", "Max", "Nicky", "Danny", "Dobby", "Lucky", "Moonpie", "Peanut", "Sunny"];
    let allAnimals = [
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
            sound: "quack"
        }
    ];
    function handleLoad() {
        console.log("Farmday over");
        for (let i = 0; i < allAnimals.length; i++) {
            let animal = new L09_MyFarm.Animal();
            //animal.species = allAnimals[i].species;
            //animal.myName = allAnimals[i].name;
            //animal.favFood = allAnimals[i].food;
            //animal.sound = allAnimals[i].sound;
            animal.current(allAnimals[i].species, allAnimals[i].name, allAnimals[i].food, allAnimals[i].sound);
            animal.sing();
            let eatenFood = createRandomNum(14, 15) / createRandomNum(2, 10);
            animal.eaten(eatenFood.toFixed(2), totalAmount);
        }
    }
    function createRandomNum(_min, _max) {
        //let min: number = 5;
        //let max: number = 15;
        return Math.floor(Math.random() * (_max - _min + 1) + _min);
        //return maxAmount;
    }
})(L09_MyFarm || (L09_MyFarm = {}));
//# sourceMappingURL=MyFarmMain.js.map