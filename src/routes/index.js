const Players=require("./Players")
const Shoes=require('./Shoes')
const Login=require('./Login')
// config the route
function route(app){
   //path to home
    app.get('/',(req,res)=>{
        res .render('home');

    })

    
    //path to Players view    
    app.get('/Players',Players);
    app.get('/Addplayer',Players);
    app.post('/Saveplayer',Players);

    //path to Shoes page
    app.get('/Shoes',Shoes);
    app.get('/Addshoes',Shoes);
    app.post('/Saveshoes',Shoes);
   

    //path to new page
    app.get('/news',(req,res)=>{
        res.render('new');
    })
    

    //path to Login page
    app.get('/login',(req,res)=>{
        res.render('login')
    });
    app.post('/CheckLogin',Login);

   
  

}
module.exports= route;