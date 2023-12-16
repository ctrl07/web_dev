const apiUrl = 'https://crudcrud.com/api/ec5ea56396374c928d00041f744746aa/orders';
const itemList = document.getElementById('items');

// Load existing orders when the page is loaded
document.addEventListener('DOMContentLoaded', loadOrders);

function onsignup(event) {
    event.preventDefault();

    const order = document.getElementById('order').value;
    const pname = document.getElementById('pname').value;
    const categ = document.getElementById('categ').value;

    // Create new list item
    const li = document.createElement('li');
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(`${order} ${pname} ${categ}`));

    // Create delete button
    const delBtn = document.createElement('button');
    delBtn.className = 'btn btn-danger btn-sm float-right delete';
    delBtn.appendChild(document.createTextNode('Delete'));

    // Append delete button to li
    li.appendChild(delBtn);

    // Append li to ul
    itemList.appendChild(li);

    // Clear form fields
    document.getElementById('order').value = '';
    document.getElementById('pname').value = '';
    document.getElementById('categ').value = '';

    // Save order to the API
    saveOrder({ order, pname, categ });
}

// Remove item
itemList.addEventListener('click', removeItem);

function removeItem(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm('Are You Sure?')) {
            const li = e.target.parentElement;
            li.remove();
            const orderId = li.id;
            // Remove order from the API
            deleteOrder(orderId);
        }
    }
}

function loadOrders() {
    // Fetch existing orders from the API using Axios
    axios.get(apiUrl)
        .then(response => {
            // Display existing orders
            response.data.forEach(order => displayOrder(order));
        })
        .catch(error => console.error('Error fetching orders:', error));
}

function saveOrder(orderData) {
    // Send a POST request to save the order to the API using Axios
    axios.post(apiUrl, orderData)
        .then(response => console.log('Order saved:', response.data))
        .catch(error => console.error('Error saving order:', error));
}

function deleteOrder(orderId) {
    // Send a DELETE request to remove the order from the API using Axios
    axios.delete(`${apiUrl}/${orderId}`)
        .then(response => console.log('Order deleted:', response.data))
        .catch(error => console.error('Error deleting order:', error));
}

function displayOrder(order) {
    // Create new list item
    const li = document.createElement('li');
    li.className = 'list-group-item';
    li.id = order._id;
    li.appendChild(document.createTextNode(`${order.order} ${order.pname} ${order.categ}`));

    // Create delete button
    const delBtn = document.createElement('button');
    delBtn.className = 'btn btn-danger btn-sm float-right delete';
    delBtn.appendChild(document.createTextNode('Delete'));

    // Append delete button to li
    li.appendChild(delBtn);

    // Append li to ul
    itemList.appendChild(li);
}
