
const fs = require('fs');
 
// WRITE IN FILE 
fs.writeFile('./example.txt', 'Hello, Dosto!', (err) => {
    if (err) throw err;
    console.log('File has been written');
});

// READ FROM FILE
fs.readFile('./example.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log('File content:', data);
});


