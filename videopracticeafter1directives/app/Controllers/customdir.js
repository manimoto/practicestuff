

var customDirController = function($scope, ngLoops){
    $scope.iceCream = "Vanilla"
    
    $scope.getAllEmployee = function(){
        
        ngLoops.getAll(function(r){
            $scope.records = r;
        });
        
        };
        
        $scope.doSearch = function(empno){
        
           ngLoops.search(empno, function(r){
            $scope.empno =  r.employeeNo;
            $scope.ename = r.name;
            $scope.sal = r.salary;
            $scope.hiredate = r.hireDate;
            $scope.dob = r.dob;
            $scope.dept = r.dept;
            //$scope.ENAME = $filter("lowercasex")(r.name);
            //console.log("ENAME :",ENAME);
            });
        }
}
app.controller("CustomDirController", ['$scope','ngLoops' ,customDirController])