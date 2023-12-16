const apiUrl = 'https://crudcrud.com/api/c1ae2cc5d74e4180b6cecb594bd356ae/orders';
const itemList = document.getElementById('items');
const totalValueElement = document.getElementById('totalValue');

let totalValue = 0;

document.addEventListener('DOMContentLoaded', function () {
    loadOrders();
});

function addOrder(event) {
    event.preventDefault();

    const order = parseFloat(document.getElementById('order').value) || 0;
    const pname = document.getElementById('pname').value;

    totalValue += order;
    updateTotalValue();

    const li = document.createElement('li');
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(`${order} ${pname}`));

    const delBtn = document.createElement('button');
    delBtn.className = 'btn btn-danger btn-sm float-right delete';
    delBtn.appendChild(document.createTextNode('Delete'));

    li.appendChild(delBtn);
    itemList.appendChild(li);

    document.getElementById('order').value = '';
    document.getElementById('pname').value = '';

    saveOrder({ order, pname });
}

itemList.addEventListener('click', removeItem);

function removeItem(e) {
    if (e.target.classList.contains('delete')) {
        const li = e.target.parentElement;
        const orderId = li.id;

        totalValue -= parseFloat(li.firstChild.textContent) || 0;
        updateTotalValue();

        li.remove();
        deleteOrder(orderId);
    }
}

function loadOrders() {
    axios.get(apiUrl)
        .then(response => {
            response.data.forEach(order => displayOrder(order));
        })
        .catch(error => console.error('Error fetching orders:', error));
}

function saveOrder(orderData) {
    axios.post(apiUrl, orderData)
        .then(response => console.log('Order saved:', response.data))
        .catch(error => console.error('Error saving order:', error));
}

function deleteOrder(orderId) {
    axios.delete(`${apiUrl}/${orderId}`)
        .then(response => console.log('Order deleted:', response.data))
        .catch(error => console.error('Error deleting order:', error));
}

function displayOrder(order) {
    totalValue += order.order;
    updateTotalValue();

    const li = document.createElement('li');
    li.className = 'list-group-item';
    li.id = order._id;
    li.appendChild(document.createTextNode(`${order.order} ${order.pname}`));

    const delBtn = document.createElement('button');
    delBtn.className = 'btn btn-danger btn-sm float-right delete';
    delBtn.appendChild(document.createTextNode('Delete'));

    li.appendChild(delBtn);
    itemList.appendChild(li);
}

function updateTotalValue() {
    totalValueElement.textContent = totalValue.toFixed(2);
}
