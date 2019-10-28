let log = console.log;

console.log("*******************Custon Shuffle************************");

let names = ['John', 'Paul', 'George', 'Nitin', 'Ringo', 'Mane', 'Amol', 'Onkar', 'Mahesh', 6, '8', true, null];


console.log(names);
//let sortedNames = names.sort();



Array.prototype.shuffle = function(){
    let len = this.length;
    for (i = 0; i < len; i++){
        temp = "".concat(this[i]);
        pos = Math.floor(Math.random()*len);
        this[i]  ="".concat(this[pos]);
        this[pos] = temp;
    }
    return this;
}
let newNames = [].concat(names);   //this keeps the names safe by creating a differnt copy
console.log(newNames.shuffle());
console.log(names);

let movies = ['Star Wars', 'Star Trek', 'Jaws', 'Jurassic Park test', 'Gross Pointe Blank', 'Eternal Sunshine of the Spotless Mind', 'Memento test', 'Dog Soldiers', 'The Host', 'Gran Torino', 'Close Encounters of the Third Kind test', 'Good Will Hunting', 'Layer Cake', 'Casino Royale', 'Almost Famous'];


//console.log(movies.shuffle());

console.log("*******************Search methods************************");



let bool = movies.includes("Star Trek");
log("includes",bool);

let index = movies.indexOf("Good Will Hunting");
log("at Index",index);


let some = movies.some((items) => {
   return items.includes('the'); 
});
log("some of them has it",some);


let found = movies.find((item) => {
    if(item.length > 20){
        return item;
    }
})

log("found that - ",found);


console.log("*******************Stringify method************************");

let obj = {name: "Walter", 
           last: "Sobchak",
           age: 50, 
           angry: true, 
           bestscore: 200, 
           armed: true};

let str1 = JSON.stringify(obj);
log(str1);

let str2 = JSON.stringify(obj, ['name', 'age', 'armed'], 2);
log(str2);


let str3 = JSON.stringify(obj, replace, "\t*\t\t");
log(str3);

function replace(key, val){
    if (typeof val == 'string'){
        return null;
    }else{
        return val;
    } 
}

let str4 = JSON.stringify(obj, null, "----->");
log(str4);

console.log("*******************Key value entries************************");



let westeros = {
    cersei: 'Lannister',
    arya: 'Stark',
    jon: 'Snow',
    brienne: 'Tarth',
    daenerys: 'Targaryen',
    theon: 'Greyjoy',
    jorah: 'Mormont',
    margaery: 'Tyrell',
    sandor: 'Clegane',
    samwell: 'Tarly',
    ramsay: 'Bolton'
}

//for(let prop of arr)
// foreach( )  filter( ) map() reduce()

let keys = Object.keys(westeros);
//log('Keys ', keys);
let vals = Object.values(westeros);
//log('Vals', vals);
let entries = Object.entries(westeros);
log('Entries', entries);
log( entries[2][1] );


console.log("*******************methods************************");


/************************************
What are destructive methods?  in-place
Array.prototype.sort - destructive
Array.prototype.reverse - destructive
Array.prototype.splice - destructive

Array.prototype.slice - non-destructive shallow copy
Array.prototype.filter - non-destructive
Array.prototype.map - non-destructive
************************************/

console.log("*******************Enumerables************************");


let names2 = ['John', 'Paul', 'George', 'Nitin', 'Ringo', 'Mane', 'Amol', 'Onkar', 'Mahesh'];

names2.girl = "Monica";
names2.boy = "Joey";
Object.defineProperty(names2, 'asweet', {value: "Cathey", enumerable: false});
names2.beuty = "Rachel";
names2.lov = "Gunther";

log(names2);




for (let items in names2){
    log("in index are ", items);
}
log("______")
for(let items of names2){
    log("of names are ", items);
}

//of does not work for the objects


console.log("*******************Generator************************");



let characters = ['Finn','Poe', 'Rey', 'Kylo', 'Luke', 'Leia']

function* genny(){
  
   yield characters[3];
    yield characters[4];
    yield characters[1];
    yield characters[5];
    yield characters[5];
    yield characters[0];
    yield characters[2];
    yield characters[i];
}

let iter = genny();
log(iter)
//log(iter.next());
//log(iter.next());
//log(iter.next());
//log(iter.next());
//log(iter.next());
//log(iter.next());
//log(iter.next());
//log(iter.next());
//log(iter.next());


let starwars8 = {
    title: 'The Last Jedi',
    director: 'Rian Johnson',
    year: 2017,
    boxOffice: '1.3B'
}


