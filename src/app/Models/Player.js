
//entities of players
const mongoose=require('mongoose');
const schema=mongoose.Schema;

//entites
const Player=new schema({
    name:{type:String },
    description:{type:String},
    image:{type:String}
});

module.exports=mongoose.model('Player',Player);
