var express = require('express');
var bodyParser=require('body-parser')
var app = express();
var fs=require('fs');
var dataPath="./data/";
app.use((req, res, next) =>{
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Credentials','true');
    next();
    })    
app.use(bodyParser.json())
app.get('/', function (req, res) {
   res.send('this is backend of project 3002');
})
app.get('/getPhoto',(req,res)=>{
    console.log("getPhotoQuery",req.query);
    fs.readFile(dataPath+"img/"+req.query.name+".jpg",(err,data)=>{
        if(err){
            console.log("cannot get pic "+req.query.name);
            res.send("failed");
        }
        else{
            res.send(data.toString("base64"));
        }
    })
})

var server = app.listen(5002, function () {
 
    var host = server.address().address
    var port = server.address().port
   
    console.log("应用实例，访问地址为 http://%s:%s", host, port)
   
  })
