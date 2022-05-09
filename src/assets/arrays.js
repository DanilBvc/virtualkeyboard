let wrapper = function() {
    const wrapperDiv = document.createElement("div");
     wrapperDiv.classList.add('container');
     return wrapperDiv;
 }

 const russia = [
    'ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
    'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ','Delete',
    'Capslock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', '\\', 'Enter',
    'Leftshift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.','↑', 'Shift',
    'ctrl', 'Win', 'alt', 'Space', 'alt', 'ctrl', '←', '↓', '→',
]
const shiftRussia = [
    'Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace',
    'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ','Delete', 
    'Capslock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', '/', 'Enter',
    'Leftshift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',','↑', 'Shift', 
    'ctrl', 'Win', 'alt', 'Space', 'alt', 'ctrl', '←', '↓', '→',
]
const capsRussia = [
    'Ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
    'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ','Delete',
    'Capslock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', '\\', 'Enter',
    'Leftshift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.','↑', 'Shift', 
    'ctrl', 'Win', 'alt', 'Space', 'alt', 'ctrl', '←', '↓', '→',
]
const eng = [
    '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
    'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', 'Delete',
    'Capslock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '"', '\\', 'Enter',
    'Leftshift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/','↑', 'Shift', 
    'ctrl', 'Win', 'alt', 'Space', 'alt', 'ctrl', '←', '↓', '→',
]
const shiftEng = [
    '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace',
    'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', 'Delete',
    'Capslock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', '|', 'Enter',
    'Leftshift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?','↑', 'Shift', 
    'ctrl', 'Win', 'alt', 'Space', 'alt', 'ctrl', '←', '↓', '→',
]
const capsEng = [
    '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
    'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', 'Delete',
    'Capslock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '"', '\\', 'Enter',
    'Leftshift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/','↑', 'Shift', 
    'ctrl', 'Win', 'alt', 'Space', 'alt', 'ctrl', '←', '↓', '→',
]
 
 let secondArr = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4',
  'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9',
   'Digit0', 'Minus', 'Equal', 'Backspace', 'Tab',
    'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT',
     'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP',
      'BracketLeft', 'BracketRight','Delete', 'CapsLock', 'KeyA',
       'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH',
        'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote',
         'Backslash', 'Enter', 'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC',
          'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma',
           'Period', 'Slash', 'ArrowUp', 'ShiftRight', 'ControlLeft',
            'Win', 'AltLeft', 'Space', 'AltRight', 'ControlRight',
             'ArrowLeft', 'ArrowDown', 'ArrowRight']
let start = function() {
    const wrapperInner = wrapper();
    wrapperInner.insertAdjacentHTML('beforeend', 
    `<p class="title">virtual keyboard</p>
    <textarea class="textarea" name="" id="textarea" cols="50" rows="5"></textarea>
    <div class="keyboard" id="keyboard">
           
    </div>
    <p class="describtion">Клавиатура создана в операционной системе Windows</p>
    <p class="language">Для переключения языка комбинация: левыe ctrl + alt</p>`);
    document.body.appendChild(wrapperInner);
}


