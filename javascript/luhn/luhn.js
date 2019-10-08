export class Luhn {
  constructor(string) {
    this.string = string;
  }

  get valid() {
    const string = this.string.replace(/[' ']/g, '');

    const doubleDigits = (string) => {
      const handleGreaterThan10 = (num) => {
        if(num > 9) {
          return num - 9;
        }
        return num;
      }
      let str = '';
      for(let i = string.length - 1; i >= 0; i--) {
        if(str.length % 2 === 0) {
          str = `${string.charAt(i)}${str}`;
        } else {
          str = `${handleGreaterThan10(parseInt(string.charAt(i)) * 2)}${str}`;
        }
      }
      return str;
    } // end doubleDigits

    const sumDigits = (string) => {
      let sum = 0;
      for(let i = 0; i < string.length; i++) {
        sum += parseInt(string.charAt(i));
      }
      return sum;
    } // end sumDigits

    return string.length > 1 && sumDigits(doubleDigits(string)) % 10 === 0;
  }
}
