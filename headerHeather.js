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
	document.getElementById(btn_name).className = 'navbar_button highlighted';
	document.getElementById('mainpage_team').style.visibility = "hidden";
	document.getElementById('mainpage_projects').style.visibility = "hidden";
	document.getElementById('mainpage_pandas').style.visibility = "hidden";

}
