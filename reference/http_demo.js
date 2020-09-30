const { log } = require('console');
const http = require('http')

// Create a server object
http.createServer((req, res) => {
    // Write a response
    res.write("Hello world");
    res.end()
}).listen(5000, () => console.log('Server running...'))

