const { default: fetch } = require('node-fetch');

const getName = ({ name }) => name;

const copyAndPush = (arr, newItem) => [...arr, newItem];

const capitalizeAndFilter = arr => arr.filter(word => word.charAt(0) != 'f').map(word => word.toUpperCase());

const fetchQuote = async() => {
  const fetching = await fetch('https://futuramaapi.herokuapp.com/api/quotes/1');
  const [{ character: name, quote: text, image }] = await fetching.json();

  return {
    name,
    text,
    image
  };
};

module.exports = {
  getName,
  copyAndPush,
  capitalizeAndFilter,
  fetchQuote
};
