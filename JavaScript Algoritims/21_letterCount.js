const letterCount = (string) => {
  let newArray = string
    .replace(/[^a-zA-z ]/gi, "")
    .toLowerCase()
    .split(" ");
  let count = 0;
  newArray.map((item) => {
    for (let i = 0; i < item.length; i++) {
      for (let k = i + 1; i < item.length; k++) {
        if (item[i] != item[k]) {
          count++;
        }
      }
    }
  });
  return count;
};

console.log(letterCount("Today"));
