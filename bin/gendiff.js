#!/usr/bin/env node
import { Command } from 'commander';
import genDiff from '../src/index.js';

const program = new Command();

program
  .arguments('<filepath1> <filepath2>')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0', '-V, --version', 'output the version number')
  .option('-f, --format <type>', 'output format', 'stylish')
  .action((filepath1, filepath2) => {
    const options = program.opts();
    console.log(genDiff(options.format, filepath1, filepath2));
  });

if (import.meta.url === `file://${process.argv[1]}`) {
  program.parse(process.argv);
}

export default program;
