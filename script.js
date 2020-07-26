// add items
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");


// toggle class 
// var items = document.getElementsByTagName("li");

// function togglelinethrough(event) {
//     event.target.parentNode.classList.toggle("done");
// }

// for (var i=0;i<items.length; i++) {
//     items[i].firstChild.addEventListener("hover", togglelinethrough);
// }

ul.onclick = function(event) {
	var target = event.target;
	target.classList.toggle("done");
}
// add event lisener to the dbtns in the index.html

var dbts = document.getElementsByClassName("delete");

function removeParent(event) {
    event.target.parentNode.remove(); 
}

for (var i=0;i<dbts.length; i++) {
    dbts[i].addEventListener("click", removeParent);
}


// add new items
function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
    var button = document.createElement("button");
    button.classList.add("delete");
    button.appendChild(document.createTextNode("Delete"));
    li.appendChild(button);
	ul.appendChild(li);
	input.value = "";
    // How to remove the dynamicaly added items? !!!
    // button.addEventListener("click", removeParent); // method01
    button.onclick = removeParent;  // method02
    li.firstChild.onclick = togglelinethrough;
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);



