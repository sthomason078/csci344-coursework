function addTodo() {
    const input = document.querySelector("#todoInput");
    const list = document.querySelector("#todoList");
    list.insertAdjacentHTML("beforeend", `<li>${input.value}</li>`)
    input.value = "";
}