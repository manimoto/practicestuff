var empBinding = function ($scope, $http , $log) {
    $scope.a = 10;
    $scope.b = 20;
    $scope.doDoubleAndSum = function () {
        $scope.a = $scope.a * 2;
        $scope.b = $scope.b * 2;
        $scope.sum = $scope.a + $scope.b;
    }
    // $scope.onSuccessa = function (response) {
    //     $scope.dsum = response.data;
    //     console.log("Hip Hip ");
    // }
    // $scope.OnErrorca = function () {
    //     console.log("ooppss");
    // }
    $scope.doSum = function () {
        //$scope.dsum = parseInt($scope.a) + parseInt($scope.b);
        $http({
            url: 'http://localhost:53699/Sum?a=' + $scope.a + '&b=' + $scope.b,
            method: 'GET'
        }).then(function (response) {
            $scope.dsum = response.data;
            $log.log(response.data);
            console.log(response.data);

        }, function () {
            console.log("oopps");
        })




    }
}

app.controller("empBinding", ['$scope', '$http','$log' ,'$rootScope', empBinding]);