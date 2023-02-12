const isPalindrome = (str) => {
  return str.split("").reverse().join("") === str ? true : false;
};
console.log(isPalindrome("racecar"));
