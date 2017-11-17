var empCalc = function ($scope, calcService) {
    $scope.a = 10;
    $scope.b = 20;
    $scope.doSum = function () {
       // $scope.dsum = calcFactory.getSum($scope.a, $scope.b);
      calcService.getSum($scope.a, $scope.b, function(r){
        $scope.dsum = r;
      });
    };
}


var empCalcCB = function ($scope, calcFactory) {
    $scope.a = 10;
    $scope.b = 20;
    $scope.doSumCB = function () {
       calcFactory.getSumCB($scope.a, $scope.b, function(r){
        $scope.dsumCB =  r;
        });
    };
}
app.controller("empCalc", ['$scope', 'calcService', empCalc]);
//app.controller("empCalc", ['$scope', 'calcFactory', empCalc]);
app.controller("empCalcCB", ['$scope', 'calcFactory', empCalcCB]);