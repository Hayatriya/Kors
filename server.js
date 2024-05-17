const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

const users = [
    { userid: 'user1', password: 'pass1' },
    { userid: 'user2', password: 'pass2' },
    { userid: 'user3', password: 'pass3' },
    { userid: 'user4', password: 'pass4' },
    { userid: 'user5', password: 'pass5' }
];

app.use(bodyParser.json());

const corsOptions = {
    origin: 'https://hayatriya.github.io',
    credentials: true
};

app.use(cors(corsOptions));

app.post('/login', (req, res) => {
    const { userid, password } = req.body;

    const user = users.find(u => u.userid === userid && u.password === password);

    if (user) {
        res.status(200).json({ message: 'Login successful' });
    } else {
        res.status(401).json({ message: 'Invalid user ID or password' });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
