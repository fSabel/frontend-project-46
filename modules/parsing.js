import { cwd } from 'node:process';
import fs from 'fs';
import yaml from 'js-yaml';
import path from 'path';

const parsing = (fileIsStr) => {
    const arrTest = [];
    const filePath = path.resolve(`${cwd()}`, `${fileIsStr}`);
    const fileFormat = fileIsStr.split('.')[1];
    if (fileFormat === 'json') {
        const fileIsJSON = JSON.parse(fs.readFileSync(filePath));
        arrTest.push(fileIsJSON);
    }
    if (fileFormat === 'yaml') {
        const fileIsYAML = yaml.load(fs.readFileSync(filePath));
        arrTest.push(fileIsYAML);
    }

    console.log(arrTest);
    return;
};

export default parsing;