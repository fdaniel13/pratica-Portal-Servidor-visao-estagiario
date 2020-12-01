const express = require('express');
const routers = express.Router();

//só pra teste de validação de usuario
const admin ='admin';
var id;


routers.post('/',adminUser,(req,resp)=>{
    
    
    id = Math.floor(Math.random()*1000);
    /*validar dados do form*/
    resp.redirect('/user/index/'+id);
}
);

routers.get('/index/:id',userId,(req,resp)=>{
    
    
    //resp.send('pagina inicial');
    //resp.sendFile(__dirname+'/front-end/index.html');
    resp.render('index',{layout:'main'}); //ou resp.render('dadosIniciais',{layout:'nome layout onde vai ser impresso'});

}
);

function userId(req,resp,next){
    
    if(req.params.id==id){
        next();
    }else{
        resp.redirect('/');
    }
}

function adminUser(req,resp,next){
    
    if(req.body['textUsuario'] === admin && req.body['senhaUsuario'] === admin) {
         
         next();
    }else{
        resp.redirect('/');
    }

    
}

module.exports = routers;