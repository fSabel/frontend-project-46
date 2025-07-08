import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { expect, test } from '@jest/globals';
import parsing from '../src/parsing.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFixtureFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

test.each([{ a: 'file1.json', b: 'file1.txt' }, { a: 'file2.json', b: 'file2.txt' }])('test parsing', ({ a, b }) => {
  const formatObject = (obj) => {
    const entries = Object.entries(obj)
      .map(([key, value]) => {
        const valStr = typeof value === 'string' ? `'${value}'` : value;
        return `  ${key}: ${valStr}`;
      })
      .join(',\n');
    return `{\n${entries}\n}`;
  };
  const parseFile = formatObject(parsing(a));
  const result = readFixtureFile(b).trim();

  expect(parseFile).toEqual(result);
});
