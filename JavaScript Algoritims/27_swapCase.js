const swapCase = (str) => {
  let newArray = [];
  for (let i = 0; i < str.length; i++) {
    if (/[a-z]/.test(str[i])) {
      str[i].replace(/[a-z]/g, (char) => {
        newArray.push(char.toUpperCase());
      });
    } else {
      str[i].replace(/[A-Z]/g, (char) => {
        newArray.push(char.toLowerCase());
      });
    }
  }
  return newArray.join("");
};
console.log(swapCase("wdwqdASWDdfadqw"));
