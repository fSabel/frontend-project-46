import parsing from '../index.js';
import diffStylish from './formatStylish.js';
import diffPlain from './formatPlain.js';

const searchDiff = (formatName, filepath1, filepath2) => {
  const obj1 = parsing(filepath1);
  const obj2 = parsing(filepath2);
  switch (formatName) {
    case 'plain':
      return diffPlain(obj1, obj2);
    case 'json':
      return JSON.stringify(diffStylish(obj1, obj2));
    case 'stylish':
      return diffStylish(obj1, obj2);
    default:
      throw new Error('Uncorrect format!');
  }
};

export default searchDiff;
