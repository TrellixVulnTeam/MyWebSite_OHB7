const ex = require('express');
const routers=ex.Router();
const Playerctr= require('../app/Controllers/Playerctr');

routers.use('/Players',Playerctr.show);

module.exports=routers;