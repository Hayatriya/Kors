document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const userid = document.getElementById('userid').value;
    const password = document.getElementById('password').value;

    const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Origin': 'https://hayatriya.github.io/resource_sharing/'
        },
        body: JSON.stringify({ userid, password }),
        credentials: 'include'
    });

    const data = await response.json();

    if (response.ok) {
        alert('Login successful: ' + data.message);
    } else {
        alert('Login failed: ' + data.message);
    }
});
