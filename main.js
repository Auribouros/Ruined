function addCookie(numb) {
    numb *= clickPower;
    cookies += numb;
    cookies = prettify(cookies);
    cookieCount = cookies;
    cookieCount = magnify(cookieCount);
    document.getElementById("cookieCount").innerHTML = cookieCount; 
    document.getElementById("perSecond").innerHTML = prettify(0.1*allBuildings[1].getCount() + 1*allBuildings[2].getCount());
}

function updateCookie() {
    setInterval(function() {
        var valPerSec  = Number(document.getElementById("perSecond").innerHTML);
        if (!isNaN(valPerSec)) {
            addCookie(valPerSec);
        }
    }, 1000)
   
}
