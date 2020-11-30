const express = require('express');
const bodyParser = require('body-parser');
const handlebars = require('express-handlebars');
const { dirname } = require('path');

const loguinRoute = require(__dirname+'/routes/loguin.js');
const userRoute = require(__dirname+('/routes/user.js'));
const app =  express();

//templates 
//app.engine('handlebars',handlebars( {defaultLayout:'index'} ) );
app.engine('handlebars',handlebars());
app.set('view engine','handlebars');

//usa o bodyparser pra ler os dados passadoa via formulario usando url 
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//usar arquivos front end
app.use('/css',express.static(__dirname+'/views/layouts/css'));
app.use('/scripts',express.static(__dirname+'/views/layouts/scripts'));


//Routes and Templates
app.use(loguinRoute);

app.use('/user',userRoute);

/*
app.get('/',(req,resp)=>{
    resp.render('formLoguin',{layout:'loguin'});
});
*/
/*
app.get('/user',(req,resp)=>{

    //resp.send('pagina inicial');
    //resp.sendFile(__dirname+'/front-end/index.html');
    resp.render('telaInicial',{layout:'index'}); //ou resp.render('dadosIniciais',{layout:'nome layout onde vai ser impresso'});

});
*/


//start server
app.listen(3000,(req,resp)=>{

    console.log('ok')
});