function formule1onclick(formule1, formule2,xmin,xmax,ymin,ymax) {
		formule1.style.backgroundColor = "#efefef";
		formule2.style.backgroundColor = "white";
		xmin.style.backgroundColor = "white";
			document.getElementById("xminlab").style.backgroundColor = "white";
		xmax.style.backgroundColor = "white";
			document.getElementById("xmaxlab").style.backgroundColor = "white";
		ymin.style.backgroundColor = "white";
			document.getElementById("yminlab").style.backgroundColor = "white";
		ymax.style.backgroundColor = "white";
			document.getElementById("ymaxlab").style.backgroundColor = "white";
		formule1.setAttribute('activeFunction', '1'); 
		formule2.setAttribute('activeFunction', '0'); 
		xmin.setAttribute('activeFunction', '0'); 
		xmax.setAttribute('activeFunction', '0'); 
		ymin.setAttribute('activeFunction', '0'); 
		ymax.setAttribute('activeFunction', '0'); 
	}

function formule2onclick(formule1, formule2,xmin,xmax,ymin,ymax) {
		formule2.style.backgroundColor = "#efefef";
		formule1.style.backgroundColor = "white";
		xmin.style.backgroundColor = "white";
			document.getElementById("xminlab").style.backgroundColor = "white";
		xmax.style.backgroundColor = "white";
			document.getElementById("xmaxlab").style.backgroundColor = "white";
		ymin.style.backgroundColor = "white";
			document.getElementById("yminlab").style.backgroundColor = "white";
		ymax.style.backgroundColor = "white";
			document.getElementById("ymaxlab").style.backgroundColor = "white";
		formule1.setAttribute('activeFunction', '0'); 
		formule2.setAttribute('activeFunction', '1'); 
		xmin.setAttribute('activeFunction', '0'); 
		xmax.setAttribute('activeFunction', '0'); 
		ymin.setAttribute('activeFunction', '0'); 
		ymax.setAttribute('activeFunction', '0'); 
	}
	
function xminonclick(formule1, formule2,xmin,xmax,ymin,ymax) {
		formule1.style.backgroundColor = "white";
		formule2.style.backgroundColor = "white";
		xmin.style.backgroundColor = "#efefef";
			document.getElementById("xminlab").style.backgroundColor = "#efefef";
		xmax.style.backgroundColor = "white";
			document.getElementById("xmaxlab").style.backgroundColor = "white";
		ymin.style.backgroundColor = "white";
			document.getElementById("yminlab").style.backgroundColor = "white";
		ymax.style.backgroundColor = "white";
			document.getElementById("ymaxlab").style.backgroundColor = "white";
		formule1.setAttribute('activeFunction', '0'); 
		formule2.setAttribute('activeFunction', '0'); 
		xmin.setAttribute('activeFunction', '1'); 
		xmax.setAttribute('activeFunction', '0'); 
		ymin.setAttribute('activeFunction', '0'); 
		ymax.setAttribute('activeFunction', '0'); 
	}
	
function xmaxonclick(formule1, formule2,xmin,xmax,ymin,ymax) {
		formule1.style.backgroundColor = "white";
		formule2.style.backgroundColor = "white";
		xmin.style.backgroundColor = "white";
			document.getElementById("xminlab").style.backgroundColor = "white";
		xmax.style.backgroundColor = "#efefef";
			document.getElementById("xmaxlab").style.backgroundColor = "#efefef";
		ymin.style.backgroundColor = "white";
			document.getElementById("yminlab").style.backgroundColor = "white";
		ymax.style.backgroundColor = "white";
			document.getElementById("ymaxlab").style.backgroundColor = "white";
		formule1.setAttribute('activeFunction', '0'); 
		formule2.setAttribute('activeFunction', '0'); 
		xmin.setAttribute('activeFunction', '0'); 
		xmax.setAttribute('activeFunction', '1'); 
		ymin.setAttribute('activeFunction', '0'); 
		ymax.setAttribute('activeFunction', '0'); 
	}

function yminonclick(formule1, formule2,xmin,xmax,ymin,ymax) {
		formule1.style.backgroundColor = "white";
		formule2.style.backgroundColor = "white";
		xmin.style.backgroundColor = "white";
			document.getElementById("xminlab").style.backgroundColor = "white";
		xmax.style.backgroundColor = "white";
			document.getElementById("xmaxlab").style.backgroundColor = "white";
		ymin.style.backgroundColor = "#efefef";
			document.getElementById("yminlab").style.backgroundColor = "#efefef";
		ymax.style.backgroundColor = "white";
			document.getElementById("ymaxlab").style.backgroundColor = "white";
		formule1.setAttribute('activeFunction', '0'); 
		formule2.setAttribute('activeFunction', '0'); 
		xmin.setAttribute('activeFunction', '0'); 
		xmax.setAttribute('activeFunction', '0'); 
		ymin.setAttribute('activeFunction', '1'); 
		ymax.setAttribute('activeFunction', '0'); 
	}

