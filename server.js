const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

const users = [
    { userid: 'user1', password: 'pass1', name: 'John Doe', email: 'john@example.com', phone: '123-456-7890', address: '123 Main St' },
    { userid: 'user2', password: 'pass2', name: 'Jane Smith', email: 'jane@example.com', phone: '987-654-3210', address: '456 Elm St' },
    { userid: 'user3', password: 'pass3', name: 'Alice Johnson', email: 'alice@example.com', phone: '555-666-7777', address: '789 Oak St' },
    { userid: 'user4', password: 'pass4', name: 'Bob Brown', email: 'bob@example.com', phone: '444-555-6666', address: '321 Pine St' },
    { userid: 'user5', password: 'pass5', name: 'Charlie Davis', email: 'charlie@example.com', phone: '333-444-5555', address: '654 Maple St' }
];

app.use(bodyParser.json());

const corsOptions = {
    origin: 'https://hayatriya.github.io/resource_sharing/',
    credentials: true
};

app.use(cors(corsOptions));

app.post('/login', (req, res) => {
    const { userid, password } = req.body;

    const user = users.find(u => u.userid === userid && u.password === password);

    if (user) {
        res.status(200).json({ 
            message: 'Login successful',
            userDetails: {
                name: user.name,
                email: user.email,
                phone: user.phone,
                address: user.address
            }
        });
    } else {
        res.status(401).json({ message: 'Invalid user ID or password' });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
