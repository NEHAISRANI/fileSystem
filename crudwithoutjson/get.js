const express = require('express');
const app = express();

app.get("/students",(req,res)=>{
    res.send(jsonData)
console.log("Not")
});

app.post("/users", (req, res) => {
    readFile((data) => {
      const newUserId = Object.keys(data).length + 1;
  
      // add the new user
      data[newUserId] = JSON.parse(req.body.data);
  
      writeFile(JSON.stringify(data, null, 2), () => {
        res.status(200).send("new user added");
      });
    }, true);
  });

app.listen(3001); 






