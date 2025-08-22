#!/usr/bin/env node
import { Command } from 'commander';
import diff from '../src/formatters/index.js';

const genDiff = (filepath1, filepath2, format = 'stylish') =>
  diff(format, filepath1, filepath2);

const cliProgram = () => {
  const program = new Command();

  program
    .arguments('<filepath1> <filepath2>')
    .description('Compares two configuration files and shows a difference.')
    .version('1.0.0', '-V, --version', 'output the version number')
    .option('-f, --format <type>', 'output format', 'stylish')
    .action((filepath1, filepath2) => {
      const options = program.opts();
      console.log(genDiff(filepath1, filepath2, options.format));
    });

  return program;
};

if (import.meta.url === `file://${process.argv[1]}`) {
  const program = cliProgram();
  program.parse(process.argv);
}

export default genDiff;
