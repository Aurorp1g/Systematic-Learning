const { execSync } = require('child_process');
const path = require('path');

const venvPython = path.resolve(__dirname, '../.venv/Scripts/python.exe');

function generate(srcDir, outputDir) {
  const command = `"${venvPython}" -m sphinx -b html "${srcDir}" "${outputDir}" -E`;
  
  console.log(`Running: ${command}`);
  
  try {
    execSync(command, { 
      stdio: 'inherit',
      shell: true
    });
    return true;
  } catch (error) {
    throw new Error(`sphinx-build failed: ${error.message}`);
  }
}

module.exports = { generate };