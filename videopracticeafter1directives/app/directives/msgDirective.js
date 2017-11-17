var msgDir = function($interpolate){
    return {
    
        compile: function(tElement, tAttributes){
    console.log(tAttributes.text + "- In compile");
                    tElement.css("border" , "1px solid #COCOCO")
        
              //link:{
                // pre: function(scope, iElement, iAttributes){
                //         console.log(iAttributes.text + "In Pre");
                // },
                // post: function(scope, iElement, iAttributes){
                //     console.log(iAttributes.text + "In Post");
                // if(iAttributes.text === "3")       {
                //     iElement.css("border","1px solid #ff0000");
                // }
                //post-link function below
                return function(scope, iElement, iAttributes, controller){
    console.log(iAttributes.text + "in post...");
            if(iAttributes.text === "3"){
                iElement.css("border","1px solid #FF0000");
                }
                iElement.on("click",scope.btnClick);
    
                }
                    
                 },
        controller: function($scope, $element, $attrs){
    var v = $interpolate($attrs.text)($scope);
            //        console.log($attrs.text + "In controllers")
    console.log(v + "In controllers");
    $scope.btnClick = function(){
    alert(v);
    
    
                   }
    
        
     }
    
};
}


app.directive("message", ['$interpolate',msgDir]);