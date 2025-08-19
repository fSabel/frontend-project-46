import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { expect, test } from '@jest/globals';
import searchDiff from '../src/formatters/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const getFixturePath = (filename) =>
  path.join(__dirname, '..', '__fixtures__', filename);
const readFixtureFile = (filename) =>
  fs.readFileSync(getFixturePath(filename), 'utf-8');

test.each([
  ['file1.json', 'file2.json', 'resultJSON.txt'],
  ['file1.yaml', 'file2.yml', 'resultYAML.txt'],
  ['file1.json', 'file2.yml', 'resultYamlJson.txt'],
])('gendiff with "stylish" format', (a, b, result) => {
  const stylish = 'stylish';
  const pathFirstFile = getFixturePath(a);
  const pathSecondFile = getFixturePath(b);
  const expected = readFixtureFile(result).trim();

  expect(searchDiff(stylish, pathFirstFile, pathSecondFile)).toEqual(expected);
});

test.each([
  ['file1.json', 'file2.json', 'resultPlain.txt'],
  ['file1.yaml', 'file2.yml', 'resultPlain.txt'],
  ['file1.json', 'file2.yml', 'resultPlain.txt'],
])('gendiff with "plain" format', (a, b, result) => {
  const plain = 'plain';
  const pathFirstFile = getFixturePath(a);
  const pathSecondFile = getFixturePath(b);
  const expected = readFixtureFile(result).trim();

  expect(searchDiff(plain, pathFirstFile, pathSecondFile)).toEqual(expected);
});
