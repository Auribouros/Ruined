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
    var buildingContainer;
    var attBuildingContainer;
    var arrayPos = 0;
    var br = document.createElement("br");

    var buildings = document.getElementsByClassName("buildings");
    allBuildings.forEach(element => {
        buildingContainer = document.createElement("div");
        attBuildingContainer = document.createAttribute("class");
        attBuildingContainer.value = "buildingContainer";
        buildingContainer.setAttributeNode(attBuildingContainer);
        //Create a button to buy a building
        buildingButton = document.createElement("button");
        attBuildingButton = document.createAttribute("id");
        attBuildingButton.value = element.getId();
        buildingButton.setAttributeNode(attBuildingButton);
        attBuildingButton = document.createAttribute("onClick");
        attBuildingButton.value = "buyBuilding(" + arrayPos + ")";
        buildingButton.setAttributeNode(attBuildingButton);
        buildingButton.innerHTML = element.getName();
        //Create a span to display the cost of the building
        buildingCost = document.createElement("span");
        attBuildingCost = document.createAttribute("id");
        attBuildingCost.value = element.getId() + "Cost";
        buildingCost.setAttributeNode(attBuildingCost);
        buildingCost.innerHTML = "10";
        //Create a span to display the number of building bought
        buildingCount = document.createElement("span");
        attBuildingCount = document.createAttribute("id");
        attBuildingCount.value = element.getId() + "Count";
        buildingCount.setAttributeNode(attBuildingCount);
        buildingCount.innerHTML = "0";
        //Append everything to the buildings div
        buildingContainer.appendChild(buildingButton);
        buildingContainer.innerHTML += "<BR> Buildings : ";
        buildingContainer.appendChild(buildingCount);
        buildingContainer.innerHTML += "<BR> Cost : ";
        buildingContainer.appendChild(buildingCost);
        buildingContainer.innerHTML += "<BR> <BR> ";
        buildings[0].appendChild(buildingContainer);
        arrayPos++;
    });
    /*
    buildingButton = document.createElement("button");
    buildingButton.value =   allBuildings.length;
    buildings[0].appendChild(buildingButton);
    */
}