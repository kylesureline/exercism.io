export const isLeap = (year) => {
  if(!(year % 4)) {
    if(!(year % 100)) {
      if(!(year % 400)) {
        return true;
      } else {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
};
