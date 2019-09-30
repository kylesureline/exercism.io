export const toRoman = (number) => {

  const countRemainderOf = (romanLetter) => {
    let remainder = number % romanLetter;
    let res = (number - remainder) / romanLetter;
    number -= res * romanLetter;
    return res;
  }

  const ninesFormatter = (fives, ones, tenChar, fiveChar, oneChar) => {

    const onesFormatter = (ones, oneChar) => {
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

  const letterMap = [
    {
      letter: 'M',
      value: 1000,
      count: 0
    },
    {
      letter: 'D',
      value: 500,
      count: 0
    },
    {
      letter: 'C',
      value: 100,
      count: 0
    },
    {
      letter: 'L',
      value: 50,
      count: 0
    },
    {
      letter: 'X',
      value: 10,
      count: 0
    },
    {
      letter: 'V',
      value: 5,
      count: 0
    },
    {
      letter: 'I',
      value: 1,
      count: 0
    }
  ].map((letter) => {
    return {
      ...letter,
      count: countRemainderOf(letter.value)
    };
  });

  let romanNumeral = '';

  for(let mi = 0; mi < letterMap[0].count; mi += 1) {
    romanNumeral += letterMap[0].letter;
  }
  for(let i = 1; i < letterMap.length; i+=2) {
    romanNumeral += ninesFormatter(
      letterMap[i].count,
      letterMap[i + 1].count,
      letterMap[i - 1].letter,
      letterMap[i].letter,
      letterMap[i + 1].letter
    );
  }

  return romanNumeral;
};
