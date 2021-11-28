const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('Welcome to our home page')
        
    }
    else if(req.url === '/about'){
        res.end('Here is the about us home page')
    }

    else{
        res.end(`
    <h1>Oopss</h1>
    <p>We cant seem to find the page you are looking for</p>
    <a href="/">Go back to the Home</a>`)
    }
})

server.listen(5000)