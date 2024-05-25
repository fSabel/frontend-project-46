#!/usr/bin/env node
import { Command } from "commander"
const program = new Command();

program
    .argument('<filepath1>')
    .argument('<filepath2>')
    .description('Compares two configuration files and shows a difference.')
    .version('1.0.0', '-V, --version', 'output the version number')
    .option('-f, --format [type]', 'output format');

program.parse();
