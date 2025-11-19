/* First task */

function checkLengthStr(str, maxLength) {
  if (str.length === maxLength) {
    return true;
  }
  return false;
}

checkLengthStr('test', 5);
checkLengthStr('test2', 5);

/* Second task */

function isPalindrome(str) {
  const newStr = str.replaceAll(' ', '').toLowerCase();
  let result = '';
  for (let i = newStr.length - 1; i >= 0; i--) {
    result += newStr.at(i);
  }
  if (result === newStr) {
    return true;
  }
  return false;
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
