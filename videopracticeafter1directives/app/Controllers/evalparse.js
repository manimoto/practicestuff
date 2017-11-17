var evalparse =($scope, $parse, $interpolate) => {
$scope.a = 10;
$scope.b = 20;

$scope.emp = {
        ename: "Jag",
        address: {
            city:"Austin"
        }
};


$scope.demo = () => {
    //alert("Result" + $scope.a*$scope.b);
    //alert("Result" + $scope.$eval("a*b"));
        //var r = $scope.$eval("emp.address.city");
        //var r = $scope.$eval("emp.ename");
        //var r = $scope.$eval("a*b*3 *c",{c:5 , a:2});
        //var r = $scope.$eval("a*b*3 *c",{c:5 , a:2});
        //  var r = $scope.$eval((scope,locals )=>{
        //          return scope.a * scope.b * locals.c *locals.a;
        //  },{c:5 , a:2});

        var r = $scope.$eval((scope,locals )=>{
                    scope.c = locals.c;
                     return scope.a * scope.b * scope.c *locals.a;
              },{c:5 , a:2});


    alert(r);
}; 

$scope.demoParse = ()=> {

    //var c = $parse("a*b")($scope);
//    var c = $parse("a*b"); // returns a function
//    c = c($scope);
//       alert(c);
    //alert($parse("a*b")({a:8,b:9}));

    alert($parse("emp.address.city")($scope));
    $parse("emp.address.city").assign($scope , "Dallas"); // digest proceess cycle loop auto kicks in

    alert($parse("emp.address.city")($scope));

};

$scope.interPolate = ()=> {
var f = $interpolate("Result = {{a*b | currency:'USD$'}}"); // returns a function
var rs = f($scope);
alert("R" +rs);   //interpolate use the $parse

};

}

app.controller('evalparse' , ['$scope', '$parse','$interpolate', evalparse]);
//$eval , $interpolate internally runs $parse



var scopeInherit = function($scope){
        $scope.a = 10;
        $scope.b = 20;

        $scope.o = {
                p: 100,
                q : 200
        }

        $scope.changeValueB = function(){
                $scope.b = 60;
        }
};

var scopeInherit2 = ($scope)=> {
    $scope.c = 30;
    $scope.d= 60;
};

app.controller('scopeInherit' , ['$scope', scopeInherit]);
app.controller('scopeInherit2' , ['$scope', scopeInherit2]);


var messageinherit = function(){
    return {
            templateUrl : '/templates/mytempdir.html',
            scope : true,
            controller: ($scope, $element, $attrs)=>{
                $scope.c = 50;
                $scope.changeValueA = ()=>{
                    $scope.a = 160;
            }
            $scope.changeValueB = ()=>{
                $scope.b = 890;
        }
            }
    };
}

app.directive('messageinherit' , messageinherit);





