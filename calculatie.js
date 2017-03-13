var invoer="";
var ans="";

function calculate() {
	var berekening = invoer;
	var berekening0 = berekening.replace("--", "+");  //dubbele min vervangen door plus
	var berekening1 = berekening0.replace("log", "1/Math.LN10 * Math.log"); //Math.log berekent de natuurlijke logaritme, daarom deze omslachtige manier.
	var berekening2 = berekening1.replace("ln", "Math.log");
	var berekening3 = berekening2.replace("sin", "Math.sin");
	var berekening4 = berekening3.replace("cos", "Math.cos");
	var berekening5 = berekening4.replace("tan", "Math.tan");
	var berekening6 = berekening5.replace("pi", "Math.PI");
	var berekening7 = berekening6.replace("_e", "Math.E");
	var berekening8 = berekening7.replace("wortel", "Math.sqrt");

	//MACHTEN BEREKENEN
	
	var tekens = berekening8.length;
	var berekening9 = "";  //deze drie variabelen worden aangemaakt om later in een berekening te testen of ze leeg zijn
	var grondtal = "";
	var exponent = "";
	for (i=0; i<tekens; i++) {
		if (berekening8.slice(i,i+5) == "macht") {
			
			//Grondtal van de macht zoeken
			if (berekening8.slice(i-1,i) == ")") {  //als het teken voor de macht een sluithaakje is, dan
				var sluithaakjes = 0;  // dit is het aantal sluithaakjes wat gevonden wordt voor de macht
				var openhaakjes = 0;  // dit is het aantal openhaakjes wat gevonden wordt voor de macht
				for (j=1; j<i; j++) {
					if (berekening8.substr(i-j,1) == ")") {
						sluithaakjes += 1;
					}
					if (berekening8.substr(i-j,1) == "(") {
						openhaakjes += 1;
					}
					if (sluithaakjes == openhaakjes) {
						console.log(berekening8.slice(i-(j+1), i));
						grondtal = eval(berekening8.slice(i-(j+1), i));	 //dit is het grondtal van de macht	
						var berekening9 = berekening8.replace(berekening8.slice(i-(j+1), i), "grondtal");
						j=i;  //deze loop niet meer verder doorlopen
					}
				}
			}
			else 
			{
				for (j=1; j<=i; j++) {
					if (berekening8.substr(i-j,1)== "*" || berekening8.substr(i-j,1)== "/" || berekening8.substr(i-j,1)== "+" || berekening8.substr(i-j,1)== "-" || berekening8.substr(i-j,1)== "(") {  //zoek de plus, min, vermenigvuldiging of deling voor de macht en bereken het juiste grondtal; het openingshaakje wordt gezocht om in situaties als (2^2)+1 geen problemen te krijgen.
						grondtal = eval(berekening8.slice(i-(j-1), i));
						var berekening9 = berekening8.replace(berekening8.slice(i-(j-1), i), "grondtal");
						j=i;  //deze loop niet meer verder doorlopen
					}
				}
			}
			if (grondtal == "") {  //als er nog geen grondtal gevonden is, neem dat de eerste
			grondtal = eval(berekening8.slice(0,i));
			var berekening9 = berekening8.replace(berekening8.slice(0,i), "grondtal");
			}
			
			//Exponent van de macht zoeken
			var k = i+5;
			if (berekening8.slice(k,k+1) == "(") {
				var sluithaakjes = 0; 
				var openhaakjes = 0;
				for (j=0; j<k; j++) {
					if (berekening8.substr(k+j,1) == ")") {
						sluithaakjes += 1;
					}
					if (berekening8.substr(k+j,1) == "(") {
						openhaakjes += 1;
					}
					if (sluithaakjes == openhaakjes) {
						console.log(j);
						console.log(berekening8.slice(k, k+(j+1)));
						exponent = eval(berekening8.slice(k, k+(j+1)));	 
						var berekening9 = berekening9.replace(berekening8.slice(k, k+(j+1)), "exponent");
						j=k;  //deze loop niet meer verder doorlopen
					}
				}
			}
			else 
			{
				for (j=1; j<=k; j++) {
					if (berekening8.substr(k+j,1)== "*" || berekening8.substr(k+j,1)== "/" || berekening8.substr(k+j,1)== "+" || berekening8.substr(k+j,1)== "-" || berekening8.substr(k+j,1)== ")") {  //zoek de plus, min, vermenigvuldiging of deling voor de macht en bereken de juiste exonent; het sluitingshaakje wordt gezocht om in situaties als (2^2)+1 geen problemen te krijgen.
						exponent = eval(berekening8.slice(k, k+j));
						var berekening9 = berekening9.replace(berekening8.slice(k, k+j), "exponent");
						j=k;  //deze loop niet meer verder doorlopen
					}
				}
			}
			if (exponent == "") {  //als er nog geen grondtal gevonden is, neem dat de eerste
			exponent = eval(berekening8.slice(-(tekens-k)));
			var berekening9 = berekening9.replace(berekening8.slice(-(tekens-k)), "exponent");
			}
		}
	}
	
	//De daadwerkelijke macht berekenen
	var macht = Math.pow(grondtal, exponent);
	if (berekening9 == "") {  //als er geen machtberekening is, deze overslaan en berekening10 gelijkstellen aan berekening8
		var berekening10 = berekening8;
	}
	else {
		var berekening10 = berekening9.replace("grondtalmachtexponent", macht);
	}
	
	
	
	//var berekening9 = berekening8.replace("mWortel", "Math.pow("); //werkt nog niet

	var uitvoer = eval(berekening10);
	Calc.output.value = uitvoer;
	invoer = uitvoer;
	
	ans = uitvoer; // het vorige antwoord opslaan als ans
}
