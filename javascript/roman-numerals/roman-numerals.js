export const toRoman = (number) => {

  function countRemainderOf(romanLetter) {
    let remainder = number % romanLetter;
    let res = (number - remainder) / romanLetter;
    number -= res * romanLetter;
    return res;
  }

  function ninesFormatter(fives, ones, tenChar, fiveChar, oneChar) {

    function onesFormatter(ones, oneChar) {
      let onesStr = '';
      for(let index = 0; index < ones; index += 1) {
        onesStr += oneChar;
      }
      return onesStr;
    }

    let str = '';

    if(fives === 1) {
      if(ones === 4) {
        str += `${oneChar}${tenChar}`;
      } else {
        str += fiveChar;
        str += onesFormatter(ones, oneChar);
      }
    } else if(ones === 4) {
      str += `${oneChar}${fiveChar}`;
    } else {
      str += onesFormatter(ones, oneChar);
    }

    return str;
  }

  let m = countRemainderOf(1000);
  let d = countRemainderOf(500);
  let c = countRemainderOf(100);
  let l = countRemainderOf(50);
  let x = countRemainderOf(10);
  let v = countRemainderOf(5);
  let i = countRemainderOf(1);

  let romanNumeral = '';

  for(let mi = 0; mi < m; mi += 1) {
    romanNumeral += 'M';
  }

  romanNumeral += ninesFormatter(d, c, 'M', 'D', 'C');
  romanNumeral += ninesFormatter(l, x, 'C', 'L', 'X');
  romanNumeral += ninesFormatter(v, i, 'X', 'V', 'I');

  return romanNumeral;

};
