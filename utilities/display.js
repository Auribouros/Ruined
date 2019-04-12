function displayStuff() {
    displayBuilding();
}

function displayBuilding() {
    var buildingButton;
    var buildingCost;
    var buildingCount;
    var attBuildingButton;
    var attBuildingCost;
    var attBuildingCount;
    var arrayPos = 0;
    var br = document.createElement("br");

    var buildings = document.getElementsByClassName("buildings");
    allBuildings.forEach(element => {
        //create a button to buy a building
        buildingButton = document.createElement("button");
        attBuildingButton = document.createAttribute("id");
        attBuildingButton.value = element.getId();
        buildingButton.setAttributeNode(attBuildingButton);
        attBuildingButton = document.createAttribute("onClick");
        attBuildingButton.value = "buyBuilding(" + arrayPos + ")";
        buildingButton.setAttributeNode(attBuildingButton);
        buildingButton.innerHTML = element.getName();
        //create a span to display the cost of the building
        buildingCost = document.createElement("span");
        attBuildingCost = document.createAttribute("id");
        attBuildingCost.value = element.getId() + "Cost";
        buildingCost.setAttributeNode(attBuildingCost);
        buildingCost.innerHTML = "10";
        //create a span to display the number of building bought
        buildingCount = document.createElement("span");
        attBuildingCount = document.createAttribute("id");
        attBuildingCount.value = element.getId() + "Count";
        buildingCount.setAttributeNode(attBuildingCount);
        buildingCount.innerHTML = "0";
        buildings[0].appendChild(buildingButton);
        buildings[0].innerHTML += "<BR> Buildings : ";
        buildings[0].appendChild(buildingCount);
        buildings[0].innerHTML += "<BR> Cost : ";
        buildings[0].appendChild(buildingCost);
        buildings[0].innerHTML += "<BR> <BR> ";
        arrayPos++;
    });
    /*
    buildingButton = document.createElement("button");
    buildingButton.value =   allBuildings.length;
    buildings[0].appendChild(buildingButton);
    */
}