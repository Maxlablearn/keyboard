import { KeyboardKeys } from './src/key-array.js';
console.log('all work well');
console.log(KeyboardKeys);

//const keys = [{textEn:'q', textEnShift: 'Q', textBy:'й', textByShift:'Й', keyCode:'KeyQ',
// color: 'red', bgColor: 'gray', cssStyle: '.button', gridFraction: 2}];

class Keyboard {
  constructor(keys) {
    this.keys = keys;
    document.querySelector('body').insertAdjacentHTML('afterbegin', '<div class="container"></div>');
    this.keyboard = document.querySelector('.container');
    this.keyboard.insertAdjacentHTML('beforeend', '<h1> Look, it\'s KEYBOARD</h1>');
    this.keyboard.insertAdjacentHTML('beforeend', '<textarea class="textarea" rows="5" cols="50"></textarea>');
    this.textArea = document.querySelector('.textarea');
    this.keyboard.insertAdjacentHTML('beforeend', '<div class="key-field"></div>');
    this.keyField = document.querySelector('.key-field');
    // this.keyField.insertAdjacentHTML('beforeend', '<div class="row"></div>');
    keys.forEach(k => {
      if (k.keyCode === 'Backquote' || k.keyCode === 'Tab' || k.keyCode === 'CapsLock' || k.keyCode === 'ShiftLeft' || k.keyCode === 'ControlLeft') {
        this.keyField.insertAdjacentHTML('beforeend', '<div class="row"></div>');
        this.row = document.querySelector('.row:last-child');
        console.log('this.row - ', this.row);
      }
      this.row.insertAdjacentHTML('beforeend', `<div class="key" data-keyCode="${k.keyCode}">${k.textEn}</div>`);
    });
    console.log(this.textArea);
  
  }
  createKeyboard () {
  }
}

const keyboardApp = new Keyboard(KeyboardKeys);
