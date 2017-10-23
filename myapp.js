// Nodejs Document

const express = require('express')
const app = express() 
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use('/facebookapp', express.static('public'));

// mysql config 
var mysql = require('mysql');   
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "faceapp"
});
con.connect(function(err) {  if (err) throw err;   });

//insert new user 
app.post('/adduser', function (req, res) {
    var sql = 'INSERT INTO user SET ?' ;
    con.query(sql, {email:req.body.username, pass:req.body.password}, function (err, result) {
    //if (err) throw err; 
    if(err)  res.send(err.sqlMessage);  
    else     res.send('OK'); 
    });
   
});  


//get registered user info
app.post('/loguser', function (req, res) {
  
    var sql = "SELECT * FROM user where email='"+req.body.username+"' and pass='"+req.body.password+"'";
    con.query(sql, function (err, result) {
      if (err) throw err;
      if(result[0]) {
        res.send('OK');     
      }
      else {
        res.send('Error: email or password! User is not registered.'); 
      }    
   });
 
      
});
  

app.listen(8080, function () {
  console.log('facebookApp listening on port 8080!')
})