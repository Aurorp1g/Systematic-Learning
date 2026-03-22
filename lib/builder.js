const { spawn } = require('child_process');
const path = require('path');

const venvPython = path.resolve(__dirname, '../.venv/Scripts/python.exe');

function getTimestamp() {
  const now = new Date();
  return now.toLocaleTimeString('zh-CN', { hour12: false });
}

function build(srcDir, outputDir, silent = false) {
  return new Promise((resolve, reject) => {
    const env = { ...process.env, PYTHONIOENCODING: 'utf-8' };
    const args = ['-m', 'sphinx', '-b', 'html', srcDir, outputDir, '-E'];
    const timestamp = getTimestamp();
    
    if (!silent) {
      console.log(`Running: "${venvPython}" ${args.join(' ')}`);
    }

    const sphinx = spawn(venvPython, args, { 
      env,
      shell: true,
      windowsHide: true,
      stdio: silent ? ['ignore', 'ignore', 'pipe'] : ['ignore', 'pipe', 'pipe']
    });

    if (silent) {
      sphinx.stderr.on('data', (data) => {
        const output = data.toString();
        const lines = output.split('\n');
        const warnings = lines.filter(line => 
          line.includes('WARNING') || line.includes('ERROR')
        );
        if (warnings.length > 0) {
          warnings.forEach(w => console.error(`[${timestamp}] ${w}`));
        }
      });
    } else {
      let stdout = '';
      let stderr = '';

      sphinx.stdout.on('data', (data) => {
        stdout += data.toString();
      });

      sphinx.stderr.on('data', (data) => {
        stderr += data.toString();
      });

      sphinx.on('close', () => {
        console.log(stdout);
        console.error(stderr);
      });
    }

    sphinx.on('close', (code) => {
      resolve(true);
    });

    sphinx.on('error', (error) => {
      console.error(`[${timestamp}] Build error:`, error.message);
      reject(error);
    });
  });
}

module.exports = { build };