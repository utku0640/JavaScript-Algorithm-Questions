const questionMark = (str) => {
  if (str.length < 5) {
    return false;
  }
  const a = str.replace(/[^0-9?]/g, "");

  const b = a.split("");

  const sums = [];
  let sum = 0;
  let yenileme = 0;

  b.map((item) => {
    if (item != "?") {
      sum = parseInt(item) + parseInt(b[yenileme + 4]);
      sums.push(sum);
    }
    yenileme++;
  });
  return sums.includes(10) ? true : false;
};
console.log(questionMark("acc?7??sss?3rr1??????5"));
