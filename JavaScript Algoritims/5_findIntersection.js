const findIntersection = (arr) => {
  let intersection = [];
  const kume1 = arr[0].replace(/\s/g, "").split(",");
  const kume2 = arr[1].replace(/\s/g, "").split(",");

  kume2.map((item) => {
    if (kume1.includes(item)) {
      intersection.push(item);
    }
  });

  return intersection.toString();
};

console.log(findIntersection(["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]));
