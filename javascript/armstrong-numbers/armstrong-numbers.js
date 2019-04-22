export const validate = (number) => {
  const string = number.toString();
  let sum = 0;
  for(let i = 0; i < string.length; i++) {
    sum += Math.pow(string[i], string.length);
  }
  return number === sum;
};
