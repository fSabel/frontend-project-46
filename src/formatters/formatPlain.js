function formatValue(value) {
  if (value === null) return 'null';
  if (typeof value === 'string') return `'${value}'`;
  if (typeof value === 'object') return '[complex value]';
  return String(value);
}

/** A function for finding differences in the "plain" format */
function diffPlain(obj1, obj2, parentPath = '') {
  const keys = Array.from(
    new Set([...Object.keys(obj1 || {}), ...Object.keys(obj2 || {})]),
  ).toSorted((a, b) => a.localeCompare(b));
  const result = keys.flatMap((key) => {
    const val1 = obj1?.[key];
    const val2 = obj2?.[key];
    const currentPath = parentPath ? `${parentPath}.${key}` : key;

    const isObj1 = typeof val1 === 'object' && val1 !== null;
    const isObj2 = typeof val2 === 'object' && val2 !== null;

    if (!(key in obj2)) {
      return [`Property '${currentPath}' was removed`];
    }

    if (!(key in obj1)) {
      return [
        `Property '${currentPath}' was added with value: ${formatValue(val2)}`,
      ];
    }

    if (isObj1 && isObj2) {
      return diffPlain(val1, val2, currentPath);
    }

    // Свойство обновлено
    if (val1 !== val2) {
      return [
        `Property '${currentPath}' was updated. From ${formatValue(
          val1,
        )} to ${formatValue(val2)}`,
      ];
    }

    return [];
  });

  return result.join('\n');
}

export default diffPlain;
