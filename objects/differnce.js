var bycycle1 = createBycycle(50, 20, 5);
var bycycle2 = createBycycle(60, 34, 7);



function createBycycle(cadence, speed, gear){
    var newBycycle={};
    newBycycle.cadence = cadence;
    newBycycle.speed = speed;
    newBycycle.gear = gear;
    return newBycycle;
}




function Bycycle(cadence, speed, gear){
    //var this = {};
    this.cadence = cadence;
    this.speed = speed;
    this.gear = gear;
    //return this;
}


var bycycle3 = new Bycycle(49, 28, 9);

console.log(bycycle1);
console.log(bycycle2);
console.log(bycycle3);
console.log("****************************************************");
/**************************************************/


function MotorCycle(cadence, speed, gear, tirePressure){
    this.cadence = cadence;
    this.speed = speed;
    this.gear = gear;
    this.tirePressure = tirePressure;
    this.inflateTires = function() {
        this.tirePressure += 5;
    };
    
}

var duke = new MotorCycle(50, 34, 20, 100);
duke.inflateTires();
console.log("pressure is now : "+ duke.tirePressure);

var honda = new MotorCycle(56, 34, 20, 100);
honda.inflateTires();
console.log("pressure is now : "+ honda.tirePressure);

function Machanic(name){
    this.name = name;
    this.work = function() {
        console.log(this.name+"has done the work.");
    };
}

var mike = new Machanic("Mike");
mike.inflateTires = honda.inflateTires();
//mike.inflateTires.call(duke);  NOT WORKING 

console.log("pressure in honda is now : "+ honda.tirePressure);
console.log("pressure in duke is now : "+ duke.tirePressure);

console.log("********************************");

/**********************************************************/



//prototype...

console.log(MotorCycle.prototype);
console.log(createBycycle.prototype);

MotorCycle.prototype.test = 'this is the prototype object.';
console.log(MotorCycle.prototype);
console.log(duke);
console.log(duke.test);

duke.test = 10;
console.log(duke.test);

//duke.greet(); =>  not a function (in primary or __proto__)
MotorCycle.prototype.greet = function(name){
    console.log(name+" Hey, Have a good day !");
    console.log("my cedence = "+ this.cadence);
};
//there is only one coppy of this function for every object. but "this" works.


duke.greet("from duke");
honda.greet("from honda");

//following will not work
MotorCycle.runFast = function(name){
    this.speed += 13;
    console.log(name+" is faster now. "+ this.speed);
};

//duke.runFast("duke"); =>  not a function
console.log("********************************");
/*

MotorCycle.prototype.test == duke.__proto__.test => is true

 MotorCycle.prototype.test == duke.test   => true

JS lookes for property in multiple locations in case the property is not in the primary list

and if found in primary location then does not look in the __proto__

*/





//you can change constructor of an object with dunder proto(__proto__)

duke.__proto__.constructor = new Bycycle(49, 28, 9);;
console.log(duke);
console.log(duke.__proto__.constructor);
console.log(duke.__proto__.constructor.gear);

console.log("********************************");


//every prototype of a object points to the Objects prototype.

var lambo = new Object();
console.log(lambo);

Object.prototype.grandParent = "grand parent -> Sam";
console.log(lambo);
console.log("duke has "+duke.__proto__.__proto__.grandParent);
console.log("honda has "+honda.__proto__.__proto__.grandParent);

//console.log("bycycle2 has "+bycycle2.__proto__.__proto__.grandParent); => not work

console.log("bycycle3 has "+bycycle3.__proto__.__proto__.grandParent);

console.log("newBycycle obj has father "+createBycycle(1,2,4).__proto__.grandParent);


console.log("***************Inheritance*****************");


function Employee(name) {
    
    this.name = name;
    this.salery = 20000;
}

Employee.prototype.getName = function(){
    console.log(this.name);
}

var emp1 = new Employee("Joey");
emp1.getName();


function Manager(name){
    this.name = name;
    this.salery = 40000;
}

Manager.prototype.getSalery = function(name){
    console.log(name.salery);
}

//inherites all the properties from the prototype of employe
Manager.prototype.__proto__ = Employee.prototype;

var mgr1 = new Manager("Ross");

mgr1.getSalery(mgr1);
//managers can see the salery of the employees
mgr1.getSalery(emp1);
mgr1.getName();


console.log("*************** Object *****************");


var newBycycle={};
    newBycycle.cadence = 20;
    newBycycle.speed = 40;
    newBycycle.gear = 'nope';


newBycycle[price] = 2000;

console.log(newBycycle);












