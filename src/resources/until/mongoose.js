module.exports={
  //to querry one data in mongoose db
    mongooseToObject:function(mongoose){
        return mongoose?mongoose.toObject(): mongoose;
    },
  //to querry multi data in mongoose db
  mutipleMongoosesToOject: function(mongooses){
    return mongooses.map((mongoose)=> mongoose.toObject());
}

}