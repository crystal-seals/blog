//var isItClicked = true;
var all_divs = document.getElementsByClassName('mainpage_grid');

function removeHighlight(){
	var menuItems = document.querySelectorAll('.navbar_container div');
	for (var i = 0; i < 3; i++) {
		//menuItems[i].style.backgroundColor = '#FFFFF0';
		menuItems[i].className = 'navbar_button';
	}
}

function nav_select(btn_name) {
	removeHighlight();
	// event.target
	//document.getElementById('profile').style.backgroundColor = "#611C35";
	var id = btn_name;
	document.getElementById(id).className = 'navbar_button highlighted';
	if (id === "profile") {
		document.getElementById('mainpage_team').style.visibility = "visible";
		document.getElementById('mainpage_projects').style.visibility = "hidden";
		document.getElementById('mainpage_pandas').style.visibility = "hidden";
		document.getElementById('mainpage_projects').style.height = 0;
		document.getElementById('mainpage_pandas').style.height = 0;
	} else if (id === "projects") {
		document.getElementById('mainpage_pandas').style.visibility = "visible";
		document.getElementById('mainpage_projects').style.visibility = "hidden";
		document.getElementById('mainpage_team').style.visibility = "hidden";
		document.getElementById('mainpage_pandas').style.height = 0;
		document.getElementById('mainpage_team').style.height = 0;
	} else {
		document.getElementById('mainpage_pandas').style.visibility = "hidden";
		document.getElementById('mainpage_projects').style.visibility = "visible";
		document.getElementById('mainpage_team').style.visibility = "hidden";
		document.getElementById('mainpage_projects').style.height = 0;
		document.getElementById('mainpage_team').style.height = 0;
	}


}



// function secondFunc() {
// 	removeHighlight();
// 	document.getElementById('about').className = 'navbar_button highlighted';
// }
//
// function thirdFunc() {
// 	removeHighlight();
// 	document.getElementById('projects').className = 'navbar_button highlighted';
// }

// var menu = document.querySelectorAll(...);

// menu.addEventListener('click', firstFunc);
