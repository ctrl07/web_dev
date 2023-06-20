function onsignup(event) {
    event.preventDefault();
    let fname=document.getElementById('fname').value;
    let email=document.getElementById('email').value;
    let phone=document.getElementById('phone').value;
    let time=document.getElementById('time').value;
    localStorage.setItem('name',fname);
    localStorage.setItem('mail',email);
    localStorage.setItem('phone',phone);
    localStorage.setItem('time',time);

};

