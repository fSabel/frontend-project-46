import { cwd } from 'node:process';
import fs from 'fs';
import yaml from 'js-yaml';
import path from 'path';

const parsing = (fileIsStr) => {
  const filePath = path.resolve(`${cwd()}`, '__fixtures__', `${fileIsStr}`);
  const fileFormat = path.extname(filePath).slice(1);
  switch (fileFormat) {
  case 'json':
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  case 'yaml':
    return yaml.load(fs.readFileSync(filePath, 'utf8'));
  case 'yml':
    return yaml.load(fs.readFileSync(filePath, 'utf8'));
  default:
    return 'This file has an incorrect format.';
  }
};

export default parsing;
