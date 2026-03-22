#!/usr/bin/env node

const { build } = require('../lib/builder');
const { serve } = require('../lib/server');
const path = require('path');

const srcDir = path.resolve(__dirname, '../src');
const outputDir = path.resolve(__dirname, '../docs');
const port = 4000;

async function main() {
  const args = process.argv.slice(2);
  const command = args[0] || 'help';

  switch (command) {
    case 'build':
      console.log('Building documentation...');
      try {
        await build(srcDir, outputDir);
        console.log('Build completed successfully!');
      } catch (error) {
        console.error('Error building documentation:', error.message);
        process.exit(1);
      }
      break;

    case 'dev':
      try {
        await build(srcDir, outputDir, true);
        await serve(outputDir, port, true);
      } catch (error) {
        console.error('Error:', error.message);
        process.exit(1);
      }
      break;

    case 'help':
    default:
      console.log(`
Systematic-Learning CLI

Usage:
  npm run build          Build documentation to HTML
  npm run dev            Build and serve with live reload on port 4000
      `);
      break;
  }
}

main();