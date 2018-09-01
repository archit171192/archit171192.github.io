var input = document.querySelector("#userinput");
var button = document.querySelector("#enter");
var ul = document.querySelector("#ul");

function inputlength() {
    return input.value.length;
}

function addElement() {
    var li = document.createElement("li");
    var delButton = document.createElement("button");
    delButton.appendChild(document.createTextNode("Delete"));
    li.appendChild(document.createTextNode(input.value));
    li.appendChild(delButton);
    ul.appendChild(li);
    input.value="";
}

function addElementOnClick() {
    if(inputlength() > 0) {
        addElement();
    }
}

function addElementOnKeyPress(event) {
    if(inputlength() > 0 && event.keyCode === 13) {
        addElement();
    }
}

function deleteElement (element) {
    var li = element.parentElement;
    ul.removeChild(li);
}

function toggleListItemState(event) {
    var element = event.target;
    if(element.tagName === "LI" ) {
        element.classList.toggle("done");
    } else {
        deleteElement(element);
    }
}

button.addEventListener("click", addElementOnClick);
input.addEventListener("keypress", addElementOnKeyPress);
ul.addEventListener("click", toggleListItemState);