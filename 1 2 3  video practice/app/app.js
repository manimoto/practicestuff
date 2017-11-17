var app = angular.module("myApp",[]);

var emp = function(){
    this.name= "Manish Sharma"
    this.salary = 400000;
};

var emp1 = function(c){ //c will be replaced with $scope as we passed in array in the definition
    c.name = "Sharma";

    //c kind of syntax is used for minification in production
    //storing data in to scope

}

var emp2 =function(d){  //d will be change in $sope at run time
    d.name = "Rhythm";
    d.salary = 4500;
    d.getAnnualSalary = function(){
        return (this.salary)*12;
    } 

}


var customerInfo = function(e){
    e.name = "Jag";
    e.city = "vienna";
}

var hybrid = function($scope){
    $scope.o = this;  //hybrid as you can also bind $scope props
    this.name = "hybrid baba";
    $scope.city = "Banjoosa";
}
app.controller("emp",emp); //definition of controller
app.controller("emp1", ['$scope',emp1] );
app.controller("emp2", ['$scope',emp2] );
app.controller("customerInfo", ['$scope',customerInfo] );
app.controller("Hybrid", ['$scope',hybrid] );