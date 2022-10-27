## GETTING STARTED:
install nodejs
```
git init
```
install expressjs
```
npm i express
```
install nodemon
nodemon is a tool that helps develop nodejs based app by automatically restarting the node app when file changes in the directory are detected.
```
npm i nodemon --save-dev
```

add start at package.json (script)
```
"start":"nodemon --inspect index.js",
```
START
```
npm start
```
add morgan
HTTP request logger middleware(trung gian) for nodejs
```
npm i morgan --save-dev
```
handlebar nodejs
keep the view and the code separated(tạo khuôn mẫu không logic giúp giữ cho chế độ xem và mã được tách biệt)
Handlebars.js được viết bằng JavaScript, Handlebars.js là trình biên dịch nhận bất kỳ biểu thức HTML và biên dịch chúng thành hàm JavaScript, Hàm JavaScript này nhận một tham số, một đối tượng, dữ liệu của bạn, và nó trả về một chuỗi có các giá trị HTML và thuộc tính của đối tượng được chèn vào HTML.
```
npm i express-handlebars
```
add node-sass
```
npm i node-sass --save-dev
```
add watch node-sass into package (node-sass <input> [output])
```
"watch": "node-sass --watch src/resources/scss/app.scss -output src/public/css/app.css"
```
plugin slug mongoose
```
npm i mongoose-slug-generator --save
```
config header
```
npm i method-override
```
mongoose delete plugin: enables soft deletion of document in MongoDB
```
npm i mongoose-delete
```
## NOTE:
GET: server -> client

POST: client -> server

PUT,PATCH: update data

DELETE: delete data
## FORMAT CODE:
```
npm i prettier lint-staged husky --save-dev

```
# INSTALL MONGOOSE:
Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment. Mongoose supports both promises and callbacks.
```
npm install mongoose
```

# MIDDLEWARE
Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. The next middleware function is commonly denoted by a variable named next.

### Middleware functions can perform the following tasks:

* Execute any code.
* Make changes to the request and the response objects.
* End the request-response cycle.
* Call the next middleware function in the stack.
Execute any code.
Make changes to the request and the response objects.
End the request-response cycle.
Call the next middleware function in the stack.

If the current middleware function does not end the request-response cycle, it must call next() to pass control to the next middleware function. Otherwise, the request will be left hanging.

```
app.use( 
  function(req, res, next)
  {
    if(['normal','vip'].includes(res.params.id))
    {
      req.face = 'ABC'
      return next();
    }
    res.status(403).json({message:"access denied"})
  },
  function(res, req, next)
  {
    res.json({
      message:"Successful",
      face: "req.face"
    })
  }
)
  
```
https://www.npmjs.com/package/jsonwebtoken

end #31
continue #32 - #36 select all
