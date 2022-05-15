# Delpoying website with heroku

Till now we have deployed our static websites using GitHub Pages. But now we are using dynamic pages so github can't deploy them. So, we will use Heroku.

## Getting started

- Heroku has a great documentation about deploying web pages. You can see [here](https://devcenter.heroku.com/articles/getting-started-with-nodejs).
- Create a heroku account.
- Download the Heroku Command Line Interface (CLI) from [here](https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up).
- Open a terminal. e.g. Hyper.
- Login to heroku, by following command
  ```
  $ heroku login
  heroku: Press any key to open up the browser to login or q to exit:
  Opening browser to https://cli-auth.heroku.com/auth/cli/browser/***
  Logging in... done
  Logged in as ***@gmail.com
  ```
- You need to check for node, npm and git. These should be already installed in your system.
- Previously we are listening on port 3000. But to work on heroku we need to update that to:
  ```js
  app.listen(process.env.PORT || 3000,function(){
    console.log("Server is running on port 3000.");
  });
  ```
- To run app on heroku we need to define a procfile. Create a file called Procfile. Inside that put below text.
  ```
  web: node app.js
  ```
- cd to our project folder in hyper terminal and follow the following commands one-by-one.
  ```
  $ git init # initialising git
  
  $ git add . # adding files to git
  
  $ git commit -m "first commit" # commiting 
  ```
- To Deploy the app
  ```
  $ heroku create
  ```
- You can find the address where your app is created.
- Next, 
  ```
  $ git push heroku master
  ```
- Now you can find your website at previously obtained address.
