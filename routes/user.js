const express = require('express');
const routers = express.Router();

/*
routers.get('/',(req,resp)=>{

    //resp.send('pagina inicial');
    //resp.sendFile(__dirname+'/front-end/index.html');
    resp.render('telaInicial',{layout:'index'}); //ou resp.render('dadosIniciais',{layout:'nome layout onde vai ser impresso'});

}
);*/

routers.post('/',(req,resp)=>{
    console.log(req.body);
    //resp.send('pagina inicial');
    //resp.sendFile(__dirname+'/front-end/index.html');
    resp.render('index',{layout:'main'}); //ou resp.render('dadosIniciais',{layout:'nome layout onde vai ser impresso'});

}
);
module.exports = routers;