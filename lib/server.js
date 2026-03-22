const express = require('express');
const path = require('path');
const livereload = require('livereload');
const chokidar = require('chokidar');

const { build } = require('./builder');

function serve(dir, port, enableLiveReload = false) {
  return new Promise((resolve, reject) => {
    const app = express();
    
    app.use(express.static(dir));

    app.get('/', (req, res) => {
      res.sendFile(path.join(dir, 'index.html'));
    });

    let livereloadServer = null;
    let watcher = null;

    if (enableLiveReload) {
      livereloadServer = livereload.createServer({
        port: port + 1,
        delay: 300
      });
      livereloadServer.watch(dir);

      watcher = chokidar.watch([
        path.join(dir, '**/*.html'),
        path.join(dir, '**/*.css'),
        path.join(dir, '**/*.js')
      ], {
        ignored: /(^|[\/\\])\../,
        persistent: true,
        ignoreInitial: true
      });

      let buildTimeout = null;
      const srcDir = path.resolve(__dirname, '../src');

      const rebuild = async () => {
        const timestamp = new Date().toLocaleTimeString('zh-CN', { hour12: false });
        console.log(`[${timestamp}] 更新中...`);
        try {
          await build(srcDir, dir, true);
          console.log(`[${timestamp}] 更新完毕`);
          livereloadServer.refresh('/');
        } catch (error) {
          console.error('Build error:', error.message);
        }
      };

      watcher = chokidar.watch([
        path.join(srcDir, '**/*')
      ], {
        ignored: /(^|[\/\\])\../,
        persistent: true,
        ignoreInitial: true
      });

      watcher.on('all', (event, filePath) => {
        if (buildTimeout) clearTimeout(buildTimeout);
        buildTimeout = setTimeout(rebuild, 500);
      });
    }

    const server = app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
      console.log('Press Ctrl+C to stop');
    });

    process.on('SIGINT', () => {
      console.log('\nShutting down...');
      if (watcher) watcher.close();
      if (livereloadServer) livereloadServer.close();
      server.close(() => {
        console.log('Server stopped.');
        process.exit(0);
      });
    });

    resolve(server);
  });
}

module.exports = { serve };