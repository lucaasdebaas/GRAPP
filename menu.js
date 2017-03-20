var v = 0;
	var SwipePhase = 0;
	
	/* Sidenav */
	function openNav() {
		document.getElementById("Zero").style.display = "none";
		document.getElementById("Maximum").style.display = "none";
		document.getElementById("Minimum").style.display = "none";
		document.getElementById("Intersect").style.display = "none";
		document.getElementById("value").style.display = "none";
		phasef = 0;
		document.getElementById("mySidenav").style.width = "200px";
		document.getElementById("hamburger").innerHTML = '<img src="kruis.svg" height="18px"/>';
		v = 1;
		closeSwipe(); //om te voorkomen dat ze allebei aanstaan tegelijkertijd
		document.body.style.background = "#999999";
	}

			// Set the width of the side navigation to 0 
	function closeNav() {
		document.getElementById("mySidenav").style.width = "0"; 
		document.getElementById("hamburger").innerHTML = '<img src="hamburger.svg" height="18px"/>';
		v = 0;
		document.body.style.background = "white";
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
		SwipePhase = 1;
		closeNav(); //om te voorkomen dat ze allebei aanstaan tegelijkertijd
		document.body.style.background = "#999999";
	}
	
	function closeSwipe() {
		document.getElementById("mySwipemenu").style.left = "98%";
		document.body.style.background = "white"; 
		SwipePhase = 0;
	}
	
	function toggleSwipe() {
		if(SwipePhase == 0) {
		openSwipe();
		} else {
		closeSwipe();
		}
	}