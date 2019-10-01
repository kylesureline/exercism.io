export class Triangle {
  constructor(side1, side2, side3) {
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
  }

  sides() {
    return [this.side1, this.side2, this.side3];
  }

  sidesAreGreaterThanZero() {
    return this.sides().every((side) => side > 0);
  }

  twoSidesGreaterThanThird() {
    return (this.side1 + this.side2 >= this.side3) && (this.side1 + this.side3 >= this.side2) && (this.side2 + this.side3 >= this.side1);
  }

  isValid() {
    return this.sidesAreGreaterThanZero() && this.twoSidesGreaterThanThird();
  }

  matchingSideCount() {
    let matchCount = 0;
    for(let i = 0; i < this.sides().length - 1; i++) {
      let count = this.sides().filter((side) => side === this.sides()[i]).length;
      if(matchCount < count && count > 1) {
        matchCount = count;
      }
    }
    return matchCount;
  }

  kind() {
    if(!this.isValid()) {
      throw new Error('not a triangle');
    }
    if(this.matchingSideCount() === 3) {
      return 'equilateral';
    } else if(this.matchingSideCount() === 2) {
      return 'isosceles';
    } else if(this.matchingSideCount() === 0) {
      return 'scalene';
    }
  }
}
