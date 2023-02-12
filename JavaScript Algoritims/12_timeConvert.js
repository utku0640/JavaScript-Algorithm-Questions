const timeConvert = (num) => {
  if (num < 60) {
    return `0:${num}`;
  } else if (num >= 60) {
    const hoursPart = Math.floor(num / 60);
    const minPart = num % 60;
    return `${hoursPart}:${minPart}`;
  }
};
console.log(timeConvert(1423));
