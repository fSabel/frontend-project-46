const formatObject = (obj) => {
  const entries = Object.entries(obj)
    .map(([key, value]) => {
      const valStr = typeof value === 'string' ? `'${value}'` : value;
      return `  ${key}: ${valStr}`;
    })
    .join(',\n');
  return `{\n${entries}\n}`;
};

export default formatObject;
