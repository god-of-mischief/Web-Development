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

