var ngLoops = function(){
    
        var baseUrl = '';
        this.config = function(url) {
               baseUrl =url+'/search';
        }
    
        this.$get = ['$http','$log' , '$filter' , function($http, $log, $filter){
            $log.log('Instantiating calcfactory');
            var oCalcService = {};
            /*var s = parseInt(a)+parseInt(b);
            cb(s); */
            oCalcService.search = function(search,cb){
            $http({
                url: baseUrl+'?searchEmpno='+search,
                method:'GET'
            }).then(function (response) {
                $log.log(response.data);
                
                 cb(response.data);
                //console.log(response.data);
            }, function () {
                console.log("oopps");
            })
        };


        oCalcService.getAll = function(cb){
            $http({
                url: baseUrl+'/searchEmpno',
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
    
    
    app.provider('ngLoops', ngLoops);
    app.config(['ngLoopsProvider' , function(ngLoopsProvider){
        console.log("im there upfront");
        ngLoopsProvider.config('http://localhost:8082');
    }]);
    