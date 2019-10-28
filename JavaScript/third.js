var youLikeMeat = true;
var MyNum = 12;
var MyNum2 = "10";

if (MyNum === 10) {
    document.write("My number is eual to 10.");
} else if (MyNum > 10){
    document.write("My number is greater than 10.");
} else if (MyNum < 10) {
    document.write("My number is less than 10.");
} 

document.write("<br>");

if (MyNum2 == 10 && MyNum2 === "10") {
    document.write("My number 2 is a string");
} else if (MyNum !== "10") {
    document.write("My number 2 is not a string");
}

document.write("<br>");

if (youLikeMeat || MyNum == 25) {
    document.write(" You like meat.");
} else {
    document.write(" You do not like meat, why !");
}
  