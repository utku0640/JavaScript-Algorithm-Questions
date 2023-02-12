const wordCount = (str) => {
  return str.trim().split(" ").length;
};

console.log(wordCount(" Never eat shredded wheat "));
// trim() methods close the space at end and start of the array
