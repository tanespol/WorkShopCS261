
function submitLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch('https://restapi.tu.ac.th/api/v1/auth/Ad/verify', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Application-Key': ''
        },
        body: JSON.stringify({UserName: username, PassWord: password })
    })
    .then(response => response.json())
    .then(data => {
        console.log('API Response:', data);
        if (data.status === true) {  
            document.getElementById('message').innerText = `Login succeed , ${data.displayname_th}!`;  
        } else {
            document.getElementById('message').innerText = 'Login failed: ' + (data.message || 'No error message');
        }
    })
    .catch(error => console.error('Error:', error));
}


