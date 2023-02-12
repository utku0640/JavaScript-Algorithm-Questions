const arithGeo = (array) => {
  let diff = array[1] - array[0];
  let ratio = array[1] / array[0];

  let isArithmetics = true;
  let isGeo = true;

  for (let i = 0; i < array.length - 1; i++) {
    if (array[i + 1] - array[i] != diff) {
      isArithmetics = false;
    }
    if (array[i + 1] / array[i] != ratio) {
      isGeo = false;
    }
  }
  if (isArithmetics === true) {
    return "Arithmetics";
  } else if (isGeo === true) {
    return "Geo";
  } else {
    return -1;
  }
};
console.log(arithGeo([2, 6, 18]));
