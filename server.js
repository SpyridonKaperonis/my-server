const http = require('http')

const hostN = process.env.hostname
const port = process.env.PORT || 3002

const server = http.createServer((req, res) =>{
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.write('Hello....\n')
    res.write('Hello...\n')
    res.end('Hello.')
})

server.listen(port, hostN, () =>{
    console.log(`Server running at http://localhost:${port}/`)
})

