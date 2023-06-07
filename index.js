function onsignup(event) {
    event.preventDefault();
    console.log(event.target.fname.value) 
    console.log(event.target.email.value)
    console.log(event.target.phone.value)
    console.log(event.target.time.value)
};