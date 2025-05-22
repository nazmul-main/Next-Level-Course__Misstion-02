const http = require('node:http');
const fs = require('fs');
const path = require('path');
//create a server using raw node js 
const server = http.createServer();

//listen to the server
server.on('request', (req, res) => {
   // Fixed the if condition syntax and added proper brackets
   if(req.url === '/read-file' && req.method === 'GET') {
      // Fixed the file path construction using path.join
      const filePath = path.join(process.cwd(), './texts/read.txt');
      
      //streaming File Reading
      const readableStream = fs.createReadStream(filePath);

      // Error handling for stream
      readableStream.on('error', (error) => {
         console.error('Error reading file:', error);
         res.statusCode = 500;
         res.end('Error reading file');
      });

      // Pipe the readable stream directly to response
      readableStream.pipe(res);

      // Log when reading is complete
      readableStream.on('end', () => {
         console.log('reading file is completed');
      });
   } else {
      res.statusCode = 404;
      res.end('Not Found');
   }
});

server.listen(5000, () => {
   console.log(`server listening on port 5000`);
});