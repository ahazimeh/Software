var express = require("express");
var router = express.Router();
const mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "12[]aszsa",
    database: "test"
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!!");
  });
router.get("/",function(req,res,next){
    res.send("API is working properly");
});
router.get("/brands",function(req,res,next){
    // res.send("API is working properly");
    

    con.query("select * from employees",(err,rows) => {
    // res.writeHead(200,{'Content-Type': 'text/html'});
    // var data = fs.readFileSync('./index.html');
    res.send(rows);
    // res.end();
    console.log(rows);

        
    });



});
module.exports = router;