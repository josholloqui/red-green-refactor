const { getName, copyAndPush, capitalizeAndFilter, fetchQuote } = require('./functions');

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
    expect(numbers)
      .toEqual([1, 2, 3]);
  });
});

describe('capitalizeAndFilter function', () => {
  it('an array of strings capitalize all strings and filter out any string that starts with the letter f', () => {
    const strings = ['flinestone', 'mario', 'fortnite', 'yellowstone', 'destiny'];

    const filteredArr = capitalizeAndFilter(strings);

    expect(filteredArr)
      .toEqual(['MARIO', 'YELLOWSTONE', 'DESTINY']);
  });
});

describe('fetchQuote function', () => {
  it('return a single quote', async () => {
    const fetchedQuote = await fetchQuote();

    expect(fetchedQuote)
      .toEqual({
        name: expect.any(String),
        text: expect.any(String),
        image: expect.any(String)
      });
  });
});
