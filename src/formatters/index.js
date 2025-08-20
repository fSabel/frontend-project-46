import parsing from '../index.js';
import stylish from './stylish.js';
import plain from './plain.js';
import json from './json.js';

const diff = (formatName, filepath1, filepath2) => {
  const obj1 = parsing(filepath1);
  const obj2 = parsing(filepath2);
  switch (formatName) {
    case 'plain':
      return plain(obj1, obj2);
    case 'json':
      return JSON.stringify(json(obj1, obj2));
    case 'stylish':
      return stylish(obj1, obj2);
    default:
      throw new Error('Uncorrect format!');
  }
};
export default diff;
