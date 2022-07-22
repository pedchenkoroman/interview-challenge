const binarySearch = (arr, el) => {
  let start = 0;
  let end = arr.length - 1;
  do {
    const med = Math.round((start + end) / 2);

    if (arr[med] === el) {
      return el;
    }

    if (arr[med] > el) {
      end = med - 1;
    } else {
      start = med + 1;
    }
  } while (start <= end);

  return NaN;
};

const thirdImplementation = (arr, k) => {
  for (let i = 0; i < arr.length; i++) {
    const val = arr[i];
    const numberToFind = binarySearch(arr.slice(i + 1), k - val);
    if (numberToFind) {
      return [val, numberToFind];
    }
  }
  return [];
};

module.exports = { thirdImplementation };
