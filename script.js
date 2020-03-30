let lang = 'ENG';
let shiftCase = false;
let shiftCaseLeft = false;
let altCaseLeft = false;
let changeLangUpKeyFlag = false;
let capsLock = false;

const textin = document.querySelector('.textin');

const tilde = document.querySelector('.tilde');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const seven = document.querySelector('.seven');
const eight = document.querySelector('.eight');
const nine = document.querySelector('.nine');
const zero = document.querySelector('.zero');
const minus = document.querySelector('.minus');
const equal = document.querySelector('.equal');
const backspace = document.querySelector('.backspace');
const tab = document.querySelector('.tab');
const q = document.querySelector('.q');
const w = document.querySelector('.w');
const e = document.querySelector('.e');
const r = document.querySelector('.r');
const t = document.querySelector('.t');
const y = document.querySelector('.y');
const u = document.querySelector('.u');
const i = document.querySelector('.i');
const o = document.querySelector('.o');
const p = document.querySelector('.p');
const ha = document.querySelector('.ha');
const strongSign = document.querySelector('.strongSign');
const slash = document.querySelector('.slash');
const del = document.querySelector('.del');
const caps = document.querySelector('.caps');
const a = document.querySelector('.a');
const s = document.querySelector('.s');
const d = document.querySelector('.d');
const f = document.querySelector('.f');
const g = document.querySelector('.g');
const h = document.querySelector('.h');
const j = document.querySelector('.j');
const k = document.querySelector('.k');
const l = document.querySelector('.l');
const colon = document.querySelector('.colon');
const quotationMarks = document.querySelector('.quotationMarks');
const enter = document.querySelector('.enter');
const shift = document.querySelector('.shift');
const z = document.querySelector('.z');
const x = document.querySelector('.x');
const c = document.querySelector('.c');
const v = document.querySelector('.v');
const b = document.querySelector('.b');
const n = document.querySelector('.n');
const m = document.querySelector('.m');
const point = document.querySelector('.point');
const comma = document.querySelector('.comma');
const questionMark = document.querySelector('.questionMark');
const arrowUp = document.querySelector('.arrowUp');
const rightShift = document.querySelector('.rightShift');
const ctrl = document.querySelector('.ctrl');
const win = document.querySelector('.win');
const alt = document.querySelector('.alt');
const space = document.querySelector('.space');
const rightAlt = document.querySelector('.rightAlt');
const rightCtrl = document.querySelector('.rightCtrl');
const arrowLeft = document.querySelector('.arrowLeft');
const arrowDown = document.querySelector('.arrowDown');
const arrowRight = document.querySelector('.arrowRight');

const obj = {
  Backquote: [tilde, "~", "`", "ё", "Ё"],  
  Digit1: [one, '1', '!', "1", "!"],
  Digit2: [two,'2','@', "2", "\""],
  Digit3: [three,'3','#', "3", "№"],
  Digit4: [four,'4',"$", "4", ";"],
  Digit5: [five,'5','%', "5", "%"],
  Digit6: [six,'6','^', "6", ":"],
  Digit7: [seven,'7','&', "7", "?"],
  Digit8: [eight,'8','*', "8", "*"],
  Digit9: [nine,'9','(', "9", "("],
  Digit0: [zero,'0',')', "0", ")"],
  Minus: [minus,'-','_', "-", "_"],
  Equal: [equal,'=','+', "=", "+"],  
  KeyQ: [q,'q','Q', "й", "Й"],
  KeyW: [w,'w','W', "ц", "Ц"],
  KeyE: [e,'e','E', "у", "У"],
  KeyR: [r,'r','R', "к", "К"],
  KeyT: [t,'t','T', "е", "Е"],
  KeyY: [y,'y','Y', "н", "Н"],
  KeyU: [u,'u','U', "г", "Г"],
  KeyI: [i,'i','I', "ш", "Ш"],
  KeyO: [o,'o','O', "щ", "Щ"],
  KeyP: [p,'p','P', "з", "З"],
  BracketLeft:[ha,'[','{', "х", "Х"],
  BracketRight: [strongSign,']','}', "ъ", "Ъ"],
  Backslash: [slash,'\\','|', "\\", "/"],  
  KeyA: [a,'a','A', "ф", "Ф"],
  KeyS: [s,'s','S', "ы", "Ы"],
  KeyD: [d,'d','D', "в", "В"],
  KeyF: [f,'f','F', "а", "А"],
  KeyG: [g,'g','G', "п", "П"],
  KeyH: [h,'h','H', "р", "Р"],
  KeyJ: [j,'j','J', "о", "О"],
  KeyK: [k,'k','K', "л", "Л"],
  KeyL: [l,'l','L', "д", "Д"],
  Semicolon: [colon,';',':', "ж", "Ж"],
  Quote: [quotationMarks,"'",'"', "э", "Э"], 
  KeyZ: [z,'z','Z', "я", "Я"],
  KeyX: [x,'x','X', "ч", "Ч"],
  KeyC: [c,'c','C', "с", "С"],
  KeyV: [v,'v','V', "м", "М"],
  KeyB: [b,'b','B', "и", "И"],
  KeyN: [n,'n','N', "т", "Т"],
  KeyM: [m,'m','M', "ь", "Ь"],
  Comma: [comma,',','<', "б", "Б"],
  Period: [point,'.','>', "ю", "Ю"],
  Slash: [questionMark,'/','?', ".", ","],
  Space: [space,' ',' ',' ',' '],
  Enter: [enter,'\n','\n','\n','\n'],
  Backspace: [backspace],
  Tab: [tab],
  Delete: [del],
  CapsLock: [caps],
  ShiftLeft: [shift],
  ArrowUp: [arrowUp],
  ShiftRight: [rightShift],
  ControlRight: [rightCtrl],
  ControlLeft: [ctrl],
  MetaLeft: [win],
  AltLeft: [alt],
  AltRight: [rightAlt],  
  ArrowLeft: [arrowLeft],
  ArrowRight: [arrowRight],
  ArrowDown: [arrowDown],
};

