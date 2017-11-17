var express = require("express");
var cors = require("cors");
var app = express();
app.use(cors()); // cross origin requests
var port = process.env.PORT || 8082; 
var router = express.Router();
app.use(express.static(__dirname + '/app'));  
app.use(express.static(__dirname + '/node_modules')); 


router.get("/Sum",function(req, res){
            var a = req.query.a;
            var b = req.query.b;
            var c  = parseInt(a) + parseInt(b);
            res.status(200).json(c);

});

router.get("/multiply",function(req, res){
    var a = req.query.a;
    var b = req.query.b;
    var c  = parseInt(a) * parseInt(b);
    res.status(200).json(c);

});

router.get("/divide",function(req, res){
    var a = req.query.a;
    var b = req.query.b;
    var c  = parseInt(a) * parseInt(b);
    res.status(200).json(c);

});

router.get("/search/searchEmpno",function(req, res){        
        const foo = { "results": [
            {
                "employeeNo": 12,
                "name": "Test",
                "salary":"1200.4544",
                "hireDate":'1970-09-25',
                "dob":"02/03/1960",
                "dept":"IT"
            },
            {
                "employeeNo": 22,
                "name": "Ranjit",
                "salary":"12000",
                "hireDate":'1939-05-18',
                "dob":"02/08/1970",
                "dept":"CSE"
            },
            {
                "employeeNo": 13,
                "name": "Kararn",
                "salary":"8000",
                "hireDate":'1980-04-07',
                "dob":'1990-04-08',
                "dept":"IT"
            },
            {
                "employeeNo": 14,
                "name": "Rajan",
                "salary":"13000",
                "hireDate":'1990-05-15',
                "dob":'1990-02-05',
                "dept":"IT"
            }
        ] };
        
       res.status(200).json(foo.results);

});

//next


router.get("/search",function(req, res){
    var searchEmpno = req.query.searchEmpno;
        console.log(searchEmpno);
        const foo = { "results": [
            {
                "employeeNo": 12,
                "name": "Test",
                "salary":"1200",
                "hireDate":'1990-02-05',
                "dob":"02/03/1960",
                "dept":"IT"
            },
            {
                "employeeNo": 22,
                "name": "Ranjit",
                "salary":"12000",
                "hireDate": '1985-02-05',
                "dob":"02/08/1970",
                "dept":"CSE"
            },
            {
                "employeeNo": 13,
                "name": "Kararn",
                "salary":"8000",
                "hireDate": '2017-08-04',
                "dob":"02/03/1980",
                "dept":"IT"
            },
            {
                "employeeNo": 14,
                "name": "Rajan",
                "salary":"13000",
                "hireDate": '2017-03-06',
                "dob":"02/03/1950",
                "dept":"IT"
            }
        ] };
        var employee  = foo.results.find(item => item.employeeNo === parseInt(searchEmpno))
console.log(employee);
       res.status(200).json(employee);

});

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/app/index.html')
});

app.use("/",  router);

app.listen(port, function(){
    console.log(__dirname +"Listening at " + port);
})