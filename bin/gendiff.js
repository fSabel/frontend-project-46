#!/usr/bin/env node
import { Command } from 'commander';
import gendiff from '../src/index.js';

const program = new Command();

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.2')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format <type>', 'output format', 'stylish')
  .action((filepath1, filepath2, options) => {
    const diff = gendiff(filepath1, filepath2, options.format);

    if (import.meta.url === `file://${process.argv[1]}`) {
      console.log(diff);
    }

    return diff;
  });

program.parse(process.argv);

export default (filepath1, filepath2, format = 'stylish') =>
  gendiff(filepath1, filepath2, format);
