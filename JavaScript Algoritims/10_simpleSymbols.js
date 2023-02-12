const simpleSymbols = (str) => {
  let newArr = str.split("");
  let controlArr = [];
  newArr.map((item) => {
    if (/[a-zA-Z]/.test(item)) {
      if (
        newArr[newArr.indexOf(item) - 1] === "+" &&
        newArr[newArr.indexOf(item) + 1] === "+"
      ) {
        controlArr.push(1);
      } else {
        controlArr.push(0);
      }
    }
  });
  console.log(controlArr);
};

console.log(simpleSymbols("++d+===+c++==a"));
