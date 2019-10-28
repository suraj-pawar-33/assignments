function setUp(){
    var innerDiv = document.getElementById("main").getElementsByClassName("inner")[0];

    var redButton = document.getElementById("red-btn");
    var greenButton = document.getElementById("green-btn");
    var blueButton = document.getElementById("blue-btn");
    var changeColor = document.getElementById("change-btn");
    
    var myForm = document.forms.form1;
    //var value1 = myForm.color1.value;
    
    v = 0;
    


    //append child 
    redButton.onclick = function(){
        i = 0;
        while (i < 9) {
        var newCircle = document.createElement("div");
        innerDiv.appendChild(newCircle);
        i++;
        }
    };


    //add child at specific position.
    greenButton.onclick = function(){
        i=0;
        while (i < 9) {
        var newCircle2 = document.createElement("div");
        newCircle2.style.backgroundColor = "green";
        n = 2*i + 1;
        innerDiv.insertBefore(newCircle2, innerDiv.getElementsByTagName("div")[n]);
        i++;
        }
    };

    blueButton.onclick = function(){
        i=0;
    while (i < 9) {
        var newCircle2 = document.createElement("div");
        newCircle2.style.backgroundColor = "blue";
        n = 3*i + 1;
        innerDiv.insertBefore(newCircle2, innerDiv.getElementsByTagName("div")[n]);
        i++;
    }
    };

    //change style
    changeColor.onclick = function(){
        
        alldiv = innerDiv.getElementsByTagName("div");
        i=0;
        arr = ["yellow", "voilet", "chocolate", "cyan", "white"]
        value1 = arr[v];
        v++;
        if(v>4){v=0;}
        while(i<alldiv.length){
            alldiv[3*i+1].style.backgroundColor = value1;
            
            i++;
        }
    }
    
    function changeValue(){
        arr = ["yellow", "voilet", "chocolate", "cyan", "white"]
        value1 = arr[v];
        v++;
        if(v>4){v=0;}
    }

setInterval(changeValue, 1000);

    //remove child.
    //innerDiv.removeChild(innerDiv.getElementsByTagName("div")[18]);
}

window.onload = function(){
    setUp();
}


