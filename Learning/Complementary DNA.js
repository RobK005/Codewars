function DNAStrand(dna) {
    //your code here
    let newDna = [];
    for (let i = 0; i < dna.length; i++) {
        if (dna[i] === 'A') {
            newDna.push('T');
        } else if (dna[i] === 'T') {
            newDna.push('A');
        } else if (dna[i] === 'C') {
            newDna.push('G');
        } else if (dna[i] === 'G') {
            newDna.push('C');
        }
    }
    return newDna.join('');
}