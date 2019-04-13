export const encode = (str) => {

  let repeats = str.match(/([a-zA-Z]|[ ])\1+/g);

  if(Array.isArray(repeats)) {
    repeats.forEach(word => {
      str = str.replace(word, `${word.length}${word.charAt(0)}`);
    });
  }

  return str;

};

export const decode = (str) => {

  function longerWord(s) {
    let char = s.charAt(s.length - 1);
    let word = '';
    for(let i = 0; i < parseInt(s); i += 1) {
      word += char;
    }
    return word;
  }

  let repeats = str.match(/[0-9]{1,2}\D/g);

  if(Array.isArray(repeats)) {
    repeats.forEach(word => {
      str = str.replace(word, longerWord(word));
    });
  }

  return str;
};
