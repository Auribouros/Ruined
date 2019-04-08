function prettify(input){
    var output = Math.round(input * 1000000)/1000000;
	return output;
}

function magnify(input){
    var output=0;
    for(i=4; Math.pow(10,i)<input; i=i+3){
        output=Math.floor(input/1000);
        output=output.toFixed(2);
        document.getElementById("notation").innerHTML = notation[(i-1)/3];
        alert(notation[(i-1)/3])
    }
    return output;
}