const { getName, copyAndPush } = require('./functions');

describe('getName function', () => {
  it('returns the name property of an object', () => {
    const spot = { name: 'spot', age: 5, weight: '20 lbs' };

    const name = getName(spot);

    expect(name)
      .toEqual('spot');
  });
});

describe('copyAndPush function', () => {
  it('returns a new array with all the items in the original array and a new item pushed to the end', () => {
    const numbers = [1, 2, 3];

    const newNumbers = copyAndPush(numbers, 4);

    expect(newNumbers)
      .toEqual([1, 2, 3, 4]);
  });
});
