## Rendering a file. (When using ejs)

- In app.js
  ```js
  app.get("/", function(req, res){
  res.render("home"); 
  });
  ```
- Note: home.ejs file should be present in the folder called views.
  
## Rendering an element.

- To render an element from app.js to home.ejs:
- Let the element be `var element = "some thing"`.
- In home.ejs file we need to put this `<%= toBeRendered %>`, where we need to render the element. The element from app.js will be rendered there.
- In app.js,
  ```js
  app.get("/", function(req, res){
    res.render("home",{toBeRendered: element});
  });
  ```

## Layouts.

- EJS does not specifically support blocks, but layouts can be implemented by including headers and footers, like so:
  ```html
  <%- include('header'); -%>
  <h1>Title</h1>
  <p>My page</p>
  <%- include('footer'); -%>
  ```

## Fetch data from text input field:

- To make a post request to server, we have to put the input fields inside a form.
  ```html
  <form action="/" method="post">
  </form>
  ```
- When we click submit then we can pass over user typed data into our app.js
- **The input field must have name.**
- To handle the post request.
  ```js
  app.post("/", function(req, res){
    var data = req.body.inputFieldName;
    console.log(data);
  });
  ```

## Redirecting

- To redirect a post route to a get route or a root route,
  ```js
  app.post("/fromPostRoute", function(req, res){
    res.redirect("/toGetRoute");
  });
  ```

## Writing a code in .ejs file

- If there is a need to write a code like a for loop or we need to do a calculation, then every line of code should be enclosed in ejs scriplet tag.
  ```ejs
  <% for(var i=0;i<array.length;i++){ %>
  <%    console.log(array[i]); %>
  <% } %>
  ```

## Route parameters

- Route parameters are named URL segments that are used to capture the values specified at their position in the URL. The captured values are populated in the req.params object, with the name of the route parameter specified in the path as their respective keys.
  ```
  Route path: /users/:userId/books/:bookId
  Request URL: http://localhost:3000/users/34/books/8989
  req.params: { "userId": "34", "bookId": "8989" }
  ```
- To define routes with route parameters, simply specify the route parameters in the path of the route as shown below.
  ```js
  app.get('/users/:userId/books/:bookId', (req, res) => {
    res.send(req.params);
  });
  ```
