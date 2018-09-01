var input = document.querySelector("#userinput");
var button = document.querySelector("#enter");
var ul = document.querySelector("#ul");


function inputlength() {
    return input.value.length;
}

function addElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
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

function toggleListItemState(event) {
    var li = event.target;
    li.classList.toggle("done");
}

button.addEventListener("click", addElementOnClick);
input.addEventListener("keypress", addElementOnKeyPress);
ul.addEventListener("click", toggleListItemState);