const position = letter => {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('').indexOf(letter) + 1;
    return `Position of alphabet: ${alphabet}`;
    }