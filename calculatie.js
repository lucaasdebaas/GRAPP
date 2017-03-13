var invoer="";
var ans="";

function calculate() {
	var berekening = invoer;
	var berekening1 = berekening.replace("log", "1/Math.LN10 * Math.log"); //Math.log berekent de natuurlijke logaritme, daarom deze omslachtige manier.
	var berekening2 = berekening1.replace("ln", "Math.log");
	var berekening3 = berekening2.replace("sin", "Math.sin");
	var berekening4 = berekening3.replace("cos", "Math.cos");
	var berekening5 = berekening4.replace("tan", "Math.tan");
	var berekening6 = berekening5.replace("pi", "Math.PI");
	var berekening7 = berekening6.replace("_e", "Math.E");
	var berekening8 = berekening7.replace("wortel", "Math.sqrt");
	
	/*var tekens = berekening8.length;
	for (i=0; i<tekens; i++) {
		if (berekening8.slice(i,i+5) == "macht") {
			if (berekening8.slice(i-1,i) == ")") {
				
	*/
	var berekening9 = berekening8.replace("mWortel", "Math.pow("); //werkt nog niet
	var berekening10 = berekening9.replace("macht", "Math.pow("); //werkt nog niet
	
	
	var uitvoer = eval(berekening10);
	Calc.output.value = uitvoer;
	invoer = uitvoer;
	
	ans = uitvoer; // het vorige antwoord opslaan als ans
}