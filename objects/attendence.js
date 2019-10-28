window.addEventListener('DOMContentLoaded', () =>{
    
    
    var counter = 0;
    var htmlContent = "<p></p><p></p><p><button class='btn'> Present </button></p><p>0</p><h3>X</h3>";
    

    var addBTN = document.getElementById("add-btn");
    var objName = [];
    var index = 0;


    
    /********************ES6--class************************/

    class Student {
        constructor(roll, name){
            this.newRoll = roll;
            this.newName = name;
            this.counter = counter;
            this.attendence = 0;
            this.container;

        }

        setUp(){
            var div = createRow();
            div.id = this.newRoll +"_"+`${counter}`;
            return div;
        }

        addDetails(){
            this.container = this.setUp();

            var para1 = this.container.querySelector(".students p:nth-of-type(1)");
            var para2 = this.container.querySelector(".students p:nth-of-type(2)");

            para1.innerHTML += "<br/>"+ this.newRoll;
            para2.innerHTML += "<br/>"+ this.newName;
            this.setUpBtnID();
            this.setDelete();

        }
        setUpBtnID(){
            let presentBTN = 0;
            
            var para3 = this.container.querySelector(".students p:nth-of-type(3)");
            
            presentBTN = para3.getElementsByTagName('button')[0];
            var btnID = `${counter}`;
            presentBTN.id = btnID;
            
            presentBTN.addEventListener('click', addAttendence);
        }
        setDelete(){
            var h3_Btn = this.container.querySelector("h3");
            h3_Btn.id = "delete"+"_"+`${counter}`;
            h3_Btn.addEventListener('click', deleteRow);
            
        }


    }

    /********************************************/

        
         function checkRoll(roll, name){
        
            //console.log("roll",roll);
                
                if (roll === "" || name ===""){                 
                    window.alert("Please add ROLL NUMBER and NAME of the Student." );
                    return true;              
                    
                }
                else{
                    for(let items of objName){
                        //console.log(items.newRoll);
                        
                        if (items.newRoll == roll){
                             window.alert( +items.newRoll + " is already in the list with name " + items.newName+ "\nPlease add new Roll No." );
                                return true;
                            }
                    }
                }
        }
    
 
        function createStudent() {
            var rollInput = document.getElementById("roll").value;
            var nameInput = document.getElementById("name").value;
            
                    
            var present = checkRoll(rollInput, nameInput);
            
            if (present){
                console.log("not valid entry.");
            }else{
                objName[index] = new Student(rollInput, nameInput);
                objName[index].addDetails();
                //console.log(objName[index]);
                index++;
            }
        }

        function createRow() {
            var w = document.getElementById("wrap");
            var div = document.createElement("div");

            div.innerHTML += "<br/>" + htmlContent;
            div.classList.add("students");

            w.appendChild(div); 
            counter += 1;
            return div;
        }


      function addAttendence(ev){

          var buttonID = ev.target.id;
          var cow = objName[buttonID-1].attendence;
          var div = objName[buttonID-1].container;

          cow += 1;

          var ctpt = div.querySelector('p:nth-of-type(4');
          ctpt.innerHTML = cow;

          objName[buttonID-1].attendence = cow;

        }
    function deleteRow(ev){
        let id = ev.target.id;
        let num = id.split('_');
        let count = num[1]-1;
        
        let div = objName[count].container;
        console.log(objName);
        div.remove();
        objName[count].container = null;
        objName[count].newRoll = null;
    }
    
   

    addBTN.addEventListener('click', createStudent);
    
    
} );



/*********************
class User {
    constructor(email, name){
        this.email = email;
        this.name = name;
        this.score = 0;
    }
    login(){
        console.log(this.email, 'just logged in');
        return this;
    }
    logout(){
        console.log(this.email, 'just logged out');
        return this;
    }
    updateScore(){
        this.score++;
        console.log(this.email, 'score is now', this.score);
        return this;
    }
}

class Admin extends User {
    deleteUser(user){
        users = users.filter(u => {
            return u.email != user.email
        });
    }
}

var userOne = new User('ryu@ninjas.com', 'Ryu');
var userTwo = new User('yoshi@mariokorp.com', 'Yoshi');
var admin = new Admin('shaun@ninjas.com', 'Shaun');

var users = [userOne, userTwo, admin];

// admin.deleteUser(userTwo);
userTwo.deleteUser(userOne); // won't work

console.log(users);


*****************/


