var app = angular.module("myApp", []).run(['$rootScope' , function($rootScope){
    $rootScope.TaxPercent = 30;
}]);


var emp = function ($scope) {
    $scope.Name = "Momeranda";
    
}

var empDetails = function ($scope) {
    $scope.Name = "Bala";

    $scope.Sal = 45000;
    $scope.Dept = "Marketing"
}


var empPayCheck = function ($scope ,$rootScope) {
    $scope.getTaxes = function () {
        return $scope.Sal * $rootScope.TaxPercent / 100;
    }

    $scope.getNet = function () {
        return $scope.Sal - $scope.getTaxes();
    }

}

app.controller("emp", ['$scope', emp]);
app.controller("empDetails", ['$scope', empDetails]);
app.controller("empPayCheck", ['$scope', '$rootScope', empPayCheck]);
