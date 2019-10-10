const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let result = "";
    let numberstr = "";
    let morsestr = "";
    let n = "";

    for (let i=0; i<expr.length; i+=10) {
        numberstr = expr.slice (i, i+10)
        if (numberstr === "**********") {
            result += " ";
        }
        for (let k=0; k<numberstr.length; k+=2 ) {
            n = numberstr.slice (k, k+2);
            if (+n === 10) 
                morsestr += ".";
            else if (+n === 11) 
                morsestr += "-";
        }
            for (let key in MORSE_TABLE) {
                if (morsestr === key) {
                    result += MORSE_TABLE[key];
                    morsestr="";
                }
            }
    }
    return result;
}

module.exports = {
    decode
}