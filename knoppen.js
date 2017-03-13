// voor lastige berekeningen zie http://javascript.divendo-webs.com/hoofdstuk_10.php#H10.1

// Hier worden de knoppen 0-9 gedefinieerd
	
	function _0() { //knop 0, van knop 0-9
		Calc.output.value += 0;
		invoer += "0";
	}
	
	function _1() { //knop 1, van knop 0-9
		Calc.output.value += 1;
		invoer += "1";
	}

	function _2() { //knop 2, van knop 0-9
		Calc.output.value += 2;
		invoer += "2";
	}
	
	function _3() { //knop 3, van knop 0-9
		Calc.output.value += 3;
		invoer += "3";
	}
	
	function _4() { //knop 4, van knop 0-9
		Calc.output.value += 4;
		invoer += "4";
	}
	
	function _5() { //knop 5, van knop 0-9
		Calc.output.value += 5;
		invoer += "5";
	}
	
	function _6() { //knop 6, van knop 0-9
		Calc.output.value += 6;
		invoer += "6";
	}
	
	function _7() { //knop 7, van knop 0-9
		Calc.output.value += 7;
		invoer += "7";
	}
	
	function _8() { //knop 8, van knop 0-9
		Calc.output.value += 8;
		invoer += "8";
	}

	function _9() { //knop 9, van knop 0-9
		Calc.output.value += 9;
		invoer += "9";
	}
// Dit zijn de extra knoppen zoals . en negatieve min

	function _punt() { //knop 9, van knop 0-9
		Calc.output.value += "."
		invoer += ".";
	}

	function _negMin() { //knop 9, van knop 0-9
		Calc.output.value += "-";
		invoer += "-";
	}

// Dit zijn de basisknoppen voor optellen, aftrekken, delen en vermenigvuldigen
	function vermenigvuldigen() { //vermenigvuldigen
		Calc.output.value += "×";
		invoer += "*";
	}
	
	function delen() { //delen
		Calc.output.value += "÷";
		invoer += "/";
	}
	
	function optellen() { //optellen
		Calc.output.value += "+";
		invoer += "+";
	}	
	
	function aftrekken() { //aftrekken
		Calc.output.value += "-";
		invoer += "-";
	}	
	

	function _backspace() { //backspace
		Calc.output.value = Calc.output.value.slice(0, -1);
		invoer = invoer.slice(0, -1);
	}
	
	function _ANS() {
		Calc.output.value += "ANS";
		invoer += ans;
		
	}
	
	function _linkerHaakje() {
		Calc.output.value += "(";
		invoer += "(";
	}
	
	function _rechterHaakje() {
		Calc.output.value += ")";
		invoer += ")";
	}
	
	function _log() {
		Calc.output.value += "log(";
		invoer += "log(";
	}
	
	function _ln() {
		Calc.output.value += "ln(";
		invoer += "ln(";
	}
	
	function _tan() {
		Calc.output.value += "tan(";
		invoer += "tan(";
	}
	
	function _sin() {
		Calc.output.value += "sin(";
		invoer += "sin(";
	}
	
	function _cos() {
		Calc.output.value += "cos(";
		invoer += "cos(";
	}
	
	function _pi() {
		Calc.output.value += "π";
		invoer += "pi";
	}
	
	function _e() {
		Calc.output.value += "e";
		invoer += "_e";
	}
	
	function _xWortel() {
		Calc.output.value += "x√(";
		invoer += "xWort(";
	}
	
	function _wortel() {
		Calc.output.value += "√(";
		invoer += "wortel(";
	}
	
	function _macht() {
		Calc.output.value += "^";
		invoer += "macht";
	}
