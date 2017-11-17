var Car = (function () {
    //constructor 
    function Car(engine) {
        this.engine = engine;
    }
    //function 
    Car.prototype.disp = function () {
        console.log("Engine is  :   " + this.engine);
    };
    return Car;
}());
