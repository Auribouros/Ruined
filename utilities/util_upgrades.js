function updateUpgDesc(arrayPos) {
    document.getElementById("upgName").innerHTML = allUpgrades[arrayPos].getName();
    document.getElementById("upgDesc").innerHTML = allUpgrades[arrayPos].getDesc() + "</br></br>";
    document.getElementById("upgCost").innerHTML = allUpgrades[arrayPos].getCost();
}

function upgBuy(arrayPosition) {
    if (cookies >= allUpgrades[arrayPosition].getCost()) {
        switch(allUpgrades[arrayPosition].getType()) {
            case "upgClick":
                clickPower *= 2;
                cookies -= allUpgrades[arrayPosition].getCost();
                allUpgrades[arrayPosition].upgBought();
                updateUpgDesc(upgDefault);
                addCookie(0);
                break;
            case "upgBuildingOne":
                allBuildings[0].setIncome(allBuildings[0].getIncome() * 2);
                cookies -= allUpgrades[arrayPosition].getCost();
                allUpgrades[arrayPosition].upgBought();
                updateUpgDesc(upgDefault);
                addCookie(0);
                break;
            default :
                alert("This is not supposed to happen, please contact the developer");
                break;
        }      

    }
}
