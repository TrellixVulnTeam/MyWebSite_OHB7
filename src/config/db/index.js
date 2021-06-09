const mg=require('mongoose');

async function connect(){
    try{
        await mg.connect('mongodb://localhost:27017/FootballDreams',{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        
    })
    console.log('connect suscessfully');
 } catch(error){
    console.log('connect failed!!');
    }
}

module.exports={connect};