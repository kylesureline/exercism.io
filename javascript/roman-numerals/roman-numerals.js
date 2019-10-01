const romanNumerals = new Map(
  [
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I']
  ]
);

export const toRoman = (number) => {

  let romanNumeral = '';

  romanNumerals.forEach((value, key) => {
    while(number >= key) {
      romanNumeral += value;
      number -= key;
    }
  });

  return romanNumeral;
};
