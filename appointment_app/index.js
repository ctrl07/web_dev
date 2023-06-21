itemList=document.getElementById('items');

function onsignup(event) {
    event.preventDefault();
    let fname=document.getElementById('fname').value;
    let email=document.getElementById('email').value;
    let phone=document.getElementById('phone').value;

    //Create new list 
    let li = document.createElement('li');
    li.className='list-group-item';
    let textNode = document.createTextNode(fname+' '+email+' '+phone);

    // add textNode to li
    li.appendChild(textNode);

    //Create delete and edit buttons
    let delBtn = document.createElement('button');
    let editBtn = document.createElement('button');

    //Add classes to the buttons
    delBtn.className = 'btn btn-danger btn-sm float-right delete';
    editBtn.className = 'btn btn-primary btn-sm float-right edit';
    
    //Append text node
    delBtn.appendChild(document.createTextNode('Delete'));
    editBtn.appendChild(document.createTextNode('Edit'));

    //Append buttons to li
    li.appendChild(delBtn);
    li.appendChild(editBtn);

    //append li to ul
    itemList.appendChild(li);

    //Clear form fields 
    document.getElementById('fname').value='';
    document.getElementById('email').value='';
    document.getElementById('phone').value='';

    let userData = {
        name: fname,
        mail: email,
        phone: phone,
    }

    localStorage.setItem(userData.mail, JSON.stringify(userData));
};

//Remove item
itemList.addEventListener('click', removeItem);

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are You Sure?')){
            let li=e.target.parentElement;
            li.remove();
            let email = li.textContent.trim().split(' ')[1];
            localStorage.removeItem(email);
        }
    }
}

itemList.addEventListener('click', editItem);

function editItem(e) {
    if (e.target.classList.contains('edit')) {
        let li = e.target.parentElement;
        let email = li.textContent.trim().split(' ')[1];
        let storedData = JSON.parse(localStorage.getItem(email));

        //fill iinputs with the user data that needs to be edit
        document.getElementById('fname').value = storedData.name;
        document.getElementById('email').value = storedData.mail;
        document.getElementById('phone').value = storedData.phone;

        //remove data from browser and localStorage
        li.remove();
        localStorage.removeItem(email);
    }
}

