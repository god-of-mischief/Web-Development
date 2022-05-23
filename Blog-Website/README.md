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
