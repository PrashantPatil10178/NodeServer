const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const publicPath = path.join(__dirname, 'public');

const server = http.createServer((req, res) => {

    res.setHeader('Content-Type', 'text/html');

    fs.readFile(path.join(publicPath, 'index.html'), (err, data) => {
        if (err) {
            
            res.writeHead(500);
            res.end('Internal Server Error');
        } else {
          
            res.writeHead(200);
            res.end(data);
        }
    });
});


server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
