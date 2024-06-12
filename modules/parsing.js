import { cwd } from 'node:process';
import fs from 'fs';
import yaml from 'js-yaml';
import path from 'path';

const parsing = (fileIsStr) => {
    const filePath = path.resolve(`${cwd()}`, `${fileIsStr}`);
    const fileFormat = fileIsStr.split('.')[1];
    if (fileFormat === 'json') {
        const fileIsJSON = JSON.parse(fs.readFileSync(filePath));
        return fileIsJSON;
    }
    if (fileFormat === 'yaml') {
        const fileIsYAML = yaml.load(fs.readFileSync(filePath));
        return fileIsYAML;
    }
};

export default parsing;