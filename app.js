const http = require('http')
const path = require('path')
const fs = require('fs');
const { log } = require('console');
const { transcode } = require('buffer');

const server = http.createServer((req, res) => {

    // Build file path 
    let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url)
    // console.log(filePath);
    // res.end()
    // Get the extension of file
    let extname = path.extname(filePath)
    //Initial content type
    let contentType = 'text/html'
    //Check ext and set content type
    switch (extname) {
        case '.js':
            contentType = 'text/javascript'
            break;
        case '.css':
            contentType = 'text/css'
            break;
        case '.json':
            contentType = 'text/json'
            break;
        case '.png':
            contentType = 'text/png'
            break;
        case '.jpg':
            contentType = 'text/jpg'
            break;
        default:
            break;
    }

    // Read file
    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code == 'ENOENT') {
                // Page not found
                fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
                    if (err) throw err;
                    res.writeHead(404, { 'Content-Type': 'text/html' })
                    res.end(content, 'utf8')
                })
            } else {
                // Some server error
                res.writeHead(500)
                res.end(`Server Error: ${err.code}`)
            }
        } else {
            // Success
            res.writeHead(200, { 'Content-Type': contentType })
            res.end(content, 'utf8')
        }
    })

    // if(req.url === '/'){
    //     fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
    //         if (err) throw err;
    //         res.writeHead(200, {'Content-Type': 'text/html'})
    //         res.end(content)
    //     })
    // }else if(req.url == '/about'){
    //     fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, content) => {
    //         if (err) throw err;
    //         res.writeHead(200, {'Content-Type': 'text/html'})
    //         res.end(content)
    //     })
    // }
    // if(req.url === '/api/users'){
    //     const users = [
    //         {name: 'Bob', age: 40},
    //         {name: 'Ali', age: 30}
    //     ]
    //     res.writeHead(200, {'Content-Type': 'application/json'})
    //     res.end(JSON.stringify(users))
    // }
    // console.log(req.url);
})
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`))
