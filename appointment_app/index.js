function onsignup(event) {
    event.preventDefault();
    let fname=document.getElementById('fname').value;
    let email=document.getElementById('email').value;
    let phone=document.getElementById('phone').value;
    let time=document.getElementById('time').value;

    //Create new list 
    let listItem = document.createElement('li');
    let textNode = document.createTextNode(fname+' '+email+' '+phone+' '+time);
    listItem.appendChild(textNode);

    //Append li to ul
    let displayList = document.getElementById('item-group');
    displayList.appendChild(listItem);

    //Clear form fields 
    document.getElementById('fname').value='';
    document.getElementById('email').value='';
    document.getElementById('phone').value='';
    document.getElementById('time').value='';


    let userData = {
        name: fname,
        mail: email,
        phone: phone,
    }

    localStorage.setItem(userData.mail, JSON.stringify(userData));
};

