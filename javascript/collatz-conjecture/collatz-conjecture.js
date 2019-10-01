export const steps = (number) => {

  const collatz = (number, count) => {
    if(number === 1) return count;

    return collatz(number % 2 === 0 ? number / 2 : 3 * number + 1, count + 1);
  };

  if(number <= 0) {
    throw new Error('Only positive numbers are allowed');
  }

  return collatz(number, 0);
};
