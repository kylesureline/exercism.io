export const transform = (data) => {
  let newData = {};
  for(let point in data) {
    data[point].forEach((letter) => {
      newData[letter.toLowerCase()] = parseInt(point);
    });
  }
  return newData;
};
