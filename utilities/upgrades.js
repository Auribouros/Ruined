function updateUpgDesc(numb){
    document.getElementById("upgName").innerHTML= upgrades[numb][1];
    document.getElementById("upgDesc").innerHTML= upgrades[numb][2];
    document.getElementById("upgCost").innerHTML= upgrades[numb][3];
}

function upgClickOne(){
    if(cookies>=UPG_CLICK_ONE_COST){
        clickPower *= 2;
        cookies -= UPG_CLICK_ONE_COST;
        remove("upgClickOne");
        updateUpgDesc(0);
        addCookie(0);
    }
}

function upgClickTwo(){
    if(cookies>=UPG_CLICK_TWO_COST){
        clickPower *= 2;
        cookies -= UPG_CLICK_TWO_COST;
        remove("upgClickTwo");
        updateUpgDesc(0);
        addCookie(0);
    }
}

function upgClickThree(){
    if(cookies>=UPG_CLICK_THREE_COST){
        clickPower *= 2;
        cookies -= UPG_CLICK_THREE_COST;
        remove("upgClickThree");
        updateUpgDesc(0);
        addCookie(0);
    }
}

function upgClickFour(){
    if(cookies>=UPG_CLICK_FOUR_COST){
        clickPower *= 2;
        cookies -= UPG_CLICK_FOUR_COST;
        remove("upgClickFour");
        updateUpgDesc(0);
        addCookie(0);
    }
}