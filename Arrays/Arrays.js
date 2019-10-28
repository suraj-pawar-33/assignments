

let a = [1,5,3,7,4,6,9];
let b = [23,56,82,38,41,69,30];

let c = a.concat(b);
console.log(c);

c.sort(); // not working..
console.log(c);

var names = ['mane', 'amol', 'onkar', 'mahesh', 'nitin'];

names.splice(1, 3, 'someOne');
console.log(names);

names.push("Pheebe");
names.push("Ross");
names.push("Ross");
names.push("Ross");
names.push("Ross");

console.log(names);

names.unshift("monica");
names.unshift("Joey");
names.shift();
names.pop();
names.unshift("Joey");

console.log(names);


console.log("***********************Object array*********************");


var dog = {name:"woody", type:"fighter"};
var cat = {name:"sheela", type:"cute"};

var pets = [dog, cat];

console.log(pets);
console.log(pets["0"]);
console.log(pets[1]);
console.log(pets[0].name);
//console.log(pets[1][type]);  => why???? -- its a key from the object


pets[2] = {name:"gunther", type:"Lover"};
pets[0].age = 28;

console.log(pets);

console.log("***********************Loops**************************");




for(let i = 0; i < names.length; i++){
    console.log(names[i]);
}

for(let objs in pets){
    for(let props in pets[objs]){
        console.log("The",props,"is",pets[0][props]); //=> why???? ---it is a variable so [ works ]
    }
    console.log("-------------");
}

pets.forEach(upper);

function upper(item, index, array){
    item.type=item.type.toUpperCase();
    console.log("times");
}
console.log(pets);

console.log("***********************MAPS *********************");



let makeArray = pets.map(getLength);

function getLength(item, index, array){
    return item.type.length;
}
console.log(makeArray);


console.log("***********************split *********************");



let sentence = " May name is anthony Gonsalvis, I am alone in this world ..";

let words = sentence.split(" ");
console.log(words);

let chars = sentence.split("").sort();
console.log(chars);

let hyphenated = words.join("-");
console.log(hyphenated);

let parenth = chars.join(')(');
console.log(parenth);


console.log("***********************EVERY SOME*********************");

let nums = [ 45, 67, 234, 659, 230, 22, 539, 674, 342, 97];

let grea_30 = nums.every(function(num){
   console.log(num);
    return num >30;
});
console.log("every one is greater",grea_30);

let lessThan_30 = nums.some(function(num){
   console.log(num);
    return num < 30;
});
console.log("some is less",lessThan_30);

let movies = ['Star Wars', 'Star Trek', 'Jaws', 'Jurassic Park test', 'Gross Pointe Blank', 'Eternal Sunshine of the Spotless Mind', 'Memento test', 'Dog Soldiers', 'The Host', 'Gran Torino', 'Close Encounters of the Third Kind test', 'Good Will Hunting', 'Layer Cake', 'Casino Royale', 'Almost Famous'];

let test1 = words.some(function(title, index){
   console.log(index, title);
    return title == "I";
});
console.log("you see 'I'",test1);
let for_test2 = 0;
let test2 = movies.some(function(title, index){
    for_test2 = index;
    return title.includes("test", 30);
});
console.log(movies[for_test2]);
console.log("you see 'test' after 30th char",test2);


console.log("***********************filter*********************");



let allLess300 = nums.filter(function(num){
    
    return num<300;
});

console.log("less than 300",allLess300);

let allGreater300 = nums.filter(function(num){
    
    return num>300;
});

console.log("Greater than 300",allGreater300);


console.log("***********************reduce*********************");



let totalofNums = nums.reduce(function(passedIn_5, item){
    return passedIn_5 + item;
}, 5);

console.log("Total is",totalofNums);

let compairMovies = movies.reduce(function(passedIn,item){
    console.log('now compairing ('+passedIn+') with ('+item+')');
    return (passedIn < item) ? passedIn:item;
}, 'Zebra');

console.log("first movie is ("+compairMovies+')');


console.log("***********************Chaining*********************");


