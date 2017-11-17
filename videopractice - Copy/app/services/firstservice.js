

 var calcService = function(){

    var baseUrl = '';
    this.config = function(url) {
           baseUrl =url+'/multiply';
    }

    this.$get = ['$http','$log' , function($http, $log){
        $log.log('Instantiating calcfactory');
        var oCalcService = {};
        /*var s = parseInt(a)+parseInt(b);
        cb(s); */
        oCalcService.getSum = function(a,b,cb){
        $http({
            url: baseUrl+'?a=' + a + '&b=' + b,
            method:'GET'
        }).then(function (response) {
            $log.log(response.data);
             cb(response.data);
            //console.log(response.data);
        }, function () {
            console.log("oopps");
        })
    };
    return oCalcService;
    
    }]
}


app.provider('calcService', calcService);
app.config(['calcServiceProvider' , function(calcServiceProvider){
    console.log("im there upfront");
    calcServiceProvider.config('http://localhost:8082');
}]);







// var calcFactory = function($http,$log){
//     this.getSum = function(a,b,cb){
//         /*var s = parseInt(a)+parseInt(b);
//         cb(s); */
//         $http({
//             url:'http://localhost:53699/multiply?a=' + a + '&b=' + b,
//             method:'GET'
//         }).then(function (response) {
//             $log.log(response.data);
//              cb(response.data);

//             //console.log(response.data);

//         }, function () {
//             console.log("ooppss");
//         })
    
//     }
// }


// app.service('calcService', ['$http', '$log' ,calcFactory]);
//calcFactory is a service don't get confused by the name

/*var calcFactory = function ($http ,  $log ) {

    $log.log('Instantiating calcfactory');
    var oCalcService = {};
    oCalcService.getSum = function (a, b,cb) {
        //return parseInt(a) + parseInt(b);
           $http({
            url:'http://localhost:53699/Sum?a=' + a + '&b=' + b,
            method:'GET'
        }).then(function (response) {
            $log.log(response.data);
             cb(response.data);

            //console.log(response.data);

        }, function () {
            console.log("ooppss");
        })
    };

oCalcService.getSumCB = function(a,b, cb){
            var s = parseInt(a) + parseInt(b);
            cb(s);
};

    return oCalcService;
}



app.factory('calcFactory', ['$http', '$log' ,calcFactory]);
*/