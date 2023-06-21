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

    //Create del button
    let delBtn = document.createElement('button');

    //Add classes to button
    delBtn.className = 'btn btn-danger btn-sm float-right delete';

    //Append text node
    delBtn.appendChild(document.createTextNode('Delete'));

    //Append button to li
    li.appendChild(delBtn);

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
