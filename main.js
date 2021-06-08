let list = document.querySelector('ul');
list.addEventListener('click', function (e) {
    if(e.target.tagName === "LI") {
       e.target.classList.any('checked');
    } else if(e.target.tagName === "SPAN") {
       let div = e.target.parentNode;
       div.remove();
    }
}, false);

function newElement() {
    let li = document.createElement('li');
    let inputValue = document.getElementById('toDoEl').value;
    let t = document.createTextNode(inputValue);
    li.appendChild(t);
    if(inputValue == "") {
       alert("Write your task!");
    } else {
       document.getElementById('list').appendChild(li);
    }
    document.getElementById('toDoEl').value = "";
    let span = document.createElement('SPAN');
    let txt = document.createTextNode("Del");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
}