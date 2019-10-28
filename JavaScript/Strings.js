var myString = 'I\'m a "fun" String';
var myString2 = 'I\'m a "fun" String';

document.write("Lenth of this string is :" + myString.length);
document.write("<br/>");
document.write("string to upper case is :" + myString.toUpperCase());
document.write("<br/>");
document.write("string to lower case is :" + myString.toLowerCase());
document.write("<br/>");
document.write("the letter 'f' is at :" + myString.indexOf("fun") + "th position.");
document.write("<br/>");



if (myString.indexOf("ninja") == -1){
    document.write("The word 'ninja' is not in the string.");
}
document.write("<hr>");
document.write("Compair strings");
document.write("<hr>");
document.write("myString2 = 'I\'m a \"fun\" String'");
document.write("<br/>");
if (myString == myString2){
    document.write("this two strings are eual.");
    
}

document.write("<hr>");
document.write("Slice strings");

document.write("<br/>");
document.write("sliced string from 2nd to 7th : " + myString.slice(2, 9));
document.write("<hr>");

document.write("<hr>");
document.write("Split strings");

document.write("<br/>");
myList = " rice, idali, chapati, maggi, masala, suger, weat"
document.write("split this list into strings : " + myList);
listArray = myList.split(",");
for (i = 0; i < listArray.length; i++){
    document.write("<br/>");
    document.write("No. "+ i + listArray[i]);
    
}
document.write("<hr>");
document.write("Sorted List :" + listArray.sort());




