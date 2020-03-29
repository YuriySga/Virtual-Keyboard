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
  Backquote: [tilde, "~", "`"],  
  Digit1: [one, '1', '!'],
  Digit2: [two,'2','@'],
  Digit3: [three,'3','#'],
  Digit4: [four,'4',"$"],
  Digit5: [five,'5','%'],
  Digit6: [six,'6','^'],
  Digit7: [seven,'7','&'],
  Digit8: [eight,'8','*'],
  Digit9: [nine,'9','('],
  Digit0: [zero,'0',')'],
  Minus: [minus,'-','_'],
  Equal: [equal,'=','+'],  
  KeyQ: [q,'q','Q'],
  KeyW: [w,'w','W'],
  KeyE: [e,'e','E'],
  KeyR: [r,'r','R'],
  KeyT: [t,'t','T'],
  KeyY: [y,'y','Y'],
  KeyU: [u,'u','U'],
  KeyI: [i,'i','I'],
  KeyO: [o,'o','O'],
  KeyP: [p,'p','P'],
  BracketLeft:[ha,'[','{'],
  BracketRight: [strongSign,']','}'],
  Backslash: [slash,'\\','|'],  
  KeyA: [a,'a','A'],
  KeyS: [s,'s','S'],
  KeyD: [d,'d','D'],
  KeyF: [f,'f','F'],
  KeyG: [g,'g','G'],
  KeyH: [h,'h','H'],
  KeyJ: [j,'j','J'],
  KeyK: [k,'k','K'],
  KeyL: [l,'l','L'],
  Semicolon: [colon,';',':'],
  Quote: [quotationMarks,"'",'"'], 
  KeyZ: [z,'z','Z'],
  KeyX: [x,'x','X'],
  KeyC: [c,'c','C'],
  KeyV: [v,'v','V'],
  KeyB: [b,'b','B'],
  KeyN: [n,'n','N'],
  KeyM: [m,'m','M'],
  Comma: [comma,',','<'],
  Period: [point,'.','>'],
  Slash: [questionMark,'/','?'],
  Backspace: [backspace],
  Tab: [tab],
  Delete: [del],
  CapsLock: [caps],
  Enter: [enter],
  ShiftLeft: [shift],
  ArrowUp: [arrowUp],
  ShiftRight: [rightShift],
  ControlRight: [rightCtrl],
  ControlLeft: [ctrl],
  MetaLeft: [win],
  AltLeft: [alt],
  AltRight: [rightAlt],
  Space: [space],
  ArrowLeft: [arrowLeft],
  ArrowRight: [arrowRight],
  ArrowDown: [arrowDown],
};





document.addEventListener('keydown', function(event) {
 console.log(event.code);
 console.log(event.key);
 obj[event.code][0].classList.add("active");  
 if (event.key === "Shift") {
   shiftCase();
 }  
});

document.addEventListener('keyup', function(event) { 
  obj[event.code][0].classList.remove("active");
  if (event.key === "Shift") {
    unShiftCase();
  }      
 });


function shiftCase () {
  let arrVals = Object.values(obj);
  arrVals.forEach(el => {
    if (el[1] !== undefined) {
      el[0].innerText = el[2];
    }      
  });
}

function unShiftCase () {
  let arrVals = Object.values(obj);
  arrVals.forEach(el => {
    if (el[1] !== undefined) {
      el[0].innerText = el[1];
    }      
  });
}