function ymaxonclick(formule1, formule2,xmin,xmax,ymin,ymax) {
		formule1.style.backgroundColor = "white";
		formule2.style.backgroundColor = "white";
		xmin.style.backgroundColor = "white";
			document.getElementById("xminlab").style.backgroundColor = "white";
		xmax.style.backgroundColor = "white";
			document.getElementById("xmaxlab").style.backgroundColor = "white";
		ymin.style.backgroundColor = "white";
			document.getElementById("yminlab").style.backgroundColor = "white";
		ymax.style.backgroundColor = "#efefef";
			document.getElementById("ymaxlab").style.backgroundColor = "#efefef";
		formule1.setAttribute('activeFunction', '0'); 
		formule2.setAttribute('activeFunction', '0'); 
		xmin.setAttribute('activeFunction', '0'); 
		xmax.setAttribute('activeFunction', '0'); 
		ymin.setAttribute('activeFunction', '0'); 
		ymax.setAttribute('activeFunction', '1'); 
	}
	

// voor lastige berekeningen zie http://javascript.divendo-webs.com/hoofdstuk_10.php#H10.1

// Hier worden de knoppen 0-9 en x gedefinieerd
	
	function _0() { //knop 0, van knop 0-9
		var input = document.querySelectorAll('[activeFunction = "1"]')[0];
		input.value += 0;
	}
	
	function _1() { //knop 1, van knop 0-9
		var input = document.querySelectorAll('[activeFunction = "1"]')[0];
		input.value += 1;
		
	}

	function _2() { //knop 2, van knop 0-9
		var input = document.querySelectorAll('[activeFunction = "1"]')[0];
		input.value += 2;
		
	}
	
	function _3() { //knop 3, van knop 0-9
		var input = document.querySelectorAll('[activeFunction = "1"]')[0];
		input.value += 3;
		
	}
	
	function _4() { //knop 4, van knop 0-9
		var input = document.querySelectorAll('[activeFunction = "1"]')[0];
		input.value += 4;
		
	}
	
	function _5() { //knop 5, van knop 0-9
		var input = document.querySelectorAll('[activeFunction = "1"]')[0];
		input.value += 5;
		
	}
	
	function _6() { //knop 6, van knop 0-9
		var input = document.querySelectorAll('[activeFunction = "1"]')[0];
		input.value += 6;
	
	}
	
	function _7() { //knop 7, van knop 0-9
		var input = document.querySelectorAll('[activeFunction = "1"]')[0];
		input.value += 7;
	
	}
	
	function _8() { //knop 8, van knop 0-9
		var input = document.querySelectorAll('[activeFunction = "1"]')[0];
		input.value += 8;
	
	}

	function _9() { //knop 9, van knop 0-9
		var input = document.querySelectorAll('[activeFunction = "1"]')[0];
		input.value += 9;
	
	}
	
	function _x() { //knop x, van knop 0-9 en x
		var input = document.querySelectorAll('[activeFunction = "1"]')[0];
		input.value += "x";
	
	}
	
// Dit zijn de extra knoppen zoals . en negatieve min

	function _punt() { //knop 9, van knop 0-9
		var input = document.querySelectorAll('[activeFunction = "1"]')[0];
		input.value += "."
		
	}

	function _negMin() { //knop 9, van knop 0-9
		var input = document.querySelectorAll('[activeFunction = "1"]')[0];
		input.value += "-";
		
	}

