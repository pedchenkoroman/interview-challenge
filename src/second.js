const secondImplementation = (arr, k) => {
  const set = new Set();
  for (const val of arr) {
    const numberToFind = k - val;
    if (set.has(numberToFind)) {
      return [val, numberToFind];
    }
    set.add(val);
  }
  return [];
};

module.exports = { secondImplementation };
