async function save(){
    var save = {
        cookies: cookies,
        buildingOneCount: buildingOneCount
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
    update();
}

function update(){
    document.getElementById("cookieCount").innerHTML = prettify(cookies);
    document.getElementById('buildingOneCount').innerHTML = buildingOneCount;
    var nextCost = Math.floor(BASE_BUILDING_ONE_COST * Math.pow(1.1,buildingOneCount));
    document.getElementById('buildingOneCost').innerHTML = nextCost;    
}

function deleteSave(){
    localStorage.removeItem("save");
}

window.setInterval(function(){

    save();

}, 900000)