// Dit zijn de basisknoppen voor optellen, aftrekken, delen en vermenigvuldigen
	function vermenigvuldigen() { //vermenigvuldigen
		var input = document.querySelectorAll('[activeFunction = "1"]')[0];
		input.value += "*";
		
	}
	
	function delen() { //delen
		var input = document.querySelectorAll('[activeFunction = "1"]')[0];
		input.value += "/";
		
	}
	
	function optellen() { //optellen
		var input = document.querySelectorAll('[activeFunction = "1"]')[0];
		input.value += "+";
		
	}	
	
	function aftrekken() { //aftrekken
		var input = document.querySelectorAll('[activeFunction = "1"]')[0];
		input.value += "-";
	}	
	
	function _backspace() { //backspace
		var input = document.querySelectorAll('[activeFunction = "1"]')[0];
		input.value = input.value.slice(0, -1);
		
	}	
	
	function _linkerHaakje() {
		var input = document.querySelectorAll('[activeFunction = "1"]')[0];
		input.value += "(";
		
	}
	
	function _rechterHaakje() {
		var input = document.querySelectorAll('[activeFunction = "1"]')[0];
		input.value += ")";
		
	}
	
	function _log() {
		var input = document.querySelectorAll('[activeFunction = "1"]')[0];
		input.value += "log(";
		
	}
	
	function _ln() {
		var input = document.querySelectorAll('[activeFunction = "1"]')[0];
		input.value += "ln(";
		
	}
	
	function _tan() {
		var input = document.querySelectorAll('[activeFunction = "1"]')[0];
		input.value += "tan(";
		
	}
	
	function _sin() {
		var input = document.querySelectorAll('[activeFunction = "1"]')[0];
		input.value += "sin(";
		
	
	}
	
	function _cos() {
		var input = document.querySelectorAll('[activeFunction = "1"]')[0];
		input.value += "cos(";
		
	}
	
	function _pi() {
		var input = document.querySelectorAll('[activeFunction = "1"]')[0];
		input.value += "pi";
		
	}
	
	function _e() {
		var input = document.querySelectorAll('[activeFunction = "1"]')[0];
		input.value += "e";
		
	}
	
	function _xWortel() {
		var input = document.querySelectorAll('[activeFunction = "1"]')[0];
		input.value += "x&radic;(";
		
	}
	
	function _wortel() {
		var input = document.querySelectorAll('[activeFunction = "1"]')[0];
		input.value += "&radic;(";
		
	}
	
	function _macht() {
		var input = document.querySelectorAll('[activeFunction = "1"]')[0];
		input.value += "&circ;(";
		
	}
	
	var phasef = 0;
	
	function Valueboxtoggle() {
		if(phasef == 0) {
		
		document.getElementById("2").style.display = "none";
		document.getElementById("value").style.display = "block";
		closeNav();
		phasef = 1;
		document.body.style.background = "#999999";
		
		} else if(phasef == 1) {
		
		document.getElementById("2").style.display = "block";
		document.getElementById("value").style.display = "none";
		document.body.style.background = "white";
		phasef = 0;
		}
	}
	
	function Zeroboxtoggle() {
		if(phasef == 0) {
		
		document.getElementById("2").style.display = "none";
		document.getElementById("Zero").style.display = "block";
		closeNav();
		phasef = 1;
		document.body.style.background = "#999999";
		
		} else if(phasef == 1) {
		
		document.getElementById("2").style.display = "block";
		document.getElementById("Zero").style.display = "none";
		document.body.style.background = "white";
		phasef = 0;
		}
	}
	
	function Maximumboxtoggle() {
		if(phasef == 0) {
		
		document.getElementById("2").style.display = "none";
		document.getElementById("Maximum").style.display = "block";
		closeNav();
		phasef = 1;
		document.body.style.background = "#999999";
		
		} else if(phasef == 1) {
		
		document.getElementById("2").style.display = "block";
		document.getElementById("Maximum").style.display = "none";
		document.body.style.background = "white";
		phasef = 0;
		}
	}
	
	function Minimumboxtoggle() {
		if(phasef == 0) {
		
		document.getElementById("2").style.display = "none";
		document.getElementById("Minimum").style.display = "block";
		closeNav();
		phasef = 1;
		document.body.style.background = "#999999";
		
		} else if(phasef == 1) {
		
		document.getElementById("2").style.display = "block";
		document.getElementById("Minimum").style.display = "none";
		document.body.style.background = "white";
		phasef = 0;
		}
	}
	
	function Intersectboxtoggle() {
		if(phasef == 0) {
		
		document.getElementById("2").style.display = "none";
		document.getElementById("Intersect").style.display = "block";
		closeNav();
		phasef = 1;
		document.body.style.background = "#999999";
		
		} else if(phasef == 1) {
		
		document.getElementById("2").style.display = "block";
		document.getElementById("Intersect").style.display = "none";
		document.body.style.background = "white";
		phasef = 0;
		}
	}
	
	function Value(){
	
	}
	
	function Zero() {
	
	}
	
	function Maximum() {
	
	}
	
	function Minimum() {
	
	}
	
	function Intersect() {
	
	}