var age = 5;

while (age < 10){
    document.write("you are cool !");
    age++ ;
    document.write("<br>");
}
document.write("<br>");
document.write("Now you are over 10...");
document.write("<br>");
document.write("<br>");

for (i = 0; i < 20; i++){
    document.write("this loop is on :" + i);
    if (i%2){
        document.write("<br>");
    }
    if (i == 10){
        break;
    }
    document.write("<br>");
}