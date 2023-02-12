const longestWord = (sen) => {
  const array = sen.replace(/[^a-zA-Z ]/g, "").split(" ");

  const newArray = array.sort((a, b) => b.length - a.length);

  return newArray[0];
};

console.log(
  longestWord("aasdfg5435**??h q??we qwere23432tyreyu 3243252352350asas*90*9*")
);

/*
Longest
Word
- Using the JavaScript language, have the function LongestWord(sen)
take the sen parameter being passed and return the largest word in the
string.
  If there are two on more words that are the sane length, return the
first word from the string with that length.
   Ignore punctuation and assume sen will not be empty.
*/
