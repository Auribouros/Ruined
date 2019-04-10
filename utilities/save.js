async function save(){
    var save = {
        cookies: cookies,
        clickPower: clickPower,
        buildingOneCount: buildingOneCount,
        buildingTwoCount: buildingTwoCount,
        allUpgrades: allUpgrades
    }
    localStorage.setItem("save",JSON.stringify(save)); 
    document.getElementById("title").innerHTML = "Game Saved !";
    await sleep(1000);
    document.getElementById("title").innerHTML = "Incremental";
}

function load(){
    var savedGame = JSON.parse(localStorage.getItem("save")); 
    if (typeof savedGame.cookies !== "undefined") cookies = savedGame.cookies;
    if (typeof savedGame.buildingOneCount !== "undefined") buildingOneCount = savedGame.buildingOneCount;
    if (typeof savedGame.buildingTwoCount !== "undefined") buildingTwoCount = savedGame.buildingTwoCount;
    if (typeof savedGame.clickPower !== "undefined") clickPower = savedGame.clickPower;
    if (typeof savedGame.allUpgrades !== "undefined") allUpgrades = savedGame.allUpgrades;
    update();
}

function update(){
    //Update cookie count and click power
    document.getElementById("cookieCount").innerHTML = prettify(cookies);
    //Update buildings
    document.getElementById('buildingOneCount').innerHTML = magnify(buildingOneCount);
    var nextCost = Math.floor(BASE_BUILDING_ONE_COST * Math.pow(1.1,buildingOneCount));
    document.getElementById('buildingOneCost').innerHTML = magnify(nextCost);
    document.getElementById('buildingTwoCount').innerHTML = magnify(buildingTwoCount);
    var nextCost = Math.floor(BASE_BUILDING_TWO_COST * Math.pow(1.1,buildingTwoCount));
    document.getElementById('buildingTwoCost').innerHTML = magnify(nextCost);
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