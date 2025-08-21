#!/usr/bin/env node
import { Command } from 'commander';
import diff from '../src/formatters/index.js';

const genDiff = () => {
  const program = new Command();

  program
    .arguments('<filepath1> <filepath2>')
    .description('Compares two configuration files and shows a difference.')
    .version('1.0.0', '-V, --version', 'output the version number')
    .option('-f, --format <type>', 'output format', 'stylish')
    .action((filepath1, filepath2, options) =>
      console.log(diff(options.format, filepath1, filepath2)),
    );

  program.parse(process.argv);

  return program;
};

genDiff();

export default genDiff;
