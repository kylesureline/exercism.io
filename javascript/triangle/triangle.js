export class Triangle {
  constructor(side1, side2, side3) {
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
  }

  sidesAreGreaterThanZero() {
    return [this.side1, this.side2, this.side3].every((side) => side > 0);
  }

  twoSidesGreaterThanThird() {
    return (this.side1 + this.side2 >= this.side3) && (this.side1 + this.side3 >= this.side2) && (this.side2 + this.side3 >= this.side1);
  }

  isValid() {
    return this.sidesAreGreaterThanZero() && this.twoSidesGreaterThanThird();
  }

  matchingSideCount() {
    const sides = [this.side1, this.side2, this.side3];

    let matchCount = 0;
    for(let i = 0; i < sides.length; i++) {
      let count = sides.filter((side) => side === sides[i]).length;
      if(matchCount < count) {
        matchCount = count;
      }
    }
    return matchCount;
  }

  kind(side1 = this.side1, side2 = this.side2, side3 = this.side3) {
    if(this.isValid()) {
      if(this.matchingSideCount() === 3) {
        return 'equilateral';
      } else if(this.matchingSideCount() === 2) {
        return 'isosceles';
      }
      return 'scalene';
    } else {
      throw new Error('not a triangle');
    }
  }
}
