import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { expect, test } from '@jest/globals';
import search from '../src/search.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFixtureFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

test('gendiff', () => {
  const readFirstFile = readFixtureFile('file1.json');
  const readSecondFile = readFixtureFile('file2.json');
  const expected = readFixtureFile('result.txt');

  expect(search(readFirstFile, readSecondFile)).toEqual(expected);
});
