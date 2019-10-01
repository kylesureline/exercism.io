export const toRoman = (number) => {
  const map = [
    {1000: 'M'},
    {900: 'CM'},
    {500: 'D'},
    {400: 'CD'},
    {100: 'C'},
    {90: 'XC'},
    {50: 'L'},
    {40: 'XL'},
    {10: 'X'},
    {9: 'IX'},
    {5: 'V'},
    {4: 'IV'},
    {1: 'I'}
  ];

  let romanNumeral = '';

  map.forEach((letter) => {
    for(let prop in letter) {
      while(number >= Number(prop)) {
        romanNumeral += letter[prop];
        number -= Number(prop);
      }
    }
  });

  return romanNumeral;
};
