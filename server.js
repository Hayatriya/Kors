const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');

const app = express();
const PORT = 3000;

// Parse JSON bodies
app.use(bodyParser.json());

// Mock database of users (for demonstration)
const users = [
    { username: 'user1', password: 'password1', usermailid: 'user1@example.com', mobile: '1234567890', apiKey: 'user1-api-key' },
    { username: 'user2', password: 'password2', usermailid: 'user2@example.com', mobile: '9876543210', apiKey: 'user2-api-key' }
];

// Login route
app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    // Simulate authentication
    const user = users.find(u => u.username === username && u.password === password);
    
    if (!user) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }

    try {
        // Fetch user details from the evil server (which has misconfigured CORS)
        let response = await fetch('http://localhost:4000/userdetails', {
            headers: {
                'Authorization': 'Bearer userToken' // Example token
            }
        });

        let userData = await response.json();

        // Return user details to the client
        res.json({
            usermailid: user.usermailid,
            mobile: user.mobile,
            apiKey: userData.apiKey // Assume the misconfigured server sends the admin API key
        });

    } catch (error) {
        console.error('Error fetching user details:', error);
        res.status(500).json({ message: 'Error fetching user details' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Backend server is running on http://localhost:${PORT}`);
});

