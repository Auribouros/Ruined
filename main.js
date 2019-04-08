function addCookie(numb) {
    cookies += numb;
    cookies = prettify(cookies);
    cookieCount = prettify(cookies);
    cookieCount = magnify(cookieCount);
    document.getElementById("cookieCount").innerHTML = cookieCount; 
    document.getElementById("perSecond").innerHTML = prettify(0.1*buildingOneCount + 1*buildingTwoCount);
}


