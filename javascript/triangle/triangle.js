export class Triangle {
  constructor(side1, side2, side3) {
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
  }

  isTriangle(side1 = this.side1, side2 = this.side2, side3 = this.side3) {
    const sidesAreGreaterThanZero = [side1, side2, side3].every((side) => side > 0);
    const twoSidesGreaterThanThird = (() => (side1 + side2 >= side3) && (side1 + side3 >= side2) && (side2 + side3 >= side1))();

    return sidesAreGreaterThanZero && twoSidesGreaterThanThird;
  }

  kind(side1 = this.side1, side2 = this.side2, side3 = this.side3) {
    if(this.isTriangle()) {
      if(side1 === side2 && side1 === side3) {
        return 'equilateral';
      } else if(side1 === side2 || side1 === side3 || side2 === side3) {
        return 'isosceles';
      }
      return 'scalene';
    } else {
      throw new Error('not a triangle');
    }
  }
}
