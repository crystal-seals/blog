//Not clear that allDivs is in fact only all of the divs with the class mainpage_grid and not all the divs on the page. Removed varibale as it is not being used. Also, gloabl variable.

function removeHighlight(){
	var menuItems = document.querySelectorAll('.navbar_container div');
	for (var i = 0; i < menuItems.length; i++) {
		menuItems[i].className = 'navbar_button';
	}
}


function nav_select(btnName) {
	removeHighlight();
	document.getElementById(btnName).className = 'navbar_button highlighted';
//not clear that var grid is actually the same as allDivs. Rename this variable.
	var grid = document.getElementsByClassName("mainpage_grid"); //.className = "noBorder"
	for (var i = 0; i < grid.length; i++) {
		grid[i].className = "mainpage_grid noBorder";
	}

	document.getElementById('mainpage_team').style.display = "none";
	document.getElementById('mainpage_projects').style.display = "none";
	document.getElementById('mainpage_pandas').style.display = "none";

	if (btnName === "profile") {
		document.getElementById('mainpage_team').style.display = "block";
	} else if (btnName === "projects") {
		document.getElementById('mainpage_projects').style.display = "block";
	} else {
		document.getElementById('mainpage_pandas').style.display = "block";
	}
	console.log(btnName)

}

document.getElementById("profile").addEventListener("click", function () { nav_select("profile") });
document.getElementById("about").addEventListener("click", function () { nav_select("about") });
document.getElementById("projects").addEventListener("click", function () { nav_select("projects") });
