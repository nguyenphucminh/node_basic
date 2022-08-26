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