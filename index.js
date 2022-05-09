import { KeyboardKeys } from './src/key-array.js';

class Keyboard {
  constructor(keys) {
    this.keys = keys;
    this.keyField = [];
    this.buttons = [];
    this.doc = [];
    this.textArea = [];
    this.textPosition = 0;
    this.language = 'En';
    this.shift = '';
    this.getLocalStorage();
  }

  setLocalStorage() {
    localStorage.setItem('virtualKeyboardLanguage', this.language);
  }

  getLocalStorage() {
    if (localStorage.getItem('virtualKeyboardLanguage') !== 'undefined') {
      this.language = localStorage.getItem('virtualKeyboardLanguage') || 'En';
    }
  }

  createKeyboard() {
    document.querySelector('body').insertAdjacentHTML('afterbegin', '<div class="container"></div>');
    this.keyboard = document.querySelector('.container');
    this.keyboard.insertAdjacentHTML('beforeend', '<h1>KEYBOARD</h1>');
    this.keyboard.insertAdjacentHTML('beforeend', '<textarea id="textarea" autofocus="true" class="textarea" rows="5"></textarea>');
    this.textArea = document.querySelector('#textarea');
    this.keyboard.insertAdjacentHTML('beforeend', '<div class="key-field"></div>');
    this.keyboard.insertAdjacentHTML('beforeend', '<div class="description">For change language press Ctrl + Shift</div>');
    this.keyField = document.querySelector('.key-field');
    this.keys.forEach(k => {
      if (k.keyCode === 'Backquote' || k.keyCode === 'Tab' || k.keyCode === 'CapsLock' || k.keyCode === 'ShiftLeft' || k.keyCode === 'ControlLeft') {
        this.keyField.insertAdjacentHTML('beforeend', '<div class="row"></div>');
        this.row = document.querySelector('.row:last-child');
      }
      this.row.insertAdjacentHTML('beforeend', `<div class="key" data-keyCode="${k.keyCode}">${k[`text${this.language}`]}</div>`);
    });
    this.buttons = document.querySelectorAll('.key');
  }

  addKeyListeners() {
    this.doc = document.querySelector('body');
    this.doc.addEventListener('keydown', (event) => {
      this.showPressedKey(event.code);
      if (event.key === 'Shift') {
        this.shiftKeys();
      }
      event.preventDefault();
    });
    this.doc.addEventListener('keyup', (event) => {
      if (event.key === 'Shift') {
        this.unShiftKeys();
      }
      if ((event.key === 'Shift' && event.ctrlKey)) {
        this.changeLanguage();
      }
      this.unShowPressedKey(event.code);
      this.writeSymbol(this.keys.find((e) => e.keyCode === event.code)[`text${this.language}${this.shift}`]);
      event.preventDefault();
    });
  }

  addMouseListeners() {
    this.keyField.addEventListener('mousedown', (event) => {
      event.target.addEventListener('mouseout', (ev) => {
        this.unShowPressedKey(ev.target.dataset.keycode);
      });
      if (event.target.dataset.keycode === 'ShiftLeft' || event.target.dataset.keycode === 'ShiftRight') {
        this.shiftKeys();
      }
      this.showPressedKey(event.target.dataset.keycode);
      if (event.target.classList.contains('key')) {
        this.writeSymbol(event.target.textContent);
      }
      event.preventDefault();
    });
    this.keyField.addEventListener('mouseup', (event) => {
      if (event.target.classList.contains('key')) {
        if (event.target.dataset.keycode === 'ShiftLeft' || event.target.dataset.keycode === 'ShiftRight') {
          this.unShiftKeys();
        }
        this.unShowPressedKey(event.target.dataset.keycode);
      }
    });
  }

  writeSymbol(keyCode) {
    let position = this.textArea.selectionStart;
    let text = this.textArea.value;
    this.textArea.focus();
    let sumb;
    switch (keyCode) {
      case 'Backspace':
        this.backspace();
        return;
      case 'Enter':
        sumb = '\n';
        break;
      case 'Tab':
        sumb = '\t';
        break;
      case 'CapsLock':
        sumb = '';
        this.capsLock();
        break;
      case 'Shift':
        sumb = '';
        break;
      case 'Ctrl':
        sumb = '';
        break;
      case 'MetaLeft':
        sumb = '';
        break;
      case 'Alt':
        sumb = '';
        break;
      default:
        sumb = keyCode;
    }
    this.textArea.value = text.slice(0, position) + sumb + text.slice(position);
    this.textArea.selectionStart = position + 1;
    this.textArea.selectionEnd = position + 1;
  }

  capsLock() {
    if (this.shift === '') {
      this.shift = 'Shift';
      document.querySelector('.key[data-keycode=CapsLock]').classList.add('active');
    } else {
      this.shift = '';
      document.querySelector('.key[data-keycode=CapsLock]').classList.remove('active');
    }
    this.changeKeys();
  }

  backspace() {
    let position = this.textArea.selectionStart;
    if (position === 0) {
      return;
    }
    let text = this.textArea.value;
    this.textArea.value = text.slice(0, position - 1) + text.slice(position);
    this.textArea.selectionStart = position - 1;
    this.textArea.selectionEnd = position - 1;
  }

  shiftKeys() {
    this.shift = 'Shift';
    this.changeKeys();
  }

  unShiftKeys() {
    this.shift = '';
    this.changeKeys();
  }

  changeLanguage() {
    if (this.language === 'En') {
      this.language = 'By';
    } else {
      this.language = 'En';
    }
    this.changeKeys();
    this.setLocalStorage();
  }

  changeKeys() {
    this.buttons.forEach((but) => {
      /* eslint no-param-reassign: "error" */
      but.innerText = this.keys.find((e) => e.keyCode === but.dataset.keycode)[`text${this.language}${this.shift}`];
    });
  }

  showPressedKey(code) {
    const element = [...this.buttons].find((el) => el.dataset.keycode === code);
    if (element) {
      element.classList.add('active');
    }
  }

  unShowPressedKey(code) {
    const element = [...this.buttons].find((el) => el.dataset.keycode === code);
    if (element) {
      element.classList.remove('active');
    }
  }
}

const keyboardApp = new Keyboard(KeyboardKeys);
keyboardApp.createKeyboard();
keyboardApp.addKeyListeners();
keyboardApp.addMouseListeners();
