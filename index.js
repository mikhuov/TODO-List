function add() {
    //Adds items to toDoList
    createLiElement();
}

function createButtons(li) {
    var span = document.createElement("SPAN");
    var button = document.createElement("INPUT");
    button.setAttribute("type", "radio");
    span.className = "close";
    span.appendChild(button);
    li.appendChild(span);
}

function createLiElement(){
    let li = document.createElement("li");
    let value = document.getElementById("listInput").value;
    console.log('value: ', value);

    if(value.length < 5) {
        alert("Item cannot have less than 5 characters")
    } else {
        let text = document.createTextNode(value);
        li.appendChild(text);
        document.getElementById("toDoList").appendChild(li);
        createButtons(li);
    }
}

function remove() {
    //removes items from the toDoList
}