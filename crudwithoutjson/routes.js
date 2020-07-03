var express = require('express');
var app = express();

// // get routes 

var name1= [{"id":1,"name":"anu","age":12},{"id":2,"name":"Irani","age":12}]

app.get('/get_data', function (req, res) {  
   res.send(name1); 
}) 

app.listen(8688)


app.get('/get_d',function(req,res){
   res.send("neha")
})

var server=app.listen(8421,function(){
   var port=server.address().port
   console.log(port,"idbf")
console.log("showing ,vnva",port)
})

app.listen(8775)
  
   // ----------------------------------------------------------------

var bodyParser = require("body-parser");
app.use(bodyParser.json());

app.post('/postroute',function(req,res){
   var response1 ={ 
      name:req.body.name,
      age:req.body.age
   }
   name1.push(response1)
   res.send(name1)                   
   console.log(name1) 
}) 

app.listen(5000) 


list=[]
app.post("/route",function(req,res){
   var response={
      name:req.body.name,
      address:req.body.address
   }
   list.push(response)
   res.send(list)
   console.log(list)
})
app.listen(6759)

// -------------------------------------------

// http://localhost:8056/editroute/2/

app.put('/editroute/:id/',function(req,res){
   var id = req.params.id
   // var response={
   //    id:req.params.id,
   //    name:req.body.name,
   //    age:req.body.age
   // } 
   for(var i in name1){
      if (name1[i]["id"]==id){
         name1[i]["name"]=req.body.name,
         name1[i]["age"]=req.body.age
      }
  } 
   console.log(name1)
   res.send(name1) 
   console.log(name1)
})
var server = app.listen(8056, function () {
   var port = server.address().port
   console.log(port,'jjj');
   
console.log("showing data ......", port)                                                            
})     
