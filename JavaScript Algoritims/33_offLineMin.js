const offLineMin = (strArr) => {
  const arr = strArr.slice(0, strArr.lastIndexOf("E") + 1);
  const newArr = [];
  const newArr2 = [];
  for (let i = 0; i < arr.length; i++) {
    if (/[^0-9]/.test(arr[i])) {
      newArr.push(arr[i]);
    } else {
      newArr2.push(arr[i]);
    }
  }

  newArr2.sort((a, b) => a - b);
  const result = newArr2.slice(0, newArr.length);
  return result;
};

console.log(offLineMin(["5", "4", "6", "E", "1", "7", "E", "E", "3", "2"]));
