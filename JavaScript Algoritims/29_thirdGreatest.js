const thirdGreatest = (array) => {
  array.sort((a, b) => b.length - a.length);
  return array[2];
};

console.log(thirdGreatest(["hello", "world", "after", "all"]));
