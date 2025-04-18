import { cwd } from 'node:process';
import fs from 'fs';
import yaml from 'js-yaml';
import path from 'path';

const parsing = (fileIsStr) => {
    const filePath = path.resolve(`${cwd()}`, `${fileIsStr}`);
    const fileFormat = path.extname(filePath).slice(1);
    switch(fileFormat) {
        case 'json':
            const fileIsJSON = JSON.parse(fs.readFileSync(filePath, 'utf8'));
            return fileIsJSON;
        case 'yaml':
            const fileIsYAML = yaml.load(fs.readFileSync(filePath, 'utf8'));
            return fileIsYAML;
    };
};

export default parsing;