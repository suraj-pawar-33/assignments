var menu = null;
var txt = null;

window.addEventListener('error', function(ev){
    ev.preventDefault();
    console.warn('there must be an error');
    console.warn(ev.message);
});

document.addEventListener('DOMContentLoaded', function(){
    menu = document.querySelector('.menu');
    menu.classList.add('off');
    
    var box = document.getElementById("box");
    box.addEventListener('contextmenu', showMenu);
    
    menu.addEventListener('mouseleave', hideMenu)
    addMenuListeners();
    
    txt = document.getElementById('uppCase');
    addKeyListner();
});

function addMenuListeners(){
    document.getElementById('red').addEventListener('click', setColor);
    document.getElementById('gold').addEventListener('click', setColor);
    document.getElementById('green').addEventListener('click', setColor);
}

function setColor(ev){
    var clr = ev.target.id;
    document.getElementById("box").style.backgroundColor = clr;
}

function showMenu(ev){
    ev.preventDefault();
    
    console.log(ev.clientX, ev.clientY);
    menu.style.top = `${ev.clientY}px`;
    menu.style.left = `${ev.clientX}px`;
    
    menu.classList.remove('off');
}
function hideMenu(){
    menu.classList.add('off');
    menu.style.top = '-200%';
    menu.style.left = '-200%';
}

function addKeyListner(){
    //txt.addEventListener('keydown', getUppCase);
    
    //txt.addEventListener('keypress', getUppCase);
    
    //txt.addEventListener('keyup', getUppCase);
    
    txt.addEventListener('input', getUppCase);
}

function getUppCase(ev){
    var num = ev.charCode;
    var letter = String.fromCharCode(num);
    
    document.getElementById('output-uppcase').innerHTML = ev.type + ' event, charcode = ' + num + ", letter = "+ letter;
    ev.target.value = ev.target.value.toUpperCase();
}
















