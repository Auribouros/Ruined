async function save(){
    //Creating the object "save", used to store all important info inside
    var save = {
        cookies: cookies,
        clickPower: clickPower,
        allUpgrades: allUpgrades,
        allBuildings: allBuildings
    }
    localStorage.setItem("save",JSON.stringify(save)); 
    document.getElementById("title").innerHTML = "Game Saved !";
    await sleep(1000);
    document.getElementById("title").innerHTML = "Incremental";
}

function load(){
    var savedGame = JSON.parse(localStorage.getItem("save")); 
    if (typeof savedGame.cookies !== "undefined") cookies = savedGame.cookies;
    if (typeof savedGame.clickPower !== "undefined") clickPower = savedGame.clickPower;
    if (typeof savedGame.allUpgrades !== "undefined") allUpgrades = savedGame.allUpgrades;
    if (typeof savedGame.allBuildings !== "undefined") allBuildings = savedGame.allBuildings;
    update();
}

function update(){
    //Update cookie count and click power
    document.getElementById("cookieCount").innerHTML = prettify(cookies);
    //Update buildings
    for(i=0;i<=allBuildings.length-1;i++){
        allBuildings[i]=new Building(allBuildings[i].bulId,allBuildings[i].bulName,allBuildings[i].bulDesc,allBuildings[i].bulCost,allBuildings[i].bulBaseCost,allBuildings[i].bulCount);
        document.getElementById(allBuildings[i].getId()+'Count').innerHTML = allBuildings[i].getCount();
        document.getElementById(allBuildings[i].getId()+'Cost').innerHTML = allBuildings[i].getCost();
    }
    //Update upgrades
    for(i=0;i<=allUpgrades.length-1;i++){
        allUpgrades[i]=new Upgrade(allUpgrades[i].upgId,allUpgrades[i].upgName,allUpgrades[i].upgDesc,allUpgrades[i].upgCost,allUpgrades[i].upgSold);
        if(allUpgrades[i].isSold()){
            allUpgrades[i].upgBought();
        }
    }

}

function deleteSave(){
    localStorage.removeItem("save");
}

window.setInterval(function(){

    save();

}, 300000)