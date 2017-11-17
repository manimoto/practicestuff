var ngLoopsCntrl = function($scope , ngLoops, $filter){



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
app.controller("ng-loops", ['$scope', 'ngLoops','$filter' ,ngLoopsCntrl]);
//Grunt is a task-based command line build tool for JavaScript projects.
//webpack is a build tool for javascript and css etc
//bower and npm is a package manager, bower is used for frontend
//gulp is a task manager build tool
