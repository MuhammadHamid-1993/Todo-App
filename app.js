
var list = document.getElementById("list")

function addTodo() {
    var todo_item = document.getElementById("todo-item");

    var li = document.createElement('li')

    var liText = document.createTextNode(todo_item.value)

    var delBtn = document.createElement("button");
    var delText = document.createTextNode("Delete");
    delBtn.setAttribute("class","btn")
    delBtn.setAttribute("onclick","deleteItem(this)")
    delBtn.appendChild(delText)

    var editBtn = document.createElement("button");
    var editText = document.createTextNode("EDIT");
    editBtn.setAttribute("onclick","editItem(this)")
    editBtn.appendChild(editText)

    li.appendChild(delBtn)

    li.appendChild(liText)
    list.appendChild(li)
    console.log(li)
}

function deleteItem(e) {
    e.parentNode.remove()
}
function editItem(e) {
    console.log(e.parentNode.childNode[0])
    e.parentNode.nodeValue = "Ahmad"
}
function deleteAll(){
    list.innerHTML = ""
}
