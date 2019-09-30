export const meetupDay = (year, month, day, week) => {
  const locale = 'en-US';
  const options = {
    dateStyle: 'full',
    weekday: 'long'
  };

  if(week === 'teenth') {
    let dayNumber = 12; // 13th to 19th
    while(!(new Date(year, month, dayNumber)).toLocaleString(locale, options).includes(day) && dayNumber < 21) {
      dayNumber++;
    }
    return new Date(year, month, dayNumber);
  } else if(week === 'last') {
    let dayNumber = 32; // 31st counting down
    let d = new Date(year, month, dayNumber);
    while(
      !d.toLocaleString(locale, options).includes(day)
      ||
      d.getUTCMonth() !== month
    ) {
      dayNumber--;
      d = new Date(year, month, dayNumber);
    }
    return new Date(year, month, dayNumber);
  } else {
    let targetWeekNumber = parseInt(week);
    let weekCount = 0;
    for(let dayNumber = 1; dayNumber < 32; dayNumber++) {
      const d = new Date(year, month, dayNumber);
      if(
        d.toLocaleString(locale, options).includes(day)
        &&
        d.getUTCMonth() === month
      ) {
        weekCount++;
        if(weekCount === targetWeekNumber) {
          return d;
        }
      }
    }
    throw new Error('Nonexistant day');
  }
}
