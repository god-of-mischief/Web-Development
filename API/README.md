# Mail List Subscribing Sign-up page

## Setting Up

- CD to the folder where you want to create your project. e.g. Desktop.
- Create a new project folder. e.g. Newsletter-Signup
- Inside the project folder create a app.js, success.html, failure.html and signup.html files.
- Initialise npm with default options.
  ```
  $ npm init
  ```
- Initialise *body-parser, express and request* npm modules.
  ```
  $ npm install body-parser express request
  ```
- Require the modules inside app.js
  ```js
  const express = require("express");
  const bodyParser = require("body-parser");
  const request = require("request");
  ```
- Create a express app and set it to listen on port 3000.
  ```js
  const app = express();
  
  app.listen(3000, function(){
    console.log("Server is running on port 3000");
  });
  ```
- To use body-parser,
  ```js
  app.use(bodyParser.urlencoded({extended: true}));
  ```

## Start building

- Build a signup.html page with three fields, First Name, Last Name and a Email address.
- Send our signup.html when get request comes.
  ```js
  app.get("/", function(req, res){
    res.sendFile(__dirname + "/signup.html");
  });
  ```
- Any images or externl css doesn't link directly, we need to add a line in app.js to link them up.
  ```js
  app.use(express.static("public");
  ```
  Now create a folder called public and add css folder and images in to it.
  Now, you can use them.
- Post Request and to get data from the form.
  ```js
  app.post("/", function(req, res){
    var firstname = req.body.fname;
    var lastname = req.body.lname;
    var email = req.body.email;
  });
  
## Incorporating API

- Create an account in [Mailchimp](https://mailchimp.com/).
- Create an API Key and produce an Unique key for mailing list.
  ```js
  app.post("/",function(req,res){
    const firstName=req.body.fName;
    const lastName=req.body.lName;
    const email=req.body.email;

    const data={
      members:[
        {
          email_address:email,
          status:"subscribed",
          merge_fields:{
            FNAME:firstName,
            LNAME:lastName
          }
        }
      ]
    };

    const jsonData=JSON.stringify(data);

    const url="https://us6.api.mailchimp.com/3.0/lists/{listID}"; //no flower brackets, put your list id here
    const options={
      method:"POST",
      auth:"{Any string}:{API Key}" //no flower brackets, put your api key here.
    }
    const request = https.request(url,options,function(response){

      if(response.statusCode === 200){
        res.sendFile(__dirname +"/success.html");
      }
      else{
        res.sendFile(__dirname +"/failure.html");
      }
      // response.on("data",function(data){
      //   console.log(JSON.parse(data));
      // });
    });
    request.write(jsonData);
    request.end();
  });
  
  app.post("/failure",function(req,res){
    res.redirect("/");
  });
  ```
