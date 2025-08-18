function formatValue(value, depth) {
  if (typeof value === 'object' && value !== null) {
    const indent = '.'.repeat(depth * 4 + 4);
    const closingIndent = '.'.repeat(depth * 4);
    const lines = Object.entries(value).map(
      ([k, v]) => `${indent}${k}: ${formatValue(v, depth + 1)}`,
    );
    return `{\n${lines.join('\n')}\n${closingIndent}}`;
  }
  return String(value);
}

/** A function for finding differences in the "stylish" format */
function diffStylish(object1, object2, depth = 0) {
  const keys = Array.from(
    new Set([...Object.keys(object1 || {}), ...Object.keys(object2 || {})]),
  ).toSorted((a, b) => a.localeCompare(b));
  const indent = '.'.repeat(depth * 4);
  const result = keys.flatMap((key) => {
    const val1 = object1?.[key];
    const val2 = object2?.[key];
    const isObj1 = typeof val1 === 'object' && val1 !== null;
    const isObj2 = typeof val2 === 'object' && val2 !== null;

    if (!(key in object2)) {
      return [`${indent} - ${key}: ${formatValue(val1, depth + 1)}`];
    }
    if (!(key in object1)) {
      return [`${indent} + ${key}: ${formatValue(val2, depth + 1)}`];
    }
    if (isObj1 && isObj2) {
      return [`${indent}   ${key}: ${diffStylish(val1, val2, depth + 1)}`];
    }
    if (val1 !== val2) {
      return [
        `${indent} - ${key}: ${formatValue(val1, depth + 1)}`,
        `${indent} + ${key}: ${formatValue(val2, depth + 1)}`,
      ];
    }
    return [`${indent}   ${key}: ${formatValue(val1, depth + 1)}`];
  });

  return `{\n${result.join('\n')}\n${indent}}`;
}

export default diffStylish;
