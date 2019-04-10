function updateUpgDesc(arrayPos){
    document.getElementById("upgName").innerHTML= allUpgrades[arrayPos].getName();
    document.getElementById("upgDesc").innerHTML= allUpgrades[arrayPos].getDesc();
    document.getElementById("upgCost").innerHTML= allUpgrades[arrayPos].getCost();
}

function upgClickBuy(arrayPosition){
    if(cookies>=allUpgrades[arrayPosition].getCost()){
        clickPower *= 2;
        cookies -= allUpgrades[arrayPosition].getCost();
        allUpgrades[arrayPosition].upgBought();
        updateUpgDesc(upgDefault);
        addCookie(0);
    }
}