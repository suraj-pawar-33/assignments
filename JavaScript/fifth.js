var Links = document.getElementsByTagName("a");

for (i = 0; i < Links.length; i++) {
    
    Links[i].className = "link-" + i;
    
}
document.write("<hr>");
function getAverage(a, b){
    average = (a + b)/ 2;
    console.log(average)
    return average;
}
var result = getAverage(234.45, 339.809);
document.write("result is :"+ result);

document.write("<hr>");
document.write("<br>");

document.write("round up the number 34.87 : "+ Math.round(34.87));
document.write("<br>");
document.write("Floor of the number 34.87 : "+ Math.floor(34.87));
document.write("<br>");
document.write("ceiling of the number 34.87 : "+ Math.ceil(34.87));
document.write("<br>");
document.write("<hr>");