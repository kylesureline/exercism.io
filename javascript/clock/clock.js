export class Clock {
  constructor(hours, minutes) {
    this.handleHours(hours);
    this.handleMinutes(minutes);
  }

  handleHours(hours) {
    if(hours >= 24) {
      this.hours = hours % 24;
    } else if(hours < 0) {
      if(!(hours % 24)) {
        this.hours = 0;
      } else {
        this.hours = 24 + (hours % 24);
      }
    } else {
      this.hours = hours || 0;
    }
  }

  handleMinutes(minutes) {
    if(minutes >= 60) {
      this.handleHours(this.hours + Math.floor(minutes / 60));
      this.minutes = minutes % 60;
    } else if(minutes < 0) {
      this.handleHours(this.hours + Math.floor(minutes / 60));
      this.minutes = 60 + (minutes % 60);
    } else {
      this.minutes = minutes || 0;
    }
  }

  toString() {
    return `${this.hours < 10 ? `0${this.hours}`: this.hours}:${this.minutes < 10 ? `0${this.minutes}`: this.minutes}`;
  }

  plus(minutes) {
    this.handleMinutes(this.minutes + minutes);
    return this;
  }

  minus(minutes) {
    this.handleMinutes(this.minutes - minutes);
    return this;
  }

  equals(newClock) {
    return (this.hours === newClock.hours && this.minutes === newClock.minutes)
  }
}
