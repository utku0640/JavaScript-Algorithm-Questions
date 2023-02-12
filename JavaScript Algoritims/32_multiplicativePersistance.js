const multiplicativePersistance = (num) => {
  let multiple = multipleFunction(num);
  let multiplicativePersistance = 1;
  while (multiple > 9) {
    multiple = multipleFunction(multiple);
    multiplicativePersistance++;
  }
  return multiplicativePersistance;
};

const multipleFunction = (n) => {
  let sumMultiple = 1;
  let strArr = n.toString().split("");
  for (let i = 0; i < strArr.length; i++) {
    sumMultiple *= strArr[i];
  }

  return sumMultiple;
};

console.log(multiplicativePersistance(39));
