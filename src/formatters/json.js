import _ from 'lodash';

/** A function for finding differences in the "stylish" format */
function json(obj1, obj2) {
  const keys = _.sortBy(_.union(Object.keys(obj1), Object.keys(obj2)));
  const result = {};

  keys.forEach((key) => {
    const val1 = obj1?.[key];
    const val2 = obj2?.[key];

    const isObj1 = typeof val1 === 'object' && val1 !== null;
    const isObj2 = typeof val2 === 'object' && val2 !== null;

    if (!(key in obj2)) {
      result[key] = val1;
    } else if (!(key in obj1)) {
      result[key] = val2;
    } else if (isObj1 && isObj2) {
      result[key] = json(val1, val2);
    } else if (val1 !== val2) {
      result[key] = [val1, val2];
    } else {
      result[key] = val1;
    }
  });

  return result;
}

export default json;
