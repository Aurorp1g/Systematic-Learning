#!/usr/bin/env node

const { generate } = require('../lib/builder');
const { serve } = require('../lib/server');
const path = require('path');

const args = process.argv.slice(2);
const command = args[0] || 'help';

const srcDir = path.resolve(__dirname, '../src');
const outputDir = path.resolve(__dirname, '../docs');
const port = 4000;

async function main() {
  switch (command) {
    case 'g':
    case 'generate':
      console.log('Generating documentation...');
      try {
        await generate(srcDir, outputDir);
        console.log('Documentation generated successfully!');
      } catch (error) {
        console.error('Error generating documentation:', error.message);
        process.exit(1);
      }
      break;

    case 's':
    case 'serve':
      console.log('Generating documentation...');
      try {
        await generate(srcDir, outputDir);
        console.log(`Starting server at http://localhost:${port}`);
        await serve(outputDir, port);
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
  sl g         Generate documentation (like hexo g)
  sl s         Generate and serve documentation on port 4000 (like hexo s)
  sl help      Show this help message

Commands:
  g, generate    Build Sphinx documentation to HTML
  s, serve       Build and serve documentation with HTTP server
      `);
      break;
  }
}

main();