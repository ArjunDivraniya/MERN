const express = require('express');
const app = express();
app.use(express.json());
const PORT = 5000;

app.get('/search', async (req, res) => {
    const query = req.query.q?.toLowerCase();
   const response = await fetch(`https://jsonplaceholder.typicode.com/photos?&q=${query}`)
    const allData = await response.json();
    const filterData = allData.filter((i) => {
        return i.title.toLowerCase().includes(query);
    })

    res.json(filterData);


});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

