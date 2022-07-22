# interview-challenge

## Table of Contents
- [Quick start](#install)
- [Solutions](#solutions)

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
> Work's time of this solution - `O(n²)` and memory - `O(1)`;

2. The second solution is that create a hash table. I use only one loop and if the hash does not have the value I am looking for,
   I add it to my hash table and take the next element. If the value exists in the hash table I just return the result and stop the iteration.
> Work's time of this solution - `O(n)` and memory - `O(n)`;

3. The third solution is that I use the binary search to find the value into array. 
> Work's time of this solution - `O(n log n)` and memory - `O(1)`;

4. Last but not least is that I use the two cursors. One is from start and another one from the end of array.
> Work's time of this solution - `O(n)` and memory - `O(1)`;


