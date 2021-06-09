const ex = require('express')
const routers = ex.Router()
const Shoectr = require('../app/Controllers/Shoectr')

routers.use('/Shoes',Shoectr.show);
routers.use('/Addshoes',Shoectr.add);
routers.post('/Saveshoes',Shoectr.save);


module.exports=routers;