let count = -1;
let SW8 = {
    [Symbol.iterator]: function(obj){
        return {
            next: ()=>{
                count++;
                switch(count) {
                    case 0:
                        return { value: obj.title, done: false}
                    case 1:
                        return { value: obj.year, done: false }
                    case 2:
                        return {value: obj.director, done: false}
                    case 3 :
                        return { value: undefined, done: true}
                    default:
                        return { value: undefined, done: true}
                }
            }
        }
    }
}

let data = SW8[Symbol.iterator](starwars8);
log( data.next() );
log( data.next() );
log( data.next() );
log( data.next() );
log( data.next() );




console.log("*******************maps and sets************************");




/********************************************
Maps - Like Objects they have keys and values
    (unique keys)
    .size
    .set(key, value)
    .delete(key)
    .get(key)
    .has(key)
    .keys() - returns Iterator with array of keys
    .values() - returns Iterator with array of values
    .entries() - returns Iterator with array of [key, value]
    .clear()
    .forEach()
Sets - Like Arrays they have values
    (unique values) - remove non-unique values from array
    .size
    .add(value)
    .delete(value)
    .entries() - returns Iterator with array of [value, value]
    .values() - returns Iterator with array of values
    .has(value)
    .clear()
    .forEach()
********************************************/


let obj3 = {
    prop1: 123,
    prop2: 'abc'
}
obj3.prop2 = 'def'
log( obj3 )

//let map = new Map(obj); //fails - Objects are not iterable
let map1 = new Map();
map1.set('prop1', 123)
map1.set('prop2', 'abc');
map1.set('prop2', 'def');
log(map1)

let names4 = ['Rob', 'Bran', 'Arya', 'Sansa', 'Rickard'];
names4.push('Rob');
let set1 = new Set(names4);
//easy way to remove duplicates from an Array
log(names4);
log(set1);



console.log("*******************chaining************************");



let myObj = function(nm){
    this.name = nm;
    //when used with 'new' it will return an instance
}

myObj.prototype.capitalize = function(){
    this.name = this.name.substring(0,1).toUpperCase() + this.name.substring(1);
    return this;
}

myObj.prototype.upper = function(){
    this.name =  this.name.toUpperCase();
    return this;
}

myObj.prototype.getName = function(){
    console.log(this.name);
}

let pawar = new myObj('pawar');
let suraj = new myObj('suraj');

let x = pawar.getName();
log(x)
suraj.getName();

pawar.capitalize().upper().getName();
suraj.capitalize().getName();


let arr = ['Cole', 'Cara', 'Bree', 'Riley', 'Alex', 'Devon'];
arr.forEach( item => { 
     //log(item);
});


console.log("*******************shalow copy************************");



let names5 = ['Bart','Maggie','Homer','Marge','Lisa'];
let stuff1 = [123, 'Apu', 
             {Smithers: 'Mr. Burns'}, 
             ['Futurama', 'Disenchantment']];

let nm2 = Array.from(names5);
let st2 = Array.from(stuff1);

nm2[4] = 'Flanders';

console.log( names5 );
console.log( nm2 );

st2[2].Smithers = 'Not Mr. Burns';

console.log( stuff1);
console.log( st2);

console.log("*******************FOR..in & FOR..of************************");


let supernatural = { 
    "actors":['Jared Padelecki', 'Jensen Ackles', 'Mark Sheppard', 'Misha Collins'],
    "characters":['Sam Winchester', 'Dean Winchester', 'Crowley', 'Castiel'],
    "seasons":12 };

for( let prop in supernatural){
    log( prop, typeof supernatural[prop],
               Array.isArray(supernatural[prop]) );
}

for( let prop2 in supernatural.actors){
    log(prop2, supernatural.actors[prop2]);  /// wierd  out put????
}

for( name of supernatural.actors){
    log( name );
}


//log(supernatural.actors[0]);
//log(supernatural.actors[1]);
//log(supernatural.actors[2]);
//log(supernatural.actors[3]);

console.log("*******************findIndex and find************************");

let cities = ["Ankara", "Istanbul", "Antalya", "Bursa", "Trabzon"];
let city = "Bursa";
let chars = 7;

let match1 = cities.find(item => {
    if (city === item) return true;
});
console.log("item from cities that matched was", match1);


let match2 = cities.find(item => chars === item.length);
console.log('item with matching length was', match2);

let index = cities.findIndex(item => item.toLocaleLowerCase().indexOf("t") > -1);


console.log(`Letter "t" found in item at index ${index}`);

let person = {
    id: 123,
    name: "Recep",
    town: "Istanbul"
};
let match3 = cities.find(function (item) {
    if (item === this.town) return true;
}, person);
console.log(person.name, "lives in matching town", match3);

























































