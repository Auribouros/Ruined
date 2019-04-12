function Building(id,name,desc,cost=0,baseCost=0,count=0){
    this.bulId = id;
    this.bulName = name;
    this.bulDesc = desc;
    this.bulCost = cost;
    this.bulBaseCost = baseCost;
    this.bulCount = count;

    this.getId = function(){
        return this.bulId;
    }
    this.getName = function(){
        return this.bulName;
    }
    this.getDesc = function(){
        return this.bulDesc;
    }
    this.getCost = function(){
        return this.bulCost;
    }
    this.setCost = function(newCost){
        this.bulCost = newCost;
    }
    this.getBaseCost = function(){
        return this.bulBaseCost;
    }
    this.getCount = function(){
        return this.bulCount;
    }
    this.bulBought = function(){
        this.bulCount += 1;
    }
}

var buildingDefault = new Building('PLACEHOLDER','PLACEHOLDER','PLACEHOLDER',0,0);
var buildingOne = new Building('buildingOne','Church','Haha yes',10,10);
var buildingTwo = new Building('buildingTwo','Monastery','Hm yes',100,100);
var buildingThree = new Building('buildingThree','wah','Oh no',1000,1000);

var allBuildings = [
    buildingDefault,
    buildingOne,
    buildingTwo,
    buildingThree
]