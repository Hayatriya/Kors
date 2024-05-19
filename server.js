

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors({
    origin: 'https://hayatriya.github.io' // Allow this origin
}));
app.use(bodyParser.json());

// Dummy user data for demonstration
const users = {
    'testuser1': {
        password: 'password1',
        email: 'testuser1@example.com',
        phone: '123-456-7891',
        address: '123 Test St, Test City, Test Country',
        apiKey: 'abc123xyz1'
    },
    'testuser2': {
        password: 'password2',
        email: 'testuser2@example.com',
        phone: '123-456-7892',
        address: '124 Test St, Test City, Test Country',
        apiKey: 'abc123xyz2'
    },
    'testuser3': {
        password: 'password3',
        email: 'testuser3@example.com',
        phone: '123-456-7893',
        address: '125 Test St, Test City, Test Country',
        apiKey: 'abc123xyz3'
    },
    'testuser4': {
        password: 'password4',
        email: 'testuser4@example.com',
        phone: '123-456-7894',
        address: '126 Test St, Test City, Test Country',
        apiKey: 'abc123xyz4'
    },
    'testuser5': {
        password: 'password5',
        email: 'testuser5@example.com',
        phone: '123-456-7895',
        address: '127 Test St, Test City, Test Country',
        apiKey: 'abc123xyz5'
    }
};

// Route to handle POST requests for user data
app.post('/data', (req, res) => {
    const { username, password } = req.body;

    if (users[username] && users[username].password === password) {
        // Return user details excluding the password
        const { password, ...userDetails } = users[username];
        res.json(userDetails);
    } else {
        res.status(401).json({ error: 'Invalid username or password' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
