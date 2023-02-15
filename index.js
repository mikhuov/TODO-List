const data = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
const list = document.getElementById("toDoList");

localStorage.setItem('items', JSON.stringify(data));


//Call createLiElement and populate toDolist from localstorage
data.forEach(createLiElement);

function add() {
    //Adds items to toDoList

    const li = document.createElement("li");
    const value = document.getElementById("listInput").value;

    if(value.length < 5) {
        alert("Item cannot have less than 5 characters")
    } else {
        let text = document.createTextNode(value);
        li.appendChild(text);
        document.getElementById("toDoList").appendChild(li);
        //Call create Buttons
        createButtons(li);
        data.push([value]);
        
        localStorage.setItem('items', JSON.stringify(data));
    }
}

function checkOff() {
    const ul = document.getElementById("toDoList");
    ul.addEventListener("click", event => {
        if (event.target.tagName === "LI" ) {        
            event.target.classList.toggle("checked");
        }
    });
}

function createButtons(li) {
    //Creates Buttons for Li-elements for additional funcionalities
    const span = document.createElement("SPAN");
    const button = document.createElement("BUTTON");

    span.className ="buttonSpan";
    button.className ="selectButton";
    button.setAttribute("onclick", "remove()");

    span.appendChild(button);
    li.appendChild(span);
}

function createLiElement(textContent){
    //Creates Li-element with the necessary values
    const li = document.createElement("LI");
    li.textContent = textContent;
    createButtons(li);
    list.appendChild(li);
}

function remove() {
    //removes items from the toDoList
    const buttonSpan = document.getElementsByClassName("buttonSpan");
    const itemArray = Array.from(buttonSpan)
    data.forEach(del);

    function del(item, index) {
        buttonSpan[index].onclick = function() {
            if (itemArray[index].parentNode.innerText === data[index]?.toString()) {
                var div = this.parentElement;
                div.style.display = "none";
                data.splice(index, 1)
                localStorage.setItem('items', JSON.stringify(data));
            }
        }
    }
}