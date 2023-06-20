let form=document.getElementById('addForm');
let itemList= document.getElementById('items');
let filter = document.getElementById('filter');

//Form submit event
form.addEventListener('submit',addItem);
//Delete event
itemList.addEventListener('click', removeItem);
//Filter event
filter.addEventListener('keyup', filterItems);

// Add Item
function addItem(e){
    e.preventDefault();
     
    // get input value

    let newItem=document.getElementById('item',).value;
    let newItem1=document.getElementById('item1',).value;

    // Create new li element
    let li = document.createElement('li');
    // Add Class
    li.className='list-group-item';
    // Add text node with input value

    li.appendChild(document.createTextNode(newItem));

    li.appendChild(document.createTextNode(newItem1));

    //Create del button
    let delBtn = document.createElement('button');
    let edtBtn = document.createElement('button');
    //Add classes to button
    delBtn.className = 'btn btn-danger btn-sm float-right delete';
    edtBtn.className = 'btn btn-primary btn-sm float-right edit';

    //Append text node
    delBtn.appendChild(document.createTextNode('X'));
    edtBtn.appendChild(document.createTextNode('Edit'));

    //Append button to li
    li.appendChild(delBtn);
    li.appendChild(edtBtn);

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

//Filter Items

function filterItems(e){
    //convert to lowercase
    let text= e.target.value.toLowerCase();
    //get lis
    let items=itemList.getElementsByTagName('li');

    //Convert to array
    Array.from(items).forEach(function(item){
        let itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text)!= -1){
            item.style.display='block';
        }else {
            item.style.display = 'none';
        }
    });

}

