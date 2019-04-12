function Upgrade(id,name,desc,cost,sold=false){
    this.upgId = id;
    this.upgName = name;
    this.upgDesc = desc;
    this.upgCost = cost;
    this.upgSold = sold;

    this.isSold = function(){
        return this.upgSold;
    }
    this.upgBought = function(){
        this.upgSold = true;
        remove(this.upgId);
    }
    this.getName = function(){
        return this.upgName;
    }
    this.getDesc = function(){
        return this.upgDesc;
    }
    this.getCost = function(){
        return this.upgCost;
    }
}

var upgDefault = new Upgrade("default","Upgrade Name","Upgrade Description</br></br></br>","?");
var upgClickOne = new Upgrade("upgClickOne","Click Upgrade I","Stronger mouse for stronger clicks</br>",50);
var upgClickTwo = new Upgrade("upgClickTwo","Click Upgrade II","Best mouse</br>",500);
var upgClickThree = new Upgrade("upgClickThree","Click Upgrade III","Bestest</br>",5000);

var allUpgrades = [
    upgDefault,
    upgClickOne,
    upgClickTwo,
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