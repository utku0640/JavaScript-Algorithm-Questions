const dashInsert = (str) => {
  let newArray = [];

  for (let i = 0; i < str.length; i++) {
    if (/[^1-9]/.test(str[i])) {
      newArray.push(str[i]);
    } else {
      if (
        str[i] % 2 != 0 &&
        str[i + 1] % 2 != 0 &&
        str[i + 1] != undefined &&
        /[1-9]/.test(str[i + 1])
      ) {
        newArray.push(str[i] + "-");
      } else {
        newArray.push(str[i]);
      }
    }
  }
  return newArray.join("");
};

console.log(dashInsert("454793c"));
