import { cwd } from 'node:process';
import fs from 'fs';
import yaml from 'js-yaml';
import path from 'path';
import changeFormatter from './formatters/index.js';

const parsing = (fileIsStr) => {
  const filePath = path.resolve(`${cwd()}`, '__fixtures__', fileIsStr);
  const fileFormat = path.extname(filePath).slice(1);
  const fileContent = fs.readFileSync(filePath, 'utf8');

  switch (fileFormat) {
    case 'yaml':
    case 'yml':
      return yaml.load(fileContent);
    default:
      return JSON.parse(fileContent);
  }
};

const genDiff = (formatName, filepath1, filepath2) =>
  changeFormatter(formatName, parsing(filepath1), parsing(filepath2));

export default genDiff;
