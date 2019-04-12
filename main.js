function addCookie(numb) {
    numb *= clickPower;
    cookies += numb;
    cookies = prettify(cookies);
    cookieCount = cookies;
    cookieCount = magnify(cookieCount);
    document.getElementById("cookieCount").innerHTML = cookieCount; 
    document.getElementById("perSecond").innerHTML = prettify(0.1*allBuildings[0].getCount() + 1*allBuildings[2].getCount());
}


