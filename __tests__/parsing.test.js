import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { expect, test } from '@jest/globals';
import parsing from '../src/parsing.js';
import formatObject from '../src/formatObject.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFixtureFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

test.each([
  { data: 'file1.json', expected: 'file1JSON.txt' },
  { data: 'file2.json', expected: 'file2JSON.txt' },
  { data: 'file1.yaml', expected: 'file1YAML.txt' },
  { data: 'file2.yml', expected: 'file2YML.txt' },
])('test parsing', ({ data, expected }) => {
  const parseFile = formatObject(parsing(data));
  const result = readFixtureFile(expected).trim();

  expect(parseFile).toEqual(result);
});
