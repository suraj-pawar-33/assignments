
//1st

//document.addEventListener("DOMContentLoaded", init);


/*
function init(){
    var myBtn = document.getElementById("btn");
    var myLnk = document.getElementById("lnk");
    var mytxt = document.getElementById("txt");


    myBtn.addEventListener("click", buttnClicked);
    
    myLnk.addEventListener("click", ev => document.getElementById("output").innerHTML="Yo");


    mytxt.addEventListener("input", ev=> console.log(ev.type, ev.target.value));

    mytxt.addEventListener("change", ev=> document.getElementById("output").innerHTML= ev.type + " -> " + ev.target.value);

    mytxt.addEventListener("blur", ev=> console.log(ev.type, ev.target.value));
}
function buttnClicked(ev){
        document.getElementById("output").innerHTML = "gone";
    }

*/

//2nd

var obj = {
    init: function () {
        document.querySelector('#btn').addEventListener('click', this);
        document.querySelector('#btn').addEventListener('focus', this);
        document.querySelector('#btn').addEventListener('blur', this);
        
        
        
    },
    handleEvent: function(ev){
        switch(ev.type){
            case 'click':
                this.something(ev);
                break;
            case 'focus':
                this.something(ev);
                break;
            case 'blur':
                this.something(ev);
                break;
            
        }
    },
    something: function(ev){
        document.getElementById("output").innerHTML=ev.type+"-ed";
    }
}
obj.init();

/*
//3rd


var born = new Event('p-born');
var died = new CustomEvent('p-died', {detail:Date.now()});
document.addEventListener('DOMContentLoaded', init);

function init() {
    var m = document.querySelector("main");
    addPara(m, "this is a first para.");
    addPara(m, "The second tallest man in the world is  8'3");
    m.addEventListener('click', function(ev){
        removePara(m, m.firstElementChild);
    });
}

function addPara (parent, txt) {
    var p = document.createElement('p');
    p.innerHTML = txt;
    
    p.addEventListener('p-born', wasBorn);
    p.addEventListener('p-died', hasDied);
    p.dispatchEvent(born);
    
    parent.appendChild(p);
}
function removePara (parent, p) {
    this.removeEventListener('p-died', removePara);
    parent.removeChild(p);
    p.dispatchEvent(died);
}
function wasBorn(ev) {
    console.log(ev.type);
}
function hasDied(ev) {
    console.log(ev.type+' at '+ev.detail);
}


*************************************************************





*/






