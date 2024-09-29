/*

Given a time in -hour AM/PM format, convert it to military (24-hour) time.

Note:
- 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

*/


/*
  Two base cases:
  If we have a 12 hour, check if this is AM or PM
  AM - 12 = 0
  PM - 12 = 12

  Other cases
  AM -> Same hour
  PM -> 12 + hour


  12:00:00AM

  12:00:00PM

  Return '00:01:00'.
*/


const timeConversion = (time: string): string => {
  const timeRegex = new RegExp(/(\d{2}):(\d{2}):(\d{2})(AM|PM)/gm);
  const regexResult = RegExp(timeRegex).exec(time);
  let newTime = '';

  if (regexResult !== null) {
    const [, hours, minutes, seconds, period] = regexResult;
    let newHour = '';

    if (hours === '12') {
      newHour =
        period === 'AM'
          ? '00'
          : '12';
    } else {
      newHour =
        period === 'PM'
          ? `${Number(hours) + 12}`
          : hours;
    }
    newTime = `${newHour}:${minutes}:${seconds}`;
  }

  return newTime;
};


console.log(timeConversion('01:12:00PM'));