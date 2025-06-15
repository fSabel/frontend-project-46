import _ from 'lodash';
import parsing from './parsing.js';

const formatValue = (value) => {
  if (typeof value === 'boolean' || value === null) {
    return String(value);
  }
  return value;
};

const search = (filepath1, filepath2) => {
  const obj1 = parsing(filepath1);
  const obj2 = parsing(filepath2);

  const allKeys = _.sortBy(_.union(_.keys(obj1), _.keys(obj2)));

  const lines = allKeys.flatMap((key) => {
    const hasKey1 = Object.hasOwn(obj1, key);
    const hasKey2 = Object.hasOwn(obj2, key);

    if (hasKey1 && hasKey2) {
      if (obj1[key] === obj2[key]) {
        return [`  ${key}: ${formatValue(obj1[key])}`];
      }
      return [
        `- ${key}: ${formatValue(obj1[key])}`,
        `+ ${key}: ${formatValue(obj2[key])}`,
      ];
    }
    if (hasKey1) {
      return [`- ${key}: ${formatValue(obj1[key])}`];
    }
    return [`+ ${key}: ${formatValue(obj2[key])}`];
  });

  return `{\n${lines.map((line) => `  ${line}`).join('\n')}\n}`;
};

export default search;
