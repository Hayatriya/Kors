document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const userid = document.getElementById('userid').value;
    const password = document.getElementById('password').value;

    const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Origin': 'https://hayatriya.github.io'
        },
        body: JSON.stringify({ userid, password }),
        credentials: 'include'
    });

    const data = await response.json();

    if (response.ok) {
        const userDetails = data.userDetails;
        alert(`Login successful:
               Name: ${userDetails.name}
               Email: ${userDetails.email}
               Phone: ${userDetails.phone}
               Address: ${userDetails.address}`);
    } else {
        alert('Login failed: ' + data.message);
    }
});
