document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector('#create-task-form');
  const taskList = document.querySelector('#tasks');
  
  form.addEventListener('submit', (e) =>{
    e.preventDefault();
    const taskInput = document.querySelector('#new-task-description');
    const taskText = taskInput.value.trim();
  
    if (taskText.length > 0) {
      const taskItem = document.createElement('li');
      taskItem.textContent = taskText;
  
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'x';
      deleteButton.addEventListener('click', (e)=> {
        taskItem.remove();
      });
  
      taskItem.appendChild(deleteButton);
      taskList.appendChild(taskItem);
      taskInput.value = '';
    }
  });
  
});

