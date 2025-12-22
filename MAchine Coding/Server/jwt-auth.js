const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const app = express();
app.use(express.json());

let users = [];

const SECRET_KEY = '1234567890abcdef';
function setUser({ email, role }) {
    const tocken = jwt.sign({
        email: email,
        role: role
    }, SECRET_KEY)
    return tocken;
}

function getUser(token) {
    try {
        const user = jwt.verify(token, SECRET_KEY);
        return user;
    }
    catch (err) {
        return null;
    }
}

app.post('/login', (req, res) => {
    const { email, role, password } = req.body;


    const user = users.find(u => u.email === email && u.role === role);

    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }


    bcrypt.compare(password, user.password, (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Error during authentication' });
        }

        if (result) {

            const token = setUser({ email, role });
            res.cookie('token', token);
            res.json({ message: 'User logged in', token: token });
        } else {

            res.status(401).json({ message: 'Invalid credentials' });
        }
    });
})

app.post('/signup', async (req, res) => {
    const { email, role, password } = req.body;
    const token = setUser({ email, role });
    const hash = await bcrypt.hash(password, 12);
    users.push({ email: email, role: role, password: hash });
    console.log(users);
    res.cookie('token', token);
    res.json({ message: 'User signed up', token: token });
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})