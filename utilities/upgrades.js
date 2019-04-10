function updateUpgDesc(upgName){
    document.getElementById("upgName").innerHTML= upgName.getName();
    document.getElementById("upgDesc").innerHTML= upgName.getDesc();
    document.getElementById("upgCost").innerHTML= upgName.getCost();
}

function upgClickOneBuy(){
    if(cookies>=upgClickOne.getCost()){
        clickPower *= 2;
        cookies -= upgClickOne.getCost();
        upgClickOne.upgBought();
        updateUpgDesc(upgDefault);
        addCookie(0);
    }
}

function upgClickTwo(){
    if(cookies>=UPG_CLICK_TWO_COST){
        clickPower *= 2;
        cookies -= UPG_CLICK_TWO_COST;
        remove("upgClickTwo");
        updateUpgDesc(upgDefault);
        addCookie(0);
    }
}

function upgClickThree(){
    if(cookies>=UPG_CLICK_THREE_COST){
        clickPower *= 2;
        cookies -= UPG_CLICK_THREE_COST;
        remove("upgClickThree");
        updateUpgDesc(upgDefault);
        addCookie(0);
    }
}

function upgClickFour(){
    if(cookies>=UPG_CLICK_FOUR_COST){
        clickPower *= 2;
        cookies -= UPG_CLICK_FOUR_COST;
        remove("upgClickFour");
        updateUpgDesc(upgDefault);
        addCookie(0);
    }
}