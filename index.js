const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req,res)=>{
    const data = fs.readFileSync (`${__dirname}/userApi/maybatchdata.json`,'utf-8');
    const objData = JSON.parse(data);
    const mayBatchData = JSON.stringify(objData);

    if(req.url == "/"){
        res.end("Hello this is home page using authentic NodeJs");
    }else{
        res.writeHeadA(404 ,{"Content-type":"text/html"});
        res.end(`<h1>404 error page not found </h1>`);
    }
});


server.listen(8000,"127.0.0.1",()=>{
    console.log("server is running fine in port number 8000");
})