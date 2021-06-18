// to create model of entites
// create schema to show one entity

const mongoose=require('mongoose')
const schema=mongoose.Schema

//create entites

const Shoe=new schema({
    name:{type:String},
    description:{type:String},
    state:{type:String},
    price:{type:String},
    image:{type:String}

})

module.exports=mongoose.model('Shoe',Shoe)