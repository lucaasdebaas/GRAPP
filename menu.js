var v = 0;
	var SwipePhase = 0;
	
	/* Sidenav */
	function openNav() {
		document.getElementById("mySidenav").style.width = "200px";
		document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
		document.getElementById("hamburger").innerHTML = '<img src="kruis.svg" height="18px"/>';
		v = 1;
		closeSwipe(); //om te voorkomen dat ze allebei aanstaan tegelijkertijd
	}

			// Set the width of the side navigation to 0 
	function closeNav() {
		document.getElementById("mySidenav").style.width = "0";
		document.body.style.backgroundColor = "white"; 
		document.getElementById("hamburger").innerHTML = '<img src="hamburger.svg" height="18px"/>';
		v = 0;
	}
	
	function toggleNav() {
		if (v == 0) {
			openNav();
		}
		else if (v == 1) {
			closeNav();
		}
	}
	
	/* Swipemenu */
	function openSwipe() {
		document.getElementById("mySwipemenu").style.left = "5%";
		document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
		SwipePhase = 1;
		closeNav(); //om te voorkomen dat ze allebei aanstaan tegelijkertijd
	}
	
	function closeSwipe() {
		document.getElementById("mySwipemenu").style.left = "98%";
		document.body.style.backgroundColor = "white"; 
		SwipePhase = 0;
	}
	
	function toggleSwipe() {
		if(SwipePhase == 0) {
		openSwipe();
		} else {
		closeSwipe();
		}
	}