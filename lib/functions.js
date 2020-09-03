const getName = ({ name }) => name;

const copyAndPush = (arr, newItem) => [...arr, newItem];

const capitalizeAndFilter = arr => arr.filter(word => word.charAt(0) != 'f').map(word => word.toUpperCase());

module.exports = {
  getName,
  copyAndPush,
  capitalizeAndFilter
};
