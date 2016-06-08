var isItClicked = true;

function removeHighlight(){
	var menuItems = document.querySelectorAll('.navbarcontainer div');
	for (var i = 0; i < 3; i++) {
		menuItems[i].style.backgroundColor = '#FFFFF0';
	}
}

function firstFunc(event) {
	removeHighlight();
	// event.target
	document.getElementById('profile').style.backgroundColor = "#611C35";
}

function secondFunc() {
	removeHighlight();
	document.getElementById('about').style.backgroundColor = "#611C35";
}

function thirdFunc() {
	removeHighlight();
	document.getElementById('projects').style.backgroundColor = "#611C35";
}

// var menu = document.querySelectorAll(...);

// menu.addEventListener('click', firstFunc);