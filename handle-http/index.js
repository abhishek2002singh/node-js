const http=require('http');

const server=http.createServer((req ,res)=>{
    

    if(req.url==='/'){
        res.end("hello from home side");
    }

    else if (req.url==='/about') {

        res.end("hello from about side")
    }

    else if(req.url==='/contect'){
        res.end("hello from contect side");
    }

    else{
        res.writeHead(404 , {"contect-type":"text.html"})
        console.log("404 error page");
    }
})

server.listen(8000 , "127.0.0.1" ,()=>{
    console.log("listen the port number is 8000")
})