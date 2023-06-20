function onsignup(event) {
    event.preventDefault();
    let fname=document.getElementById('fname').value;
    let email=document.getElementById('email').value;
    let phone=document.getElementById('phone').value;
    let time=document.getElementById('time').value;

    let userData = {
        name: fname,
        mail: email,
        phone: phone,
        time: time
    }

    localStorage.setItem('userData', JSON.stringify(userData));
};

