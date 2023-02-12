const secondGreatLow = (array) => {
  newArray = [];
  array.map((item) => {
    if (!newArray.includes(item)) {
      newArray.push(item);
    }
  });
  newArray.sort((a, b) => b - a);

  const secondGreatest = newArray[1];
  const secondeLower = newArray[newArray.length - 2];

  return `${secondGreatest} ${secondeLower}`;
};
console.log(secondGreatLow([7, 7, 98, 12, 106]));
