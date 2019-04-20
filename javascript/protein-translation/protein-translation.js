export const translate = (string = '') => {

  const proteins = {
    AUG: 'Methionine',
    UUU: 'Phenylalanine',
    UUC: 'Phenylalanine',
    UUA: 'Leucine',
    UUG: 'Leucine',
    UCU: 'Serine',
    UCC: 'Serine',
    UCA: 'Serine',
    UCG: 'Serine',
    UAU: 'Tyrosine',
    UAC: 'Tyrosine',
    UGU: 'Cysteine',
    UGC: 'Cysteine',
    UGG: 'Tryptophan',
    UAA: 'STOP',
    UAG: 'STOP',
    UGA: 'STOP'
  };

  let array = [];

  for(let i = 0; i < (string.length - 2); i+= 3) {
    let codon = string.slice(i, i + 3);
    if(proteins[codon] === 'STOP') {
      return array;
    } else if(proteins[codon]) {
      array.push(proteins[codon]);
    } else {
      throw new Error('Invalid codon');
    }
  }

  return array;
};
