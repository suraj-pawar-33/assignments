


//way to make a private function variables.

function createPerson(){
    var firstName ='Suraj';
    var lastName = 'Pawar';
    
    objPerson = {
        getFirstName: function(){
            return firstName;
        },
        getLastName: function(){
            return lastName;        
        },
        setFirstName: function(name){
            firstName = name;
        },
        setLastName: function(name){
            lastName = name;
        }
    
    };
    return objPerson;
}


var person = createPerson();

console.log(person.getFirstName());
console.log(person.getLastName());

person.setFirstName('Rachel');
person.setLastName('Green');

console.log(person.firstName); //erroe
console.log(person.lastName); //error

console.log(person.getFirstName());
console.log(person.getLastName());






/********************************************************************/



var i;
var k;

var print = function(){
    console.log("this is i = "+i);
}

var printNum = function(){
    console.log("k = "+k);
}


for(i = 0; i<10; i++){
    setTimeout(print, 1000);
}

objprint = printNum();
for(k = 0; k<10; k++){
    setTimeout(printNum(), 9000);
}




//solution*************

for(i = 0; i<10; i++){
    
    (function() {
        var currentI = i;
        
        setTimeout(function(){console.log("solution "+currentI);}, 3000);
    })();
    
}

/********
for(i = 0; i<10; i++){
    
    (function(currentI) {
              
        setTimeout(function(){console.log("solution "+currentI);}, 9000);
    })(i);
    
}

*********/




























