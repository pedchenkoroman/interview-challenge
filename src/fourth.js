const fourthImplementation = (arr, k) => {
  let start = 0;
  let end = arr.length - 1;
  do {
    if (arr[start] + arr[end] === k) {
      return [arr[start], arr[end]];
    }
    if (arr[start] + arr[end] < k) {
      start += 1;
    } else {
      end -= 1;
    }
  } while (start < end);
  return [];
};

module.exports = { fourthImplementation };
