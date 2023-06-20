let form=document.getElementById('addForm');
let itemList= document.getElementById('items');

//Form submit event
form.addEventListener('submit',addItem);
//Delete event
itemList.addEventListener('click', removeItem);

// Add Item
function addItem(e){
    e.preventDefault();
     
    // get input value

    let newItem=document.getElementById('item').value;

    // Create new li element
    let li = document.createElement('li');
    // Add Class
    li.className='list-group-item';
    // Add text node with input value

    li.appendChild(document.createTextNode(newItem));

    //Create del button
    let delBtn = document.createElement('button');

    //Add classes to button
    delBtn.className = 'btn btn-danger btn-sm float-right delete';

    //Append text node
    delBtn.appendChild(document.createTextNode('X'));

    //Append button to li
    li.appendChild(delBtn);

    //append li to list
    itemList.appendChild(li);

}

//Remove item

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are You Sure?')){
            let li=e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}