const http = require('http');
const host = 'http://localhost'
const port = 0106;
const stats = require('./pcRAM.js');

http.createServer((req,res) => {
    let url = req.url;

    if(url === '/stats'){
        setInterval(() => {
         res.write(JSON.stringify(stats, null, 2));
        },3000)
    }
    else {
        res.end('<h1>Hello!</h1>')
    }
    
    }).listen(port, () => console.log(`server is running in ${host}:${port}/stats`));