document.addEventListener('keydown', function(event) {
  event.preventDefault(); 

  obj[event.code][0].classList.add("active");

  if (event.key === "Shift") {
    capsButtonIsPress();
  }  
  /* if (event.key === "Enter") {
    EnterButtonIsPress();
  }  */  

  if (event.code === "ShiftLeft") {
    shiftCaseLeft = true;
  }  

  if (event.code === "AltLeft") {
    altCaseLeft = true;
  }  

  if (event.key === "Tab") {
    tabCase();
  }

  if (event.code === "Backspace") {
    backspaceButtonIsPress();
  } 

  if (event.code === "Delete") {
    deleteButtonIsPress();
  } 

  if (event.code === "CapsLock") {
    if (capsLock === true) {
      obj[event.code][0].classList.remove("active");
    }
    capsButtonIsPress();
  }   

  identifyKey(event.code);
  checkLang();
  drawKey();
});

document.addEventListener('keyup', function(event) { 
  if (event.key === "CapsLock") return;
  obj[event.code][0].classList.remove("active");
  if (event.key === "Shift") {
    capsButtonIsPress();
  } 

  if (event.code === "ShiftLeft") {
    shiftCaseLeft = false;
   }  
  
   if (event.code === "AltLeft") {
    altCaseLeft = false;
    }   
  checkLang();
  drawKey();
 });

 /* function EnterButtonIsPress() {
  printKeyCode();
 } */

 function capsButtonIsPress() {
  if (capsLock === true) {
    capsLock = false;
  } else {
    capsLock = true;
  } 

  if (shiftCase === true) {
    shiftCase = false;
  } else {
    shiftCase = true;
  } 
}

 function deleteButtonIsPress() {
  let arr = textin.value.split('');
  let pos = textin.selectionStart;
  arr.splice(pos, 1);
  textin.value = arr.join('');
  textin.selectionStart = textin.selectionEnd = pos;
 }

 function backspaceButtonIsPress() {
  let arr = textin.value.split('');
  let pos = textin.selectionStart;
  if (pos === 0) return;
  arr.splice(pos - 1, 1);
  textin.value = arr.join('');
  textin.selectionStart = textin.selectionEnd = pos -1;
 }

 function printKeyCode(key) {
  let arr = textin.value.split('');
  let pos = textin.selectionStart;
  arr.splice(pos, 0, key);
  textin.value = arr.join('');
  textin.selectionStart = textin.selectionEnd = pos + 1;
 }


 function identifyKey(keyCode) {
  //let arrVals = Object.values(obj);
  //textin.value += obj[keyCode][1];
  //console.log(obj[keyCode][1]);

  if (shiftCase === false && lang === 'ENG') {
      if (obj[keyCode][1] !== undefined) {
        printKeyCode(obj[keyCode][1]);
      }      
  }

  if (shiftCase === true && lang === 'ENG') {
      if (obj[keyCode][2] !== undefined) {
        printKeyCode(obj[keyCode][2]);
      }      
  }

  if (shiftCase === false && lang === 'RUS') {
      if (obj[keyCode][3] !== undefined) {
        printKeyCode(obj[keyCode][3]);
      }      
  }

  if (shiftCase === true && lang === 'RUS') {
      if (obj[keyCode][4] !== undefined) {
        printKeyCode(obj[keyCode][4]);
      }      
  }  
}

function tabCase() {
  let arr = textin.value.split('');
  let pos = textin.selectionStart;
  arr.splice(pos, 0, "    ");
  textin.value = arr.join('');
  textin.selectionStart = textin.selectionEnd = pos + 4;
}

function checkLang() {
  if (changeLangUpKeyFlag) {
    if (altCaseLeft === false && shiftCaseLeft === false) {
      changeLangUpKeyFlag = false;
      changeLang();
      drawKey();
    }  
  } else if (altCaseLeft === true && shiftCaseLeft === true) {
    changeLangUpKeyFlag = true;
  }  else return;     
}

function changeLang () {
  if (lang === 'ENG') {
    lang = 'RUS';
  } else {
    lang = 'ENG';
  } 
}

function drawKey() {
  let arrVals = Object.values(obj);
  if (shiftCase === false && lang === 'ENG') {
    arrVals.forEach(el => {
      if (el[1] !== undefined) {
        el[0].innerText = el[1];
      }      
    });
  }

  if (shiftCase === true && lang === 'ENG') {
    arrVals.forEach(el => {
      if (el[2] !== undefined) {
        el[0].innerText = el[2];
      }      
    });
  }

  if (shiftCase === false && lang === 'RUS') {
    arrVals.forEach(el => {
      if (el[3] !== undefined) {
        el[0].innerText = el[3];
      }      
    });
  }

  if (shiftCase === true && lang === 'RUS') {
    arrVals.forEach(el => {
      if (el[4] !== undefined) {
        el[0].innerText = el[4];
      }      
    });
  }
}
