const countingMinutes = (time) => {
  let newArray = time.split("-");

  let time1 = {};
  let time2 = {};

  time1.meridiem = newArray[0].split(":")[1].slice(2, 4);
  time1.hour = parseInt(newArray[0].split(":")[0]);
  time1.minute = parseInt(newArray[0].split(":")[1].slice(0, 2));

  time2.meridiem = newArray[1].split(":")[1].slice(2, 4);
  time2.hour = parseInt(newArray[1].split(":")[0]);
  time2.minute = parseInt(newArray[1].split(":")[1].slice(0, 2));

  if (time1.meridiem === time2.meridiem) {
    const minutes =
      time2.hour * 60 + time2.minute - time1.hour * 60 + time1.minute;
    result = minutes > 0 ? minutes : 24 * 60 + minutes;
  } else {
    const minutes =
      time2.hour * 60 + time2.minute - time1.hour * 60 + time1.minute;
    result = 12 * 60 + minutes;
  }
  return result;
};
console.log(countingMinutes("10:00pm-9:00am"));
