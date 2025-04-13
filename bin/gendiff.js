#!/usr/bin/env node
import { Command } from "commander";
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
            console.log("parsing a file1.json", parsing(filepath1));
            console.log("parsing a file2.json", parsing(filepath2));
        })

    program.parse();

    return program;
};

export default genDiff;
