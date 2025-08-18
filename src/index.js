import { cwd } from 'node:process';
import fs from 'fs';
import yaml from 'js-yaml';
import path from 'path';

const parsing = (fileIsStr) => {
  if (typeof fileIsStr !== 'string' || fileIsStr.trim() === '') {
    throw new Error('File name must be a non-empty string');
  }

  const filePath = path.resolve(`${cwd()}`, '__fixtures__', fileIsStr);
  const fileFormat = path.extname(filePath).slice(1);
  const fileContent = fs.readFileSync(filePath, 'utf8');

  switch (fileFormat) {
    case 'json':
      return JSON.parse(fileContent);
    case 'yaml':
    case 'yml':
      return yaml.load(fileContent);
    default:
      throw new Error(`This file has an incorrect format: .${fileFormat}`);
  }
};

export default parsing;
