//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (dna) => {
  return dna.replace(/G/g, 'c')
            .replace(/C/g, 'g')
            .replace(/T/g, 'a')
            .replace(/A/g, 'u')
            .toUpperCase();
};
