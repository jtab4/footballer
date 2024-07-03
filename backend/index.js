const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const connectDB = require('./auth/db');
const User = require('./models/User');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

connectDB();

app.use(cors());
app.use(bodyParser.json());

const secretKey = process.env.SECRET_KEY;

app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email, password });

        if (user) {
            const token = jwt.sign({ id: user._id }, secretKey, { expiresIn: '1h' });
            res.json({ token });
        } else {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
});

function authenticateToken(req, res, next) {
    const token = req.header('Authorization')?.split(' ')[1];
    if (!token) return res.sendStatus(401);

    jwt.verify(token, secretKey, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
}

app.get('/protected', authenticateToken, (req, res) => {
    res.json({ message: 'This is a protected route', user: req.user });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