let people = [
    {"id":123, "name":"Rick Deckard", "email":"rick@bladerunner.org"},
    {"id":456, "name":"Roy Batty", "email":"roy@replicant.io"},
    {"id":789, "name":"J.F. Sebastian", "email":"j.f@tyler.com"},
    {"id":258, "name":"Pris", "email":"pris@replicant.io"}
];
//need to get the name of people with email replicant.io in it.

//firts method

var emailFltr = people.filter(function(people){
    return people.email.includes("replicant.io");
});

var nameArray = emailFltr.map(function(item){
   return item.name; 
});

console.log(nameArray);


//Second method

var method2 = people.filter(function(people){
    return people.email.includes("replicant.io");
}).map(function(item){
   return item.name; 
});

console.log(method2);

//best method

var method3 = people.filter((item) => (item.email.includes("replicant.io"))).map((item) => (item.name));

console.log(method3);


console.log("***********************Random duplicates*********************");

let names2 = ['John', 'Paul', 'George', 'Ringo', 'mane', 'amol', 'onkar', 'mahesh', 'nitin'];
let nums2 = [63, 69, 73, 88, 92, 93, 96, 98];


//gives duplicates
for(let i=0; i<names2.length; i++){
    let rnd = Math.floor(Math.random()*names2.length);
    console.log( names2[rnd] ); 
}
console.log( "--------2nd-------" );
for(let i=0, tempNames2=names2, len=names2.length; i<len; i++){
    let rnd = Math.floor(Math.random()*tempNames2.length);
    console.log( tempNames2[rnd] ); 
    tempNames2.splice(rnd, 1); //removed and added nothing
}

console.log( "--------3rd-------" );
let min = 50;
let max = 100;
let range = max - min;

for(let i=0; i<9; i++){
    let rnd = Math.floor( Math.random() * range) + min;
    nums2.push(rnd);
    console.log( nums2.sort() );
}
console.log( "--------4th-------" );

while( nums2.length < 25 ){
    let rnd = Math.floor( Math.random() * range) + min;
    if( !nums2.includes(rnd) ){
        nums2.push(rnd);
        console.log( nums2.sort() );
    }else{
        console.log('skipped duplicate');
    }
}


console.log("***********************Custom Sort*********************");

let people2 = [
    {"id":123, "name":"Rick Deckard", "email":"rick@bladerunner.org"},
    {"id":456, "name":"Roy Batty", "email":"roy@replicant.io"},
    {"id":89, "name":"J.F. Sebastian", "email":"j.f@tyler.com"},
    {"id":258, "name":"Pris", "email":"pris@replicant.io"}
];

let nums3 = [63, 69, 7, 88, 42, 13, 6, 2, 10, 3, 145, 88, 56, 98];


let sortedNums3 = nums3.sort((a, b) => {
    if(a>b)return 1;
    else if(a<b) return -1;
    else return 0;
});

console.log(sortedNums3);


let sortedObject3 = people2.sort((a, b) => {
    if(a.id>b.id)return 1;
    else if(a.id<b.id) return -1;
    else return 0;
});

console.log('new', sortedObject3);


console.log("***********************FormData*********************");

 let fd = new FormData();
            fd.append('name', 'Bubba');
            fd.append('id', 1234);
            fd.append('created_dt', Date.now());
            console.log(Array.from(fd));
            for (let obj of fd) {
                console.log(obj)
            }
            document.querySelector('#formdata').innerHTML = JSON.stringify(Array.from(fd), '\t', 2);


console.log("***********************Intl.ListFormat*********************");

const main = document.querySelector("#formats");
      let staff = [
        "Pam",
        "Michael",
        "Dwight",
        "Toby",
        "Phyliss",
        "Jim",
        "Stanley"
      ];
      let stuff = ["5 au", "7 mm", "16 mg", "42 km", "24 ml"];
      /**
       * style = long, short, narrow
       * type = conjunction, disjunction, unit (will ignore long)
       **/
      const formatter = new Intl.ListFormat("en", {
        style: "long",
        type: "conjunction"
      }); //
      main.innerHTML += formatter.format(staff);
        main.innerHTML += '<br/>' + formatter.format(stuff);



