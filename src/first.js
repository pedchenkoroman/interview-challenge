const firstImplementation = (arr, k) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === k) {
        return [arr[i], arr[j]];
      }
    }
  }
  return [];
};

module.exports = { firstImplementation };
