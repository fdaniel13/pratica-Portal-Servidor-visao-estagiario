const express = require('express');
const routers = express.Router();


routers.get('/index/:idUsuario',(req,resp)=>{
    
    //resp.send('pagina inicial');
    //resp.sendFile(__dirname+'/front-end/index.html');
    resp.render('index',{layout:'main', name: req.params.idUsuario}); //ou resp.render('dadosIniciais',{layout:'nome layout onde vai ser impresso'});

}
);

routers.post('/',(req,resp)=>{
    console.log(req.body);
    /*validar dados do form*/
    resp.redirect('/user/index/2');
}
);
module.exports = routers;