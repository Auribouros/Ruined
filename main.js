function addCookie(numb) {
    cookies += numb;
    //cookies = magnify(cookies);
    document.getElementById("cookieCount").innerHTML = prettify(cookies); 
    document.getElementById("perSecond").innerHTML = prettify(0.1*buildingOneCount + 1*buildingTwoCount);
}



