export const gigasecond = (date) => {
  return new Date(
    Date.UTC(
      date.getFullYear(),
      date.getMonth(),
      date.getUTCDate(),
      date.getUTCHours(),
      date.getMinutes(),
      date.getSeconds()
    ) + 1000000000000
  );
};
