const {mutipleMongoosesToOject}=require('C:/Users/MyWebSite/src/resources/until/mongoose.js')
const Player=require('../Models/Player');

class Playerctr{

    //render player page
    show(req,res,next){
        Player.find({})
        .then(players=>{
        
           res.render('C:/Users/MyWebSite/src/resources/views/Players/Players.hbs',{players:mutipleMongoosesToOject(players)})
           
        })
        .catch(next);
    
    }
}

module.exports=new Playerctr();