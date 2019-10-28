var myCar = new Object();
myCar.speed = 50;
myCar.driver = "Suraj";
myCar.drive = function (driver) {
    document.write(driver + " is driving at a speed of " + this.speed + " Km/h.");
};


var myCar2 = {
    
    maxSpeed: 70,
    driver: "Ninja hattori",
    drive: function (driver) {
        document.write(driver + " is driving at a speed of " + this.maxSpeed + " Km/h.");
    }

};

var Car = function (maxSpeed, driver) {
    
    this.maxSpeed = maxSpeed;
    this.driver = driver;
    this.getDistance = function (time) {
        distance = this.maxSpeed * time;
        document.write("distance travelled by " + this.driver + " is = " + distance  + " Km/h.");
    };
};

var car1 = new Car(60, "Rachel");
var car2 = new Car(89, "Phebe");
var car3 = new Car(69, "Ross");
var car4 = new Car(36, "Chandler");
var car5 = new Car(124, "Joey");
var car6 = new Car(455, "Monica");



document.write("myCar object...");
document.write("<br/>");
myCar.drive("Pikachu");
document.write("<hr/>");

document.write("myCar2 object...");
document.write("<br/>");
myCar2.drive("Hattori");
document.write("<hr/>");

document.write("Car function with constructor.");
document.write("<hr/>");
car1.getDistance(20);
document.write("<br/>");
car2.getDistance(20);
document.write("<br/>");
car3.getDistance(20);
document.write("<br/>");
car4.getDistance(20);
document.write("<br/>");
car5.getDistance(20);
document.write("<br/>");
car6.getDistance(20);
document.write("<hr/>");




