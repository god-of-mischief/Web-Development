//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date=require(__dirname +"/date.js");

const app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));


const items=[];
const workItems=[];

app.get("/", function(req, res) {

  const day=date.getDate();
  res.render("list", {
    listTitle: day, newListItems: items
  });
});

app.post("/",function(req,res){
  const item=req.body.newitem;
  if(req.body.list==="Work"){
    workItems.push(item);
    res.redirect("/work");
  }
  else{
    items.push(item);
    res.redirect("/");
  }
});

app.get("/work", function(req,res){
  res.render("list",{listTitle:"Work List", newListItems: workItems});
});

app.post("/work",function(req,res){
  const item=req.body.newitem;
  workItems.push(item);
  res.redirect("/work");
});

app.get("/about", function(req,res){
  res.render("about");
});

app.get("/public/css/styles.css", function(req,res){
  res.send("Hello");
});


app.listen(process.env.PORT || 3000, function() {
  console.log("Server started on port 3000");
});
