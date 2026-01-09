/* First task */

function checkLengthStr(str, maxLength) {
  return str.length <= maxLength;
}

checkLengthStr('test', 5);
checkLengthStr('проверяемая строка', 10);

/* Second task */

function isPalindrome(str) {
  const newStr = str.replaceAll(' ', '').toLowerCase();
  let result = '';
  for (let i = newStr.length - 1; i >= 0; i--) {
    result += newStr.at(i);
  }
  return result === newStr;
}

isPalindrome('Лёша на полке клопа нашёл ');
isPalindrome('Кекс');

/* Third task */

function getNumbers(str) {
  const newStr = str.toString();
  let result = '';
  for (let i = 0; i <= newStr.length - 1; i++) {
    if (!isNaN(parseInt(newStr[i], 10))) {
      result += newStr[i];
    }
  }
  return parseInt(result, 10);
}

getNumbers(2023);
getNumbers('2025 год');

/* 5.9. Функции возвращаются */

const getMinutes = (time) => {
  const [hours, minutes] = time.split(':');
  return Number(hours) * 60 + Number(minutes);
};

const isWithinTimeRange = (workStart, workEnd, meetingStart, meetingDuration) => {
  const workStartMinutes = getMinutes(workStart);
  const workEndMinutes = getMinutes(workEnd);
  const meetingStartMinutes = getMinutes(meetingStart);
  const meetingEndMinutes = meetingStartMinutes + meetingDuration;

  return meetingStartMinutes >= workStartMinutes && meetingEndMinutes <= workEndMinutes;
};

isWithinTimeRange('08:00', '17:30', '14:00', 90); // true
isWithinTimeRange('8:0', '10:0', '8:0', 120);     // true
isWithinTimeRange('08:00', '14:30', '14:00', 90); // false
isWithinTimeRange('14:00', '17:30', '08:0', 90);  // false
isWithinTimeRange('8:00', '17:30', '08:00', 900); // false
