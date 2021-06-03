///////////////////////////////////// CREATE NEW ELEMENT ///////////////////////////////////
var listMaterial = document.getElementsByTagName("LI");
for (var i = 0; i < listMaterial.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "deleteTag";
    span.appendChild(txt);
    listMaterial[i].appendChild(span);
}

///////////////////////////////////// Create a New List /////////////////////////////////////
function newElement() {
    var list = document.createElement("li");
    var inputValue = document.getElementById("textBox").value;
    var text = document.createTextNode(inputValue);
    list.appendChild(text);

    if (inputValue == '') {
        alert("Write Something In Text Box !");
    } else {
        document.getElementById("listItems").appendChild(list);
    }

    document.getElementById("textBox").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("");
    span.className = "deleteTag";
    span.appendChild(txt);
    list.appendChild(span);

    for (i = 0; i < deleteTag.length; i++) {
        deleteTag[i].onclick = function () {
            var displayNone = this.parentElement;
            displayNone.style.display = "none";
        }
    }
}

/////////////////////////////////////////// Add Item By Clicking Enter Button /////////////////////////
var input = document.getElementById("textBox");
input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("addText").click();
    }
});

///////////////////////////////////// Click Close Item To Hide It /////////////////////////////////////
var deleteTag = document.getElementsByClassName("deleteTag");
var i;
for (i = 0; i < deleteTag.length; i++) {
    deleteTag[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

////////////////////////////////////// Create Overline On Items ///////////////////////////////////////
var list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);


var TasksHolder = document.getElementById("listItems");
var createNewTaskElement = function (taskString) {
    var checkBox = document.createElement("input");
    checkBox.type = "checkbox";
}

var taskCompleted = function () {
    var listItem = this.parentNode;
    TasksHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskIncomplete);
}
