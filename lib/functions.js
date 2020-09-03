const getName = ({ name }) => name;

function copyAndPush(arr, newItem) {
  const copy = [...arr, newItem];

  return copy;
}

module.exports = {
  getName,
  copyAndPush
};
