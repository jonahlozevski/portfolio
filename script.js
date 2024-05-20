document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
    
    if (name && email && message) {
        alert('Thank you for your message!');
    } else {
        alert('Please fill out all fields.');
    }
});
