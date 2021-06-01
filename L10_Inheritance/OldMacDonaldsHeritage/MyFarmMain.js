"use strict";
var L10_1_OldMacDonalsHeritage;
(function (L10_1_OldMacDonalsHeritage) {
    window.addEventListener("load", handleLoad);
    L10_1_OldMacDonalsHeritage.totalAmountGras = 500;
    L10_1_OldMacDonalsHeritage.totalAmountGrain = 100;
    L10_1_OldMacDonalsHeritage.totalAmountFish = 20;
    L10_1_OldMacDonalsHeritage.totalAmountMeat = 20;
    L10_1_OldMacDonalsHeritage.totalAmountJunk = 50;
    let animalNames = ["Biscuit", "Charlie", "Coco", "Sam", "Sandy", "Sky", "Waffles", "Max", "Nicky", "Danny", "Dobby", "Lucky", "Moonpie", "Peanut", "Sunny"];
    let allAnimals = [
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
    function handleLoad() {
        console.log("Day over");
        for (let i = 0; i < allAnimals.length; i++) {
            //let animal: Animal = new Animal(allAnimals[i].species, allAnimals[i].name, allAnimals[i].food, allAnimals[i].sound, allAnimals[i].eaten);
            //animal.sing();
            //animal.eaten();
            switch (allAnimals[i].species) {
                case "Cow":
                    let cow = new L10_1_OldMacDonalsHeritage.Cow(allAnimals[i].species, allAnimals[i].name, allAnimals[i].food, allAnimals[i].sound, allAnimals[i].eaten);
                    cow.sing();
                    cow.eaten();
                    cow.doSpecialAction();
                    break;
                case "Cat":
                    let cat = new L10_1_OldMacDonalsHeritage.Cat(allAnimals[i].species, allAnimals[i].name, allAnimals[i].food, allAnimals[i].sound, allAnimals[i].eaten);
                    cat.sing();
                    cat.eaten();
                    cat.doSpecialAction();
                    break;
                case "Dog":
                    let dog = new L10_1_OldMacDonalsHeritage.Dog(allAnimals[i].species, allAnimals[i].name, allAnimals[i].food, allAnimals[i].sound, allAnimals[i].eaten);
                    dog.sing();
                    dog.eaten();
                    dog.doSpecialAction();
                    break;
                case "Pig":
                    let pig = new L10_1_OldMacDonalsHeritage.Pig(allAnimals[i].species, allAnimals[i].name, allAnimals[i].food, allAnimals[i].sound, allAnimals[i].eaten);
                    pig.sing();
                    pig.eaten();
                    pig.doSpecialAction();
                    break;
                case "Goat":
                    let goat = new L10_1_OldMacDonalsHeritage.Goat(allAnimals[i].species, allAnimals[i].name, allAnimals[i].food, allAnimals[i].sound, allAnimals[i].eaten);
                    goat.sing();
                    goat.eaten();
                    goat.doSpecialAction();
                    break;
            }
        }
        let btn = document.querySelector("#btn");
        btn.addEventListener("click", handleLoad);
    }
    function createRandomNum(_min, _max) {
        return Math.floor(Math.random() * (_max - _min + 1) + _min);
    }
})(L10_1_OldMacDonalsHeritage || (L10_1_OldMacDonalsHeritage = {}));
//# sourceMappingURL=MyFarmMain.js.map