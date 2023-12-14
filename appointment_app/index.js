const itemList = document.getElementById('items');

function onsignup(event) {
    event.preventDefault();

    // Get form values
    const fname = document.getElementById('fname').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    // Create user data object
    const userData = {
        name: fname,
        mail: email,
        phone: phone,
    };

    // Display user details
    displayUserDetails(userData);

    // Clear form fields
    document.getElementById('fname').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
}

function displayUserDetails(userData) {
    // Create new list item
    const li = document.createElement('li');
    li.className = 'list-group-item';
    li.innerHTML = `${userData.name} ${userData.mail} ${userData.phone}`;

    // Create delete and edit buttons
    const delBtn = createButton('Delete', 'btn-danger', removeItem);
    const editBtn = createButton('Edit', 'btn-primary', editItem);

    // Append buttons to li
    li.appendChild(delBtn);
    li.appendChild(editBtn);

    // Append li to ul
    itemList.appendChild(li);

    // Save data to the server using Axios POST request
    axios.post("https://crudcrud.com/api/23b4f51bc117449fa79ad73e5d7fbd0e/userData", userData)
        .then((response) => {
            console.log(response);
        })
        .catch((err) => {
            console.log(err);
        });
}

function createButton(text, className, clickHandler) {
    const button = document.createElement('button');
    button.className = `btn ${className} btn-sm float-right`;
    button.appendChild(document.createTextNode(text));
    button.addEventListener('click', clickHandler);
    return button;
}

function removeItem() {
    // const li = this.parentElement;
    // const email = li.textContent.trim().split(' ')[1];
    // if (confirm('Are You Sure?')) {
    //     li.remove();
    //     // Remove data from the server using Axios DELETE request
    //     axios.delete(`https://crudcrud.com/api/23b4f51bc117449fa79ad73e5d7fbd0e/userData/${email}`)
    //         .then((response) => {
    //             console.log(response);
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // }
}

function editItem() {
    // const li = this.parentElement;
    // const email = li.textContent.trim().split(' ')[1];
    // const storedData = JSON.parse(localStorage.getItem(email));

    // // Fill inputs with user data for editing
    // document.getElementById('fname').value = storedData.name;
    // document.getElementById('email').value = storedData.mail;
    // document.getElementById('phone').value = storedData.phone;

    // // Remove data from the server using Axios DELETE request
    // axios.delete(`https://crudcrud.com/api/23b4f51bc117449fa79ad73e5d7fbd0e/userData/${email}`)
    //     .then((response) => {
    //         console.log(response);
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //     });

    // // Remove data from browser localStorage
    // li.remove();
    // localStorage.removeItem(email);
}

// Fetch data from the server on page load
document.addEventListener("DOMContentLoaded", () => {
    axios.get('https://crudcrud.com/api/23b4f51bc117449fa79ad73e5d7fbd0e/userData')
        .then((response) => {
            response.data.forEach(displayUserDetails);
        })
        .catch((error) => {
            console.error(error);
        });
});
