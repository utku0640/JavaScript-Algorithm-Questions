const a = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let k = i + 1; k < arr.length; k++) {
      if (arr[i] + arr[k] === 17) {
        return true;
      }
    }
  }
  return false;
};

console.log(a([10, 15, 3, 7]));
