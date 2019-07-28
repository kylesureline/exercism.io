
export const toRna = (dna) => {
  const map = {
    'G': 'C',
    'C': 'G',
    'T': 'A',
    'A': 'U'
  };
  return dna.replace(/A|C|G|T/g, (letter) => {
    return map[letter];
  });
};
