const express = require('express');
const routers = express.Router();


routers.get('/',(req,resp)=>{

    //resp.send('pagina inicial');
    //resp.sendFile(__dirname+'/front-end/index.html');
    resp.render('telaInicial',{layout:'index'}); //ou resp.render('dadosIniciais',{layout:'nome layout onde vai ser impresso'});

}
);

module.exports = routers;