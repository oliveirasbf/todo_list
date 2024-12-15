function addTask() {
    const taskInput = document.getElementById('newTask');
    const taskList = document.getElementById('tasks');
    if (taskInput.value.trim()) {
        const li = document.createElement('li');
        li.textContent = taskInput.value;
        taskList.appendChild(li);
        taskInput.value = '';
    }
}

function addSuggestion() {
    const suggestionInput = document.getElementById('newSuggestion');
    const suggestionList = document.getElementById('suggestions');
    if (suggestionInput.value.trim()) {
        const li = document.createElement('li');
        li.textContent = suggestionInput.value;
        suggestionList.appendChild(li);
        suggestionInput.value = '';
    }
}
