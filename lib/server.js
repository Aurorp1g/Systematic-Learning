const express = require('express');
const path = require('path');

function serve(dir, port) {
  return new Promise((resolve, reject) => {
    const app = express();
    
    app.use(express.static(dir));
    
    app.get('/', (req, res) => {
      res.sendFile(path.join(dir, 'index.html'));
    });
    
    const server = app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
      console.log(`Press Ctrl+C to stop the server`);
    });
    
    process.on('SIGINT', () => {
      console.log('\nShutting down server...');
      server.close(() => {
        console.log('Server stopped.');
        process.exit(0);
      });
    });
    
    resolve(server);
  });
}

module.exports = { serve };