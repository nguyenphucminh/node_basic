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