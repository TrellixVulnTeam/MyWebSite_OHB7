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

    //render the add player page
    addnew(req,res,next){
        res.render("C:\\Users\\MyWebSite\\src\\resources\\views\\Players\\Addplayer.hbs");
    }

    //save the new player
    savenew(req,res,next){
        const data = req.body;
        const player = new Player(data);
        player.save()
        
          .then(
            Player.find({})
            .then(  
            players=>{
        
            res.render('C:/Users/MyWebSite/src/resources/views/Players/Players.hbs',{players:mutipleMongoosesToOject(players)})
            
        .catch(next);

    })).catch(next);
}


}


module.exports=new Playerctr();