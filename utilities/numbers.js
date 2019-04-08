function prettify(input){
    var output = Math.round(input * 1000000)/1000000;
	return output;
}

function magnify(input){
    var output=input;
    for(i=4; Math.pow(10,i)<input; i=i+3){
        output=input/(Math.pow(10,i-1));
        output=output.toFixed(2);
        output += notation[(i-1)/3];
    }
    return output;
}