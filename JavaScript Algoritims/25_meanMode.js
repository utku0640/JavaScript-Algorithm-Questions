const meanMode = (array) => {
  const mode = calculateMode(array);
  const mean = calculateMean(array);
  return mode === mean ? 1 : 0;
};

const calculateMean = (array) => {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
    mean = sum / array.length;
  }
  return mean;
};

const calculateMode = (array) => {
  let freq = {};

  for (let i = 0; i < array.length; i++) {
    if (array[i] in freq) {
      freq[array[i]]++;
    } else {
      freq[array[i]] = 1;
    }
  }
  const max = Math.max(...Object.values(freq));

  for (let j in freq) {
    if (freq[j] === max) {
      return parseInt(j);
    }
  }
};
console.log(meanMode([5, 3, 3, 3, 3, 3, 1]));
