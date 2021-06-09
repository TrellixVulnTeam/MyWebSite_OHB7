
const path=require('path')
const morgan=require('morgan')
const handlebars=require('express-handlebars')
const express = require('express')
const app = express()
const port = 3000
const Route=require('./routes')

const db=require('./config/db')

//connect to mongoose db
db.connect();

//to use static file like images,css...
app.use(express.static(path.join(__dirname,'public')));

//show log HTTP in terminal
app.use(morgan('combined'))

//Template engine, handlebars
app.engine('hbs',handlebars({
  extname:'.hbs'
}))
app.set('view engine','hbs')
app.set('views',path.join(__dirname,'resources/views'))


//execute data from to server by Post.
app.use(express.urlencoded({
  extended:true
}))

//config the route
Route(app);

//extend data from js code to server by Post.
app.use(express.json())






app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})