const vowelCount = (str) => {
  let vowelCounter = 0;
  let newStr = str
    .replace(/[^a-zA-z]/gi, "")
    .toLowerCase()
    .split("");

  for (let i = 0; i < newStr.length; i++) {
    if (/[a|e|i|u|o]/.test(newStr[i])) {
      vowelCounter++;
    }
  }
  return vowelCounter;
};
console.log(vowelCount("All cows eat grass"));
