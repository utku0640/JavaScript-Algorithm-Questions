const abCheck = (str) => {
  let newArr = str.split("");
  if (newArr.includes("a")) {
    if (newArr[newArr.indexOf("a") + 4] === "b") {
      return true;
    }
  }
  return false;
};

console.log(abCheck("lane borrowed"));
