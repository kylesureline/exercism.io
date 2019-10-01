export const steps = (number) => {
  let count = -1;

  const collatz = (number) => {
    count++;
    if(number === 1) {
      return 1;
    }
    else if(number % 2 === 0) {
      return collatz(number / 2);
    } else if(number % 2 === 1) {
      return collatz((3 * number) + 1);
    }
  };

  if(number <= 0) {
    throw new Error('Only positive numbers are allowed');
  }

  collatz(number);
  
  return count;
};
