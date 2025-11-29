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
