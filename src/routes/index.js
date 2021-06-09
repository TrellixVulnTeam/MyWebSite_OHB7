const Players=require("./Players")
const Shoes=require('./Shoes')

// config the route
function route(app){
   //path to home
    app.get('/',(req,res)=>{
        res .render('home');

    })

    
    //path to Players view    
    app.get('/Players',Players);
    

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
    })

   
  

}
module.exports= route;