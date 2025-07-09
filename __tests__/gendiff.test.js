import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { expect, test } from '@jest/globals';
import search from '../src/search.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFixtureFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

test.each([
  ['file1.json', 'file2.json', 'resultJSON.txt'],
  ['file1.yaml', 'file2.yml', 'resultYAML.txt'],
  ['file1.json', 'file2.yml', 'resultYamlJson.txt'],
])('gendiff', ([a, b, result]) => {
  const pathFirstFile = getFixturePath(a);
  const pathSecondFile = getFixturePath(b);
  const expected = readFixtureFile(result).trim();

  expect(search(pathFirstFile, pathSecondFile)).toEqual(expected);
});
