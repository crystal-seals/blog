// function changeColor(id){
//   document.getElementById("change").style.color = "#FFFFF0"; // forecolor
//   document.getElementById("change").style.backgroundColor = "#611C35"; // backcolor
// }

var isItClicked = true;

function firstFunc() {
    if (isItClicked === true) {
        document.getElementById('profile').style.backgroundColor = "#611C35";
        document.getElementById('about').style.backgroundColor = "#FFFFF0";
        document.getElementById('projects').style.backgroundColor = "#FFFFF0";


        isItClicked = false;
} else {
        document.getElementById('profile').style.backgroundColor = "#FFFFF0";
        document.getElementById('about').style.backgroundColor = "#FFFFF0";
        document.getElementById('projects').style.backgroundColor = "#FFFFF0";
        isItClicked = true;
        }
}
function secondFunc() {
    if (isItClicked === true) {
        document.getElementById('profile').style.backgroundColor = "#FFFFF0";
        document.getElementById('about').style.backgroundColor = "#611C35";
        document.getElementById('projects').style.backgroundColor = "#FFFFF0";
        isItClicked = false;
} else {
        document.getElementById('profile').style.backgroundColor = "#FFFFF0";
        document.getElementById('about').style.backgroundColor = "#FFFFF0";
        document.getElementById('projects').style.backgroundColor = "#FFFFF0";
        isItClicked = true;
        }
}
function thirdFunc() {
    if (isItClicked === true) {
        document.getElementById('profile').style.backgroundColor = "#FFFFF0";
        document.getElementById('about').style.backgroundColor = "#FFFFF0";
        document.getElementById('projects').style.backgroundColor = "#611C35";
        isItClicked = false;
} else {
        document.getElementById('profile').style.backgroundColor = "#FFFFF0";
        document.getElementById('about').style.backgroundColor = "#FFFFF0";
        document.getElementById('projects').style.backgroundColor = "#FFFFF0";
        isItClicked = true;
        }
}
