# interview-challenge
The function always receives two params one of them is a sorted array and another one is the number. We have to find two numbers into the array that in total equal the second argument.

## Table of Contents
- [Quick start](#install)
- [Solutions](#solutions)
- [Conclusion](#conclusion)

## Install
- Clone this repository:
```shell
  git clone https://github.com/pedchenkoroman/interview-challenge.git
```

- Install dependency:
```shell
  npm install
```

- Run tests:
```shell
    npm run test
```

## Solutions

1. The first solution that is, on the top of my head, is just the usual two loops. In the first one I take the first element of
   Array and the second loop take the next element after the first one and check. If the sum is equal to the value I am looking for,
   I will return the Array with the first element and the next one. But if not I carry on to iterate the second loop.
> Time complexity of this solution - `O(n²)` and memory - `O(1)`;

2. The second solution is that create a hash table. I use only one loop and if the hash does not have the value I am looking for,
   I add it to my hash table and take the next element. If the value exists in the hash table I just return the result and stop the iteration.
> Time complexity of this solution - `O(n)` and memory - `O(n)`;

3. The third solution is that use the binary search to find the value in the array.
> Time complexity of this solution - `O(n log n)` and memory - `O(1)`;

4. Last but not least is that use the two cursors. One is from start and another one from the end of the array.
> Time complexity of this solution - `O(n)` and memory - `O(1)`;

## Conclusion

The most appropriate implementation is the last one due to the fact that time complexity is `O(n)` but also memory `O(n)`.


