const divisionStringified = (num1, num2) => {
  //   const division = Math.floor(num1 / num2).toString();
  //   const divisionArray = division.split("");
  //   const reversedArray = divisionArray.reverse();

  //   let arr = [];
  //   let j = 0;
  //   for (let i = 0; i < reversedArray.length; i++) {
  //     if (j != 0 && j % 3 === 0) {
  //       arr.push(reversedArray[i] + ",");
  //     } else {
  //       arr.push(reversedArray[i]);
  //     }
  //     j++;
  //   }
  // return arr.reverse().join("");

  return Math.floor(num1 / num2)
    .toString()
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
};
console.log(divisionStringified(123456789, 100000));
