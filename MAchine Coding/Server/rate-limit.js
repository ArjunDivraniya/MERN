const express = require('express');
const rateLimit = require('express-rate-limit');
const app = express();
app.use(express.json());

const limit = rateLimit({
    max:50,
    WindowMS :60*1000,
    message : "Too Many request on your ip ,please wait 1 min 10 try again"
})
app.use(limit);

app.get('/', (req, res) => {
    res.send('Hello, world!');
});

const PORT = process.env.PORT || 3000;      
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});