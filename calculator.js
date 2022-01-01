const express = require("express");
const bodyParser = require("body-parser");

const app = express();

//we use urlencoded to grab the info that is coming from client to server side
// there are other options too like json(), text etc
app.use(bodyParser.urlencoded({ extended: true }));

//app.get to send the index.html file to cient
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/", function (req, res) {
  var num1 = parseInt(req.body.num1);
  var num2 = parseInt(req.body.num2);
  function calculate(num1, num2) {
    var sum = num1 + num2;
    return sum;
  }
  res.send("The sum value is " + calculate(num1, num2));
});

app.listen(3000, () => {
  console.log("server started on port 3000");
});
