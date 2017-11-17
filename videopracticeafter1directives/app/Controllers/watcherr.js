var watcherr = function($scope) {
// $scope.a =1;
// $scope.b = 5;
// $scope.c = 9;
// $scope.updateC = function(){
// $scope.c = $scope.a * 4 ;
// };

$scope.o = {
    a:1,
    b: 2,
    c:4
};


$scope.emps = [
    {empno:"1001" , ename:"Jog"},
    {empno:"1002" , ename:"Fog"},
    {empno:"1003" , ename:"Rog"},
    {empno:"1004" , ename:"Dog"}
];

$scope.addEmp= function(){
    var newEmpno = 1000 + $scope.emps.length + 1;
    var newEname = "ename" + newEmpno;
    $scope.emps.push({empno: newEmpno, ename: newEname});
}
$scope.modify3rdEmp = function(){
    $scope.emps[2].ename = "test"; 
}
 
$scope.$watchCollection('emps' , function(){
            console.log("No. Of Employees : " + $scope.emps.length);

});

$scope.$watch('emps' , function(){
    console.log("No. Of Employees : " + $scope.emps.length);

}, true);
//watchGroup['o.a','o.b']
// $scope.$watch("o" , function(newValue, oldValue){
//         if(newValue != oldValue){
//             $scope.o.c = $scope.o.a * $scope.o.b; 
//         }

// } , true);


// $scope.$watch("b",function(newValue , oldValue){
//     if(newValue != oldValue){
//        $scope.c = $scopeb *2;
//     }
//     }); 

// $scope.$watch("a",function(newValue , oldValue){
//     if(newValue != oldValue){
//        $scope.b = $scope.a *2;
//     }
//     });

// $scope.$watchGroup(['a','b'],function(newValue , oldValue){
//     if(newValue != oldValue){
//         $scope.c = $scope.a * $scope.b;
//     }
// });
// $scope.$watch("c",function(newValue , oldValue){
// if(newValue != oldValue){
//     console.log("Updated c to" + newValue);
// }
// });
}

app.controller('watcherr' , ['$scope', watcherr]);