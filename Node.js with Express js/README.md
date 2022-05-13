# Node.js with Express.js

## Using Express

- Express.js is a web framework for Node.js. It is a fast, robust and asynchronous in nature.
- Go to the directory in which the .js file is present in which you want to use the Express.
- Initialise the npm 
  ```js
  $ npm init
  ```
- Now install Express in the directory
  ```
  $ npm install express
  ```
- **Code**
- We need to require the express.
  ```js
  const express = require("express");
  const app = express();
  ```
- Use the app, by using one of the methods ```listen()```
  ```js
  app.listen(3000, function(){
    console.log("Server started on port 3000);
  });
  ```
- When we open *locolhost:3000* on a browser, we get an error : **Cannot GET /**
- When browser requests a get request to root of our website which is represented by **/**.
- Just above ```app.listen()```
  ```js
  app.get("/",function(req, res){
    response.send("Hello");
  });
  ```

### Calculator App

- Create a index.html file, create a form in the file with action and method as follows:
  ```html
  <form action="/" method="post">
  </form>
  ```
- To manupulate the data inside the form, for input fields name is uniquely identified so it is important.
  ```html
  <input type="text" name="num1">
  <input type="text" name="num2">
  <button type="submit" name="submit">Calculate</button>
  ```
- Now, we need to send the entire index.html file when the browser access the "/", to do that
  ```js
  app.get("/",function(req, res){
    response.sendFile(__dirname + "/index.html");
  });
  ```
- To handle post requests
  ```js
  app.post("/", function(req, res){
    res.send("");
  });
  ```
- To get access to the prperties and variables, so we can do our calculations. We need to install body-parser.
  ```
  $ npm install body-parser
  ```
- Now, require the body-parser.
  ```js
  const bodyParser = require("body-parser");
  ```
- Below app, write
  ```js
  app.use(bodyParser.urlencoded({encoded: true}));
  ```
- Now, we can use the properties and variables in app.post()
  ```js
  app.post("/", function(req, res){
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1 + num2;
    
    res.send("The result of calcilation is "+result);
  });
  ```
- *Our Calculator app is ready*
