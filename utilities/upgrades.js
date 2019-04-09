function updateUpgDesc(numb){
    document.getElementById("upgName").innerHTML= upgrades[numb][1];
    document.getElementById("upgDesc").innerHTML= upgrades[numb][2];
    document.getElementById("upgCost").innerHTML= upgrades[numb][3];
}

function upgClickOne(){
    if(cookies>=UPG_CLICK_ONE_COST){
        clickPower += 1;
        cookies -= UPG_CLICK_ONE_COST;
        remove("upgClickOne");
        updateUpgDesc(0);
        addCookie(0);
    }
}