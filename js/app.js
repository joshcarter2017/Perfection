var document = "Perfection/index.html";
var main = function() {
    var inp = prompt("What number would you like to check?");
    var inpInt = parseInt(inp);
    isPerf(inpInt);
}

// input
var num;
// current factor
var factor = 2;
// array of factors, note plurality of "factors" versus "factor"
var factors = [];
function isPerf(inp) {
    num = inp;
    while (factor <= (num/2)){
        if(num % factor == 0)
            factors.push(factor);
        factor++;
    }
    var sum;
    if (num == 0)
        sum = 0;
    else
        // this is to account for ignoring one in factoring
        sum = 1;
    for(var k = 0; k < factors.length; k++){
        sum += factors[k];
    }
    if (sum == num){
        //build factor addition string
        var factorAdd = "Is perfect, and so are you! <br> Factors: 1";
        for(var j = 0; j < factors.length; j++)
            factorAdd += " + " + factors[j];
        factorAdd += " = " + sum;
        if (num == 0)
            factorAdd = "Is perfect, and so are you! <br> Factors: 0 = 0";
        var element = document.getElementById("willTell");
        element.innerHTML = factorAdd;
        element = document.getElementById("numberBig");
        element.innerHTML = num;
    }
    else{
        element = document.getElementById("willTell");
        element.innerHTML = "It's not perfect, reload the page to try a different number or go take a nap"
        element = document.getElementById("numberBig");
        element.innerHTML = num;
    }
}

$(document).ready(main);