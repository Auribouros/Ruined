/*
Constructor used to create an Upgrade object to use later, said object composed of:
upgId : The ID of the building, often related to the HTML div that will use it
upgName : The name of the building, used for future display in the HTML
upgDesc : A short description of the building, used in the HTML
upgCost : The cost of the building, evolving with each building bought, depends on baseCost and is initialized at 0
upgSold : The state of the upgrade, boolean initialized at false
getXX() : Functions to get different attributes of a Building object
isSold() : Returns if the upgrade is sol or not, useful for load/save mechanisms
upgBought() : Marks the upgrade as "bought" and removes the div corresponding to it in the HTML
*/
function Upgrade(id, name, desc, cost, uType = "default", sold = false) {
    this.upgId = id;
    this.upgName = name;
    this.upgDesc = desc;
    this.upgCost = cost;
    this.upgType = uType;
    this.upgSold = sold;

    this.isSold = function () {
        return this.upgSold;
    }
    this.upgBought = function () {
        this.upgSold = true;
        remove(this.upgId);
    }
    this.getName = function () {
        return this.upgName;
    }
    this.getDesc = function () {
        return this.upgDesc;
    }
    this.getCost = function () {
        return this.upgCost;
    }
    this.getType = function () {
        return this.upgType;
    }
}

var upgDefault = new Upgrade("default", "Upgrade Name", "Upgrade Description", "?");
var upgClickOne = new Upgrade("upgClickOne", "Click Upgrade I", "Stronger mouse for stronger clicks", 50, "upgClick");
var upgClickTwo = new Upgrade("upgClickTwo", "Click Upgrade II", "Best mouse", 500, "upgClick");
var upgOneBuildingOne = new Upgrade("upgOneBuildingOne", "Church Upgrade I", "Placeholder Description", 50, "upgBuildingOne");
var upgClickThree = new Upgrade("upgClickThree", "Click Upgrade III", "Bestest", 5000, "upgClick");

var allUpgrades = [
    upgDefault,
    upgClickOne,
    upgClickTwo,
    upgOneBuildingOne,
    upgClickThree
];

/*
    [0,"Upgrade Name","Upgrade Description</br></br></br>","?"],
    [1,"Click Upgrade I","Stronger mouse for stronger clicks</br>","50"],
    [2,"Building I Upgrade I","More efficient building I</br>","250"],
    [3,"Click Upgrade II","Even stronger mouse</br>","500"],
    [4,"Click Upgrade III","Strongest mouse</br>","5000"],
    [5,"Building I Upgrade II","Add mechanical servos to speed up the process</br>","1500"],
    [6,"Building II Upgrade I","Time to automatize all this</br>","1500"],
    [7,"Click Upgrade IV","Using two mice can improve that clicking power</br>","50000"]
*/