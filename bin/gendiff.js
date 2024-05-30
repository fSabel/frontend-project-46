#!/usr/bin/env node
import { Command } from "commander"
import parsing from "../modules/parsing.js";

const genDiff = () => {
    const program = new Command();

    program
        .argument('<filepath1>')
        .argument('<filepath2>')
        .description('Compares two configuration files and shows a difference.')
        .version('1.0.0', '-V, --version', 'output the version number')
        .option('-f, --format [type]', 'output format')
        .action((filepath1, filepath2) => {
            parsing(filepath1);
            parsing(filepath2);
        })

    program.parse();

    return program;
};

genDiff();

export default genDiff;
