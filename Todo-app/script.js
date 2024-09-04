const inputBox = document.querySelector(".inputBox")
const addTodo = document.querySelector(".Add_todo")
const list = document.querySelector(".list")


let inputval = ''
addTodo.addEventListener("click", () => {
     inputval = inputBox.value.trim()
    const li = document.createElement("li")
    li.classList.add("list_item")
    li.innerHTML = `<li class="list-item">
                        <span>${inputval}</span>
                        <button type="button" class="edit-btn" onclick="Edit_todo(this)">Edit</button>
                        <button type="button" class="remove-btn" onclick="Remove_todo(this)">Remove</button>
                    </li>`
    list.appendChild(li)
    inputBox.value = ''

})

const Remove_todo = (ele) => {
    ele.parentElement.remove()
}

const Edit_todo = (ele) => {
    const editval = ele.previousElementSibling
    console.log(inputBox.value = editval.textContent)
    const tasksindex = inputval.indexOf(editval.textContent)
    if (tasksindex !== -1) {
        inputval.slice(tasksindex, 1)
      }
      editval.parentElement.remove();
      console.log(tasksindex)
}