start();
document.querySelector('.textarea');
let create = function() {
    let out = '';
for(let i = 0; i < secondArr.length; i++) {
    out += '<div class="key '+ secondArr[i] + '"><div class="ru"><span class="caseDown modificator">'+ russia[i] + '</span><span class="caseUp modificator hidden">'+ capsRussia[i] + '</span><span class="caps modificator hidden">'+ capsRussia[i] +'</span><span class="shiftCaps modificator hidden">'+ shiftRussia[i] + '</span></div><div class="eng hidden"><span class="caseDown modificator hidden">'+ eng[i] + '</span><span class="caseUp modificator hidden">'+ capsEng[i] + '</span><span class="caps modificator hidden">'+ capsEng[i] +'</span><span class="shiftCaps modificator hidden">'+ shiftEng[i] + '</span></div></div>'
    
}

document.querySelector('#keyboard').innerHTML = out;
}
create();




  function runOnKeys(func, ...codes) {
      let pressed = new Set();
      document.addEventListener('keydown', function(event) {
        pressed.add(event.code);
        for (let code of codes) { 
          if (!pressed.has(code)) {
            return;
          }
        }
        pressed.clear();
        func();
      });
      document.addEventListener('keyup', function(event) {
        pressed.delete(event.code);
      });
    }


    runOnKeys(
      function() {
          let eng = document.querySelectorAll('.eng');
          let ru = document.querySelectorAll('.ru');
          let down = document.querySelectorAll('.caseDown');
          for(let i = 0; i < 63; i++) {
              eng[i].classList.toggle('hidden');
              ru[i].classList.toggle('hidden');
          }
          for(let i = 0; i < 126; i++) {
            down[i].classList.toggle('hidden');
          }
      },
      "ControlLeft",
      "AltLeft"
    );
    let counter = 0;
    let capsChange =  function(event) {
        if(event.code === "CapsLock") {
            counter++;
            if(counter % 2 == 0) {
                document.addEventListener('keydown', shiftChangeDown);
            document.addEventListener('keyup', shiftChangeUp);
            }else {
                document.removeEventListener('keydown', shiftChangeDown);
            document.removeEventListener('keyup', shiftChangeUp);
            }
                 if(document.querySelectorAll('.ru')[0].classList.contains('hidden')) {
                    for(let i = 0; i < 63; i++) {
                        document.querySelectorAll('.eng .caps')[i].classList.toggle('hidden');
                        document.querySelectorAll('.eng .caseDown')[i].classList.toggle('hidden');
                    }
                }else if(document.querySelectorAll('.eng')[0].classList.contains('hidden')) {
                    for(let i = 0; i < 63; i++) {
                        document.querySelectorAll('.ru .caps')[i].classList.toggle('hidden');
                        document.querySelectorAll('.ru .caseDown')[i].classList.toggle('hidden');
                        
                    }
                }
           }
           document.querySelector('.CapsLock').addEventListener('click', function() {
            counter++;
            if(counter % 2 == 0) {
                document.addEventListener('keydown', shiftChangeDown);
            document.addEventListener('keyup', shiftChangeUp);
            }else {
                document.removeEventListener('keydown', shiftChangeDown);
            document.removeEventListener('keyup', shiftChangeUp);
            }
                 if(document.querySelectorAll('.ru')[0].classList.contains('hidden')) {
                    for(let i = 0; i < 63; i++) {
                        document.querySelectorAll('.eng .caps')[i].classList.toggle('hidden');
                        document.querySelectorAll('.eng .caseDown')[i].classList.toggle('hidden');
                    }
                }else if(document.querySelectorAll('.eng')[0].classList.contains('hidden')) {
                    for(let i = 0; i < 63; i++) {
                        document.querySelectorAll('.ru .caps')[i].classList.toggle('hidden');
                        document.querySelectorAll('.ru .caseDown')[i].classList.toggle('hidden');
                        
                    }
                }
           });
      };

      let shiftChangeDown =  function(event) {
        if(event.code === "ShiftLeft" || event.code === "ShiftRight") {
            document.removeEventListener('keyup', capsChange);
                 if(document.querySelectorAll('.ru')[0].classList.contains('hidden')) {
                    for(let i = 0; i < 63; i++) {
                        document.querySelectorAll('.eng .shiftCaps')[i].classList.remove('hidden');
                        document.querySelectorAll('.eng .caseDown')[i].classList.add('hidden');
                    }
                }else if(document.querySelectorAll('.eng')[0].classList.contains('hidden')) {
                    for(let i = 0; i < 63; i++) {
                        document.querySelectorAll('.ru .shiftCaps')[i].classList.remove('hidden');
                        document.querySelectorAll('.ru .caseDown')[i].classList.add('hidden');
                        
                    }
                }
           }
      };
      let shiftChangeUp = function(event) {
        if(event.code === "ShiftLeft" || event.code === "ShiftRight") {
            document.addEventListener('keyup', capsChange);
                 if(document.querySelectorAll('.ru')[0].classList.contains('hidden')) {
                    for(let i = 0; i < 63; i++) {
                        document.querySelectorAll('.eng .shiftCaps')[i].classList.add('hidden');
                        document.querySelectorAll('.eng .caseDown')[i].classList.remove('hidden');
                    }
                }else if(document.querySelectorAll('.eng')[0].classList.contains('hidden')) {
                    for(let i = 0; i < 63; i++) {
                        document.querySelectorAll('.ru .shiftCaps')[i].classList.add('hidden');
                        document.querySelectorAll('.ru .caseDown')[i].classList.remove('hidden');
                        
                    }
                }
           }
      };

      document.addEventListener('keyup', capsChange);
      document.addEventListener('keydown', shiftChangeDown);
      document.addEventListener('keyup', shiftChangeUp);




      let keys = document.querySelectorAll('.key');
      for(let i = 0; i < keys.length; i++) {
        keys[i].addEventListener('click', function() {
          if(keys[i].classList.contains('active')) {
            keys[i].classList.remove('active');
          }else {
            for(let j = 0; j < keys.length; j++) {
                keys[j].classList.remove('active');
            }
            keys[i].classList.add('active');
          }
        })
    }
   

    document.onkeydown = function(event) {
        for(let i = 0; i < keys.length; i++) {
            if(keys[i].classList.contains(event.code)) {
                keys[i].classList.add('active');
               if(event.code == 'Backspace') {
               document.querySelector('.Backspace').addEventListener('click', function() {
                document.querySelector('#textarea').dispatchEvent(new KeyboardEvent("keydown", {keyCode: 8, key: 'Backspace'}))
               })
               }else if(event.code == 'CapsLock' || event.code == 'ShiftLeft' || event.code == 'AltLeft' || event.code == 'ControlLeft' || event.code == 'AltRight' || event.code == 'ControlRight' || event.code == 'ShiftRight' || event.code == 'Tab'  || event.code == 'ArrowDown'  || event.code == 'ArrowLeft'  || event.code == 'ArrowRight'  || event.code == 'ArrowUp') {
                document.querySelector('#textarea').innerHTML += '';
               }else if(event.code == 'Enter') {
                document.querySelector('.Enter').addEventListener('click', function() {
                    document.querySelector('#textarea').dispatchEvent(new KeyboardEvent("keydown", {keyCode: 13, key: 'Enter'}))
                   })
               }
               else {
                document.querySelector('#textarea').innerHTML += event.key; 
               }
            }
        }
    }
    document.onkeyup = function(event) {
        for(let i = 0; i < keys.length; i++) {
            if(keys[i].classList.contains(event.code)) {
                keys[i].classList.remove('active');
            }
        }
    }


            setInterval(function() {
                document.querySelector('#textarea').focus();
            }, 1000);

            for(let i = 0; i < keys.length; i++) {
                keys[i].addEventListener('click', function() {
                  if(document.querySelector('.ru').classList.contains('hidden')) {
                   if(counter % 2 == 0) {
               
                    document.querySelector('#textarea').innerHTML += eng[i];
                   }else {
                
                    document.querySelector('#textarea').innerHTML += capsEng[i];
                   }
                   
                  } else if(keys[i].classList.contains('Tab') || keys[i].classList.contains('ShiftLeft') || keys[i].classList.contains('ControlLeft') || keys[i].classList.contains('Win') || keys[i].classList.contains('AltLeft') || keys[i].classList.contains('AltRight') || keys[i].classList.contains('ControlRight') || keys[i].classList.contains('ShiftRight') || keys[i].classList.contains('Delete')  || keys[i].classList.contains('ShiftLeft')) {
                    document.querySelector('#textarea').innerHTML += '';
                       
                  }else if(keys[i].classList.contains('Space')) 
                  {
                    document.querySelector('#textarea').innerHTML += ' ';
                  }
                  else if(keys[i].classList.contains('CapsLock')) 
                  {
                    keys[i].addEventListener('click', capsChange);
                  }else if(keys[i].classList.contains('Backspace')) 
                  {
                    document.querySelector('#textarea').innerHTML += '';
                  }else if(keys[i].classList.contains('Enter')) 
                  {
                    document.querySelector('#textarea').innerHTML += '                                                                                 ';
                  }else {
                    if(counter % 2 == 0) {
                     
                        document.querySelector('#textarea').innerHTML += russia[i];
                       }else {
                     
                        document.querySelector('#textarea').innerHTML += capsRussia[i];
                       }
                  }
                 
                })
            }