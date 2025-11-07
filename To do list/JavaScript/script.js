function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();    

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }
  const li = document.createElement("li");
  li.innerHTML = `
    <span>${taskText}</span>
    <div>
      <button class="edit" onclick="editTask(this)">Edit</button>
      <button class="delete" onclick="deleteTask(this)">Delete</button>
    </div> `;
    document.getElementById("taskList").appendChild(li);
    input.value = "";
}
  function editTask(button) {
  const li = button.parentElement.parentElement;
  const span = li.querySelector("span");
  const newText = prompt("Edit your task:", span.textContent);
  if (newText !== null && newText.trim() !== "") {
    span.textContent = newText.trim();
  }
}
  function deleteTask(button) {   
  button.parentElement.parentElement.remove();
}
