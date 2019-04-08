async function save(){
    var save = {
        cookies: cookies,
        buildingOneCount: buildingOneCount,
        buildingTwoCount: buildingTwoCount
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
    update();
}

function update(){
    document.getElementById("cookieCount").innerHTML = prettify(cookies);
    document.getElementById('buildingOneCount').innerHTML = magnify(buildingOneCount);
    var nextCost = Math.floor(BASE_BUILDING_ONE_COST * Math.pow(1.1,buildingOneCount));
    document.getElementById('buildingOneCost').innerHTML = magnify(nextCost);
    document.getElementById('buildingTwoCount').innerHTML = magnify(buildingTwoCount);
    var nextCost = Math.floor(BASE_BUILDING_TWO_COST * Math.pow(1.1,buildingTwoCount));
    document.getElementById('buildingTwoCost').innerHTML = magnify(nextCost);
}

function deleteSave(){
    localStorage.removeItem("save");
}

window.setInterval(function(){

    save();

}, 300000)