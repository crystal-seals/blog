var isItClicked = true;

function removeHighlight(){
	var menuItems = document.querySelectorAll('.navbar_container div');
	for (var i = 0; i < 3; i++) {
		//menuItems[i].style.backgroundColor = '#FFFFF0';
		menuItems[i].className = 'navbar_button';
	}
}

function firstFunc(event) {
	removeHighlight();
	// event.target
	//document.getElementById('profile').style.backgroundColor = "#611C35";
	document.getElementById('profile').className = 'navbar_button highlighted';
}

function secondFunc() {
	removeHighlight();
	document.getElementById('about').className = 'navbar_button highlighted';
}

function thirdFunc() {
	removeHighlight();
	document.getElementById('projects').className = 'navbar_button highlighted';
}

// var menu = document.querySelectorAll(...);

// menu.addEventListener('click', firstFunc);
