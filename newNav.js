var isItClicked = true;

function removeHighlight(){
	var menuItems = document.querySelectorAll('.navbarcontainer div');
	for (var i = 0; i < menuItems.length; i++) {
		//menuItems[i].style.backgroundColor = '#FFFFF0';
		menuItems[i].className = 'button';
	}
}

function firstFunc(event) {
	removeHighlight();
	// event.target
	//document.getElementById('profile').style.backgroundColor = "#611C35";
	document.getElementById('profile').className = 'button highlighted';
}

function secondFunc() {
	removeHighlight();
	document.getElementById('about').className = 'button highlighted';
}

function thirdFunc() {
	removeHighlight();
	document.getElementById('projects').className = 'button highlighted';
}

// var menu = document.querySelectorAll(...);

// menu.addEventListener('click', firstFunc);
