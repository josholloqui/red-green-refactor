const getName = ({ name }) => name;

function copyAndPush(arr, newItem) {
  arr.push(newItem);
  
  return arr;
}

module.exports = {
  getName,
  copyAndPush
};
