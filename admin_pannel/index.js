const itemList = document.getElementById('items');

function onsignup(event) {
    event.preventDefault();

    // Get form values
    const fname = document.getElementById('expense').value;
    const email = document.getElementById('desc').value;
    const category = document.getElementById('categ').value;  

    // Create user data object
    const userData = {
        name: fname,
        mail: email,
        category: category, 
    };

    // Save data to the server using Axios POST request
    axios.post("https://crudcrud.com/api/99ccbec4007746e3a6de173b347bf692/userData", userData)
    .then((response) => {
        console.log(response);
    })
    .catch((err) => {
        console.log(err);
    });

    // Display user details
    displayUserDetails(userData);

    // Clear form fields
    document.getElementById('expense').value = '';
    document.getElementById('desc').value = '';
}

function displayUserDetails(userData) {
    // Create new list item
    const li = document.createElement('li');
    li.className = 'list-group-item';
    li.innerHTML = `${userData.name} ${userData.mail} ${userData.category}`;  // Updated property to category

    // Set data-user-id attribute
    li.dataset.userId = userData._id;

    // Create delete and edit buttons
    const delBtn = createButton('Delete', 'btn-danger', removeItem);

    // Append buttons to li
    li.appendChild(delBtn);

    // Append li to ul
    itemList.appendChild(li);
}

// Fetch data from the server on page load
window.addEventListener("DOMContentLoaded", () => {
    axios.get('https://crudcrud.com/api/99ccbec4007746e3a6de173b347bf692/userData')
        .then((response) => {
            response.data.forEach(displayUserDetails);
        })
        .catch((error) => {
            console.error(error);
        });
});

// Helper function to create buttons
function createButton(text, className, clickHandler) {
    const button = document.createElement('button');
    button.className = `btn ${className} btn-sm float-right`;
    button.appendChild(document.createTextNode(text));
    button.addEventListener('click', clickHandler);
    return button;
}

function removeItem() {
    const li = this.parentElement;
    const userId = li.dataset.userId;

    if (confirm('Are You Sure?')) {
        li.remove();

        // Remove data from the server using Axios DELETE request
        axios.delete(`https://crudcrud.com/api/99ccbec4007746e3a6de173b347bf692/userData/${userId}`)
            .then((response) => {
                console.log(response);
            })
            .catch((err) => {
                console.log(err);
            });
    }
}

