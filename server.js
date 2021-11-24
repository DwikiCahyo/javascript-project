const http = require('http');

const requestListener = (req, res) => {
    res.setHeader('Content-Type', 'text/html');
 
    res.statusCode = 200;
    // res.end('<h1>Halo HTTP Server!</h1>');



//Method/Verb Request
const method =req.method;

//memamnggil nilai dalam method("get","POST","PUT")
if(method=='GET'){
    res.end('<h1>Hello!</h1>');
}
//Membuat Body request pada method post
if(method === 'POST') {
    let body  =[];

    req.on('data', (chunk) => {
        body.push(chunk);
    });

    req.on('end', () => {
        body = Buffer.concat(body).toString();
        const {name}=JSON.parse(body);
        res.end(`<h1>Hai, ${name}!</h1>`);
    });

    // res.end('<h1>Hai!</h2>');
}

if(method === 'PUT') {
    res.end('<h1>Bonjour!</h1>');
}
if(method === 'DELETE') {
    res.end('<h1>Salam!</h1>');
}

};
//Deklarasi variabel server
const server = http.createServer(requestListener);

//deklarasi listen dengan port dan host
const port = 3000;
const host ='localhost';

server.listen(port, host, () => {
    console.log(`Server berjalan pada http://${host}:${port}`);
});