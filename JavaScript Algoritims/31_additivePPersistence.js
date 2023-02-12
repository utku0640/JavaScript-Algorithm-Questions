const additivePersistence = (num) => {
  let sumOfDigits = sumFunction(num);
  let additivePersistence = 1;

  while (sumOfDigits > 9) {
    sumOfDigits = sumFunction(sumOfDigits);
    additivePersistence++;
  }
  return additivePersistence;
};

const sumFunction = (n) => {
  sum = 1;
  let newArray = n.toString().split("");
  for (let i = 0; i < newArray.length; i++) {
    sum += parseInt(newArray[i]);
  }
  return sum;
};

console.log(additivePersistence(2478));
