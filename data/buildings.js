/*
Constructor used to create a Building object to use later, said object composed of:
bulId : The ID of the building, often related to the HTML div that will use it
bulName : The name of the building, used for future display in the HTML
bulDesc : A short description of the building, might be used in the HTML, useless for now
bulCost : The cost of the building, evolving with each building bought, depends on baseCost and is initialized at 0
bulBaseCost : The base cost of the building, set for each building, initialized at 0
bulCount : The number of buildings of this type bought
getXX() : Functions to get different attributes of a Building object
setCost(newCost) : Function used to change the price of the building when it is bought
bulBought() : Adds 1 to the number of bought buildings of this type 
*/
function Building(id, name, desc, cost = 0, baseCost = 0, count = 0) {
    this.bulId = id;
    this.bulName = name;
    this.bulDesc = desc;
    this.bulCost = cost;
    this.bulBaseCost = baseCost;
    this.bulCount = count;

    this.getId = function () {
        return this.bulId;
    }
    this.getName = function () {
        return this.bulName;
    }
    this.getDesc = function () {
        return this.bulDesc;
    }
    this.getCost = function () {
        return this.bulCost;
    }
    this.setCost = function (newCost) {
        this.bulCost = newCost;
    }
    this.getBaseCost = function () {
        return this.bulBaseCost;
    }
    this.getCount = function () {
        return this.bulCount;
    }
    this.bulBought = function () {
        this.bulCount += 1;
    }
}

//Here we declare all Building objects the game holds
var buildingOne = new Building('buildingOne', 'Church', 'Haha yes', 10, 10);
var buildingTwo = new Building('buildingTwo', 'Monastery', 'Hm yes', 100, 100);
var buildingThree = new Building('buildingThree', 'wah', 'Oh no', 1000, 1000);

//Here we set all Building objects created before into the allBuildings array, making building purchasing and saving way easier
var allBuildings = [
    buildingOne,
    buildingTwo,
    buildingThree
]