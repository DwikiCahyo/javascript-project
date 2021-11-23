const http = require('http');

const requestListener = (req, res) => {
    res.setHeader('Content-Type', 'text/html');
 
    res.statusCode = 200;
    res.end('<h1>Halo HTTP Server!</h1>');
};
//Deklarasi variabel server
const server = http.createServer(requestListener);

//deklarasi listen dengan port dan host
const port = 3000;
const host ='localhost';

server.listen(port, host, () => {
    console.log(`Server berjalan pada http://${host}:${port}`);
});