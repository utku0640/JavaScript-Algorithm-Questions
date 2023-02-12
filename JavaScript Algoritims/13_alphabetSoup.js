const alphabetSoup = (str) => {
  let newStr = str.replace(/[^a-zA-z]/gi, "").split("");
  return newStr.sort().join(",");
};
console.log(alphabetSoup("wpefweğvnıasdaf2034é!'41421e4140  kqepf"));
