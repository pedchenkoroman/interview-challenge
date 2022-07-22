const {
  firstImplementation,
  secondImplementation,
  thirdImplementation,
  fourthImplementation,
} = require('./src');

describe('The challenge from the interview of 70K euro. Determine that the sum of any two elements is equal to the goal', () => {
  test('First implementation', () => {
    expect(firstImplementation([-3, -1, 0, 2, 6], 6)).toEqual([0, 6]);
    expect(firstImplementation([-1, 2, 5, 9], 7)).toEqual([2, 5]);
    expect(firstImplementation([2, 4, 5], 8)).toEqual([]);
    expect(firstImplementation([-2, -1, 1, 2], 0)).toEqual([-2, 2]);
  });

  test('Second implementation', () => {
    expect(secondImplementation([-3, -1, 0, 2, 6], 6)).toEqual([6, 0]);
    expect(secondImplementation([-1, 2, 5, 9], 7)).toEqual([5, 2]);
    expect(secondImplementation([2, 4, 5], 8)).toEqual([]);
    expect(secondImplementation([-2, -1, 1, 6], 0)).toEqual([1, -1]);
  });

  test('Third implementation', () => {
    expect(
      thirdImplementation([-7, 1, 2, 3, 6, 8, 10, 15, 18, 20], 10),
    ).toEqual([2, 8]);
    expect(thirdImplementation([2, 4, 5], 8)).toEqual([]);
    expect(thirdImplementation([-2, -1, 1, 6], 0)).toEqual([-1, 1]);
  });

  test('Fourth implementation', () => {
    expect(
      fourthImplementation([-7, 1, 2, 3, 6, 8, 10, 15, 18, 20], 10),
    ).toEqual([2, 8]);
    expect(fourthImplementation([2, 4, 5], 8)).toEqual([]);
    expect(fourthImplementation([-2, -1, 1, 6], 0)).toEqual([-1, 1]);
  });
});
