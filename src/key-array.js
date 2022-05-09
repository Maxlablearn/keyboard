const KeyboardKeys = [
  {
    keyCode: 'Backquote',
    textEn: '`',
    textEnShift: '~',
    textBy: 'ё',
    textByShift: 'Ё'
  },
  {
    keyCode: 'Digit1',
    textEn: '1',
    textEnShift: '!',
    textBy: '1',
    textByShift: '!'
  },
  {
    keyCode: 'Digit2',
    textEn: '2',
    textEnShift: '@',
    textBy: '2',
    textByShift: '\\'
  },
  {
    keyCode: 'Digit3',
    textEn: '3',
    textEnShift: '#',
    textBy: '3',
    textByShift: '№'
  },
  {
    keyCode: 'Digit4',
    textEn: '4',
    textEnShift: '$',
    textBy: '4',
    textByShift: ';'
  },
  {
    keyCode: 'Digit5',
    textEn: '5',
    textEnShift: '%',
    textBy: '5',
    textByShift: '%'
  },
  {
    keyCode: 'Digit6',
    textEn: '6',
    textEnShift: '^',
    textBy: '6',
    textByShift: ':'
  },
  {
    keyCode: 'Digit7',
    textEn: '7',
    textEnShift: '&',
    textBy: '7',
    textByShift: '?'
  },
  {
    keyCode: 'Digit8',
    textEn: '8',
    textEnShift: '*',
    textBy: '8',
    textByShift: '*'
  },
  {
    keyCode: 'Digit9',
    textEn: '9',
    textEnShift: '(',
    textBy: '9',
    textByShift: '('
  },
  {
    keyCode: 'Digit0',
    textEn: '0',
    textEnShift: ')',
    textBy: '0',
    textByShift: ')'
  },
  {
    keyCode: 'Minus',
    textEn: '-',
    textEnShift: '_',
    textBy: '-',
    textByShift: '_'
  },
  {
    keyCode: 'Equal',
    textEn: '=',
    textEnShift: '+',
    textBy: '=',
    textByShift: '+'
  },
  {
    keyCode: 'Backspace',
    textEn: 'Backspace',
    textEnShift: 'Backspace',
    textBy: 'Backspace',
    textByShift: 'Backspace'
  },
  {
    keyCode: 'Tab',
    textEn: 'Tab',
    textEnShift: 'Tab',
    textBy: 'Tab',
    textByShift: 'Tab'
  },
  {
    keyCode: 'KeyQ',
    textEn: 'q',
    textEnShift: 'Q',
    textBy: 'й',
    textByShift: 'Й'
  },
  {
    keyCode: 'KeyW',
    textEn: 'w',
    textEnShift: 'W',
    textBy: 'ц',
    textByShift: 'Ц'
  },
  {
    keyCode: 'KeyE',
    textEn: 'e',
    textEnShift: 'E',
    textBy: 'у',
    textByShift: 'У'
  },
  {
    keyCode: 'KeyR',
    textEn: 'r',
    textEnShift: 'R',
    textBy: 'к',
    textByShift: 'К'
  },
  {
    keyCode: 'KeyT',
    textEn: 't',
    textEnShift: 'T',
    textBy: 'е',
    textByShift: 'Е'
  },
  {
    keyCode: 'KeyY',
    textEn: 'y',
    textEnShift: 'Y',
    textBy: 'н',
    textByShift: 'Н'
  },
  {
    keyCode: 'KeyU',
    textEn: 'u',
    textEnShift: 'U',
    textBy: 'г',
    textByShift: 'Г'
  },
  {
    keyCode: 'KeyI',
    textEn: 'i',
    textEnShift: 'I',
    textBy: 'ш',
    textByShift: 'Ш'
  },
  {
    keyCode: 'KeyO',
    textEn: 'o',
    textEnShift: 'O',
    textBy: 'ў',
    textByShift: 'Ў'
  },
  {
    keyCode: 'KeyP',
    textEn: 'p',
    textEnShift: 'P',
    textBy: 'з',
    textByShift: 'З'
  },
  {
    keyCode: 'BracketLeft',
    textEn: '[',
    textEnShift: '{',
    textBy: 'х',
    textByShift: 'Х'
  },
  {
    keyCode: 'BracketRight',
    textEn: ']',
    textEnShift: '}',
    textBy: "'",
    textByShift: "'"
  },
  {
    keyCode: 'Backslash',
    textEn: '\\',
    textEnShift: '|',
    textBy: '\\',
    textByShift: '/'
  },
  {
    keyCode: 'CapsLock',
    textEn: 'CapsLock',
    textEnShift: 'CapsLock',
    textBy: 'CapsLock',
    textByShift: 'CapsLock'
  },
  {
    keyCode: 'KeyA',
    textEn: 'a',
    textEnShift: 'A',
    textBy: 'ф',
    textByShift: 'Ф'
  },
  {
    keyCode: 'KeyS',
    textEn: 's',
    textEnShift: 'S',
    textBy: 'ы',
    textByShift: 'Ы'
  },
  {
    keyCode: 'KeyD',
    textEn: 'd',
    textEnShift: 'D',
    textBy: 'в',
    textByShift: 'В'
  },
  {
    keyCode: 'KeyF',
    textEn: 'f',
    textEnShift: 'F',
    textBy: 'а',
    textByShift: 'А'
  },
  {
    keyCode: 'KeyG',
    textEn: 'g',
    textEnShift: 'G',
    textBy: 'п',
    textByShift: 'П'
  },
  {
    keyCode: 'KeyH',
    textEn: 'h',
    textEnShift: 'H',
    textBy: 'р',
    textByShift: 'Р'
  },
  {
    keyCode: 'KeyJ',
    textEn: 'j',
    textEnShift: 'J',
    textBy: 'о',
    textByShift: 'О'
  },
  {
    keyCode: 'KeyK',
    textEn: 'k',
    textEnShift: 'K',
    textBy: 'л',
    textByShift: 'Л'
  },
  {
    keyCode: 'KeyL',
    textEn: 'l',
    textEnShift: 'L',
    textBy: 'д',
    textByShift: 'Д'
  },
  {
    keyCode: 'Semicolon',
    textEn: ';',
    textEnShift: ':',
    textBy: 'ж',
    textByShift: 'Ж'
  },
  {
    keyCode: 'Quote',
    textEn: "'",
    textEnShift: '\\',
    textBy: 'э',
    textByShift: 'Э'
  },
  {
    keyCode: 'Enter',
    textEn: 'Enter',
    textEnShift: 'Enter',
    textBy: 'Enter',
    textByShift: 'Enter'
  },
  {
    keyCode: 'ShiftLeft',
    textEn: 'Shift',
    textEnShift: 'Shift',
    textBy: 'Shift',
    textByShift: 'Shift'
  },
  {
    keyCode: 'KeyZ',
    textEn: 'z',
    textEnShift: 'Z',
    textBy: 'я',
    textByShift: 'Я'
  },
  {
    keyCode: 'KeyX',
    textEn: 'x',
    textEnShift: 'X',
    textBy: 'ч',
    textByShift: 'Ч'
  },
  {
    keyCode: 'KeyC',
    textEn: 'c',
    textEnShift: 'C',
    textBy: 'с',
    textByShift: 'С'
  },
  {
    keyCode: 'KeyV',
    textEn: 'v',
    textEnShift: 'V',
    textBy: 'м',
    textByShift: 'М'
  },
  {
    keyCode: 'KeyB',
    textEn: 'b',
    textEnShift: 'B',
    textBy: 'і',
    textByShift: 'І'
  },
  {
    keyCode: 'KeyN',
    textEn: 'n',
    textEnShift: 'N',
    textBy: 'т',
    textByShift: 'Т'
  },
  {
    keyCode: 'KeyM',
    textEn: 'm',
    textEnShift: 'M',
    textBy: 'ь',
    textByShift: 'Ь'
  },
  {
    keyCode: 'Comma',
    textEn: ',',
    textEnShift: '<',
    textBy: 'б',
    textByShift: 'Б'
  },
  {
    keyCode: 'Period',
    textEn: '.',
    textEnShift: '>',
    textBy: 'ю',
    textByShift: 'Ю'
  },
  {
    keyCode: 'Slash',
    textEn: '/',
    textEnShift: '?',
    textBy: '.',
    textByShift: ','
  },
  {
    keyCode: 'ArrowUp',
    textEn: '↑',
    textEnShift: '↑',
    textBy: '↑',
    textByShift: '↑'
  },
  {
    keyCode: 'ShiftRight',
    textEn: 'Shift',
    textEnShift: 'Shift',
    textBy: 'Shift',
    textByShift: 'Shift'
  },
  {
    keyCode: 'ControlLeft',
    textEn: 'Ctrl',
    textEnShift: 'Ctrl',
    textBy: 'Ctrl',
    textByShift: 'Ctrl'
  },
  {
    keyCode: 'MetaLeft',
    textEn: '',
    textEnShift: '',
    textBy: '',
    textByShift: ''
  },
  {
    keyCode: 'AltLeft',
    textEn: 'Alt',
    textEnShift: 'Alt',
    textBy: 'Alt',
    textByShift: 'Alt'
  },
  {
    keyCode: 'Space',
    textEn: ' ',
    textEnShift: ' ',
    textBy: ' ',
    textByShift: ' '
  },
  {
    keyCode: 'AltRight',
    textEn: 'Alt',
    textEnShift: 'Alt',
    textBy: 'Alt',
    textByShift: 'Alt'
  },
  {
    keyCode: 'ControlRight',
    textEn: 'Ctrl',
    textEnShift: 'Ctrl',
    textBy: 'Ctrl',
    textByShift: 'Ctrl'
  },
  {
    keyCode: 'ArrowLeft',
    textEn: '←',
    textEnShift: '←',
    textBy: '←',
    textByShift: '←'
  },
  {
    keyCode: 'ArrowDown',
    textEn: '↓',
    textEnShift: '↓',
    textBy: '↓',
    textByShift: '↓'
  },
  {
    keyCode: 'ArrowRight',
    textEn: '→',
    textEnShift: '→',
    textBy: '→',
    textByShift: '→'
  }
];

export { KeyboardKeys };
