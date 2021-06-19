const ex = require('express');
const routers=ex.Router();
const Playerctr= require('../app/Controllers/Playerctr');

routers.use('/Players',Playerctr.show);
routers.use('/Addplayer',Playerctr.addnew);
routers.post('/Saveplayer',Playerctr.savenew);
routers.get('/Playerdetail/:slug',Playerctr.detail);

module.exports=routers;