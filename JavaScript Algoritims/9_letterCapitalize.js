const letterCapitalize = (str) => {
  let array = str.split(" ");

  let a = [];
  array.map((item) => {
    a.push(item.slice(0, 1).toUpperCase() + item.slice(1, item.length));
  });

  return a.join(" ");
};

console.log(letterCapitalize("i want to be a web developer"));
