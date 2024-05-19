const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Dummy user data for demonstration
const users = {
    'admin': {
        password: 'admin1',
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

// CORS middleware with misconfiguration
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', req.headers.origin); // Reflects the request origin
    res.header('Access-Control-Allow-Credentials', 'true'); // Allows credentials
    res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    next();
});

// Route to handle GET request for all users' API keys
app.get('/allUsers/apiKeys', (req, res) => {
    const apiKeys = Object.values(users).map(user => ({ email: user.email, apiKey: user.apiKey }));
    res.json(apiKeys);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

