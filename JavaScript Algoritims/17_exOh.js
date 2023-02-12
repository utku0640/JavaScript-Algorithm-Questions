const ezOh = (str) => {
  let newStr = str.replace(/[^x|o]/gi, "");
  let newArr = newStr.split("");
  let counter_o = 0;
  let counter_x = 0;

  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] === "x") {
      counter_x++;
    } else {
      counter_o++;
    }
  }
  console.log(counter_x);
  console.log(counter_o);
  if (counter_o === counter_x) {
    return true;
  } else {
    return false;
  }
};
console.log(ezOh("xmspjooxijpoxsakxokoxoxxxoakxosaoxkapoxoaaxooooxxxooxx"));
