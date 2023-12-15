const orderList = document.getElementById('orders');

// Fetch data from the server on page load
window.addEventListener("DOMContentLoaded", () => {
    fetchOrders();
});

function fetchOrders() {
    // Fetch all orders from the server using Axios GET request
    axios.get('https://crudcrud.com/api/ec5ea56396374c928d00041f744746aa/orders')
        .then((response) => {
            // Display all orders
            response.data.forEach(displayOrderDetails);
        })
        .catch((error) => {
            console.error(error);
        });
}

function onPlaceOrder(event) {
    event.preventDefault();

    // Get form values
    const food = document.getElementById('food').value;
    const tableNumber = document.getElementById('tableNumber').value;
    const totalAmount = document.getElementById('totalAmount').value;

    // Create order data object
    const orderData = {
        food: food,
        tableNumber: tableNumber,
        totalAmount: totalAmount,
    };

    // Save data to the server using Axios POST request
    axios.post("https://crudcrud.com/api/ec5ea56396374c928d00041f744746aa/orders", orderData)
        .then((response) => {
            console.log(response);

            // Display all orders after successful posting
            fetchOrders();

            // Clear form fields 
            document.getElementById('food').value = '';
            document.getElementById('tableNumber').value = '';
            document.getElementById('totalAmount').value = '';
        })
        .catch((error) => {
            console.error(error);
        });
}

function displayOrderDetails(orderData) {
    // Create new list item
    const li = document.createElement('li');
    li.className = 'list-group-item';
    li.innerHTML = `<strong>Food Item:</strong> ${orderData.food}<br>
                    <strong>Table Number:</strong> ${orderData.tableNumber}<br>
                    <strong>Total Amount:</strong> ${orderData.totalAmount}`;

    // Create delete button
    const delBtn = createButton('Delete', 'btn-danger', removeOrder.bind(null, li, orderData));

    // Append delete button to li
    li.appendChild(delBtn);

    // Append li to ul
    orderList.appendChild(li);
}


// Helper function to create delete buttons
function createButton(text, className, clickHandler) {
    const button = document.createElement('button');
    button.className = `btn ${className} btn-sm float-right me-2`;
    button.appendChild(document.createTextNode(text));
    button.addEventListener('click', clickHandler);
    return button;
}

function removeOrder(li, orderData) {
    // Remove data from the server using Axios DELETE request
    axios.delete(`https://crudcrud.com/api/ec5ea56396374c928d00041f744746aa/orders/${orderData._id}`)
        .then((response) => {
            console.log(response);

            // Remove the li element from the UI
            li.remove();
        })
        .catch((error) => {
            console.error(error);
        });
}
