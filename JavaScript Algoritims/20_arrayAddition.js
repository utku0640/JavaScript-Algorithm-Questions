const arrayAddition = (array) => {
  let newArray = array.sort((a, b) => b - a);
  let largestNum = newArray[0];
  let sum = 0;

  for (let i = 1; i < newArray.length; i++) {
    sum = sum + newArray[i];
  }
  if (sum === largestNum) {
    return true;
  } else {
    return false;
  }
};
console.log(arrayAddition([4, -6, -3, 9, 6, 24, 10, 1, 3]));
