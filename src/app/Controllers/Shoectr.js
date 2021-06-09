const{mutipleMongoosesToOject}=require('C:/Users/MyWebSite/src/resources/until/mongoose.js')
const Shoe= require('../Models/Shoe')

class Shoectr{
    show(req,res,next){
        Shoe.find({})
        .then(shoes=>{

            res.render('C:/Users/MyWebSite/src/resources/views/Shoes/Shoes.hbs',{shoes:mutipleMongoosesToOject(shoes)})
        })
        .catch(next);
    }

    //render Addshoes page
    add(req,res,next){
        res.render('C:/Users/MyWebSite/src/resources/views/Shoes/Addshoe.hbs');
    }

    //save new Shoe 
    save(req,res,next){
        const data=req.body;
        const shoe=new Shoe(data);
        shoe.save();

        res.json(req.body);
    }


}

module.exports=new Shoectr();