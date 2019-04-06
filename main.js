function addCookie(numb) {
    cookies += numb;
    //cookies = magnify(cookies);
    document.getElementById("cookieCount").innerHTML = prettify(cookies); 
    document.getElementById("perSecond").innerHTML = 0.1*buildingOneCount + 2*buildingTwoCount;
}



