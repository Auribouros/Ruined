//Building one

function addBuildingOne(){
    buildingOneCost = Math.floor(BASE_BUILDING_ONE_COST * Math.pow(1.1,buildingOneCount));
    if(cookies>=buildingOneCost){
        buildingOneCount += 1;
        cookies -= buildingOneCost;
        document.getElementById('buildingOneCount').innerHTML = magnify(buildingOneCount);
        document.getElementById('cookieCount').innerHTML = cookies;
        addCookie(0);
    }
    var nextCost = Math.floor(BASE_BUILDING_ONE_COST * Math.pow(1.1,buildingOneCount));
    document.getElementById('buildingOneCost').innerHTML = magnify(nextCost);
    addCookie(0);
}

window.setInterval(function(){
	
	addCookie(1*buildingOneCount);
	
}, 10000);


//Building two

function addBuildingTwo(){
    buildingTwoCost = Math.floor(BASE_BUILDING_TWO_COST * Math.pow(1.1,buildingTwoCount));
    if(cookies>=buildingTwoCost){
        buildingTwoCount += 1;
        cookies -= buildingTwoCost;
        document.getElementById('buildingTwoCount').innerHTML = magnify(buildingTwoCount);
        document.getElementById('cookieCount').innerHTML = cookies;
        addCookie(0);
    }
    var nextCost = Math.floor(BASE_BUILDING_TWO_COST * Math.pow(1.1,buildingTwoCount));
    document.getElementById('buildingTwoCost').innerHTML = magnify(nextCost);
    addCookie(0);
}

window.setInterval(function(){

    addCookie(1*buildingTwoCount);

}, 1000);