const firstReverse = (str) => {
  let arr = [];
  let reverseWord = "";

  for (let i = 0; i < str.length; i++) {
    arr[i] = str[str.length - i - 1];
    reverseWord += arr[i];
  }
  return reverseWord;
};
console.log(firstReverse("merhabalar"));

// const firstReverse = (string) => {
//   const arr = string.split("").reverse().join("");
//   return arr;
// };

// console.log(firstReverse("Merhabalar"));
