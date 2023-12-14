const itemList = document.getElementById('items');

function onAddTask(event) {
    event.preventDefault();

    // Get form values
    const task = document.getElementById('task').value;
    const description = document.getElementById('description').value;

    // Create task data object
    const taskData = {
        task: task,
        description: description,
        completed: false, // Initially set as incomplete
    };

    // Save data to the server using Axios POST request
    axios.post("https://crudcrud.com/api/99ccbec4007746e3a6de173b347bf692/taskData", taskData)
        .then((response) => {
            console.log(response);
        })
        .catch((err) => {
            console.log(err);
        });

    // Display task details
    displayTaskDetails(taskData);

    // Clear form fields
    document.getElementById('task').value = '';
    document.getElementById('description').value = '';
}

function displayTaskDetails(taskData) {
    // Create new list item
    const li = document.createElement('li');
    li.className = 'list-group-item';
    li.innerHTML = `<strong>${taskData.task}</strong><br>${taskData.description || 'No description'}`;

    // Set data-task-id attribute
    li.dataset.taskId = taskData._id;

    // Create buttons
    const delBtn = createButton('Delete', 'btn-danger', removeTask);
    const doneBtn = createButton('Done', 'btn-success', markTaskDone);

    // Append buttons to li
    li.appendChild(delBtn);
    li.appendChild(doneBtn);

    // Append li to ul
    itemList.appendChild(li);
}

// Fetch data from the server on page load
window.addEventListener("DOMContentLoaded", () => {
    axios.get('https://crudcrud.com/api/99ccbec4007746e3a6de173b347bf692/taskData')
        .then((response) => {
            response.data.forEach(displayTaskDetails);
        })
        .catch((error) => {
            console.error(error);
        });
});

// Helper function to create buttons
function createButton(text, className, clickHandler) {
    const button = document.createElement('button');
    button.className = `btn ${className} btn-sm float-right me-2`; // Added margin to separate buttons
    button.appendChild(document.createTextNode(text));
    button.addEventListener('click', clickHandler);
    return button;
}

function removeTask() {
    const li = this.parentElement;
    const taskId = li.dataset.taskId;

    if (confirm('Are You Sure?')) {
        li.remove();

        // Remove data from the server using Axios DELETE request
        axios.delete(`https://crudcrud.com/api/99ccbec4007746e3a6de173b347bf692/taskData/${taskId}`)
            .then((response) => {
                console.log(response);
            })
            .catch((err) => {
                console.log(err);
            });
    }
}

function markTaskDone() {
    const li = this.parentElement;
    const taskId = li.dataset.taskId;

    // Update the completed status locally
    li.classList.add('list-group-item-success');

    // Update the completed status on the server using Axios PUT request
    axios.put(`https://crudcrud.com/api/99ccbec4007746e3a6de173b347bf692/taskData/${taskId}`, { completed: true })
        .then((response) => {
            console.log(response);
        })
        .catch((err) => {
            console.log(err);
        });
}
