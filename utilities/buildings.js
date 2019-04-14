function buyBuilding(arrayPos) {
    allBuildings[arrayPos].setCost((Math.floor(allBuildings[arrayPos].getBaseCost() * Math.pow(1.1, allBuildings[arrayPos].getCount()))));
    if (cookies >= allBuildings[arrayPos].getCost()) {
        allBuildings[arrayPos].bulBought();
        cookies -= allBuildings[arrayPos].getCost();
        document.getElementById(allBuildings[arrayPos].getId() + 'Count').innerHTML = magnify(allBuildings[arrayPos].getCount());
        document.getElementById('cookieCount').innerHTML = cookies;
        addCookie(0);
    }
    allBuildings[arrayPos].setCost(Math.floor(allBuildings[arrayPos].getBaseCost() * Math.pow(1.1, allBuildings[arrayPos].getCount())));
    document.getElementById(allBuildings[arrayPos].getId() + 'Cost').innerHTML = magnify(allBuildings[arrayPos].getCost());
    addCookie(0);
}

function getTotalIncome() {
    let income = 0;
    for(i = 0; i <= allBuildings.length - 1; i++){
        income += allBuildings[i].getIncome()*allBuildings[i].getCount();
    }
    return income;
}

window.setInterval(function () {

    addCookie(1 * allBuildings[0].getCount());

}, 10000);

window.setInterval(function () {

    addCookie(1 * allBuildings[1].getCount());

}, 1000);