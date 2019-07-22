export const gigasecond = (date) => {
  const GIGASECOND_IN_MS = 10 ** 12;
  return new Date(date.getTime() + GIGASECOND_IN_MS);
};
