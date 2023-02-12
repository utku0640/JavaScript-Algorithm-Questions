const letterChange = (string) => {
  let newStr = string.toLowerCase().replace(/[a-z]/gi, (char) => {
    if (char === "z") {
      return "a";
    } else {
      return String.fromCharCode(char.charCodeAt() + 1);
    }
  });

  let vowelCapitalize = newStr.replace(/[a|e|i|o|u]/gi, (char) => {
    return char.toUpperCase();
  });

  return vowelCapitalize;
};
console.log(letterChange("Web Developerz"));
