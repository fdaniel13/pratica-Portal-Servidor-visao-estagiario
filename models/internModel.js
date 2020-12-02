const Sequelize = require('sequelize');
const conn = require(__dirname+'/database.js');

const Intern = conn.define('interns',{
    name:{ 
        type:Sequelize.STRING,
        unique:true,
        alloeNull:false
    },
    registration:{
        type:Sequelize.BIGINT,
        unique:true,
        alloeNull:false,
        validate:{
            isInt:{
            args:true,
            msg:'its not a number'
         }
        }
    }
    });
 
  
conn.sync();
module.exports = Intern;  
   //cria se não existe tabela, force true cria msm existindo(só pra nvl de desenvolvimemto) 
   //(async()=>{ 
     //   await conn.sync(
            /*{
                force:true
            }*/
       // ).then(()=>{
         //   console.log('tabale Intern criada');
           /* Intern.create({
                name:'Dean',
                registration:'1'
            });*/
        
            
        //});
    //})();
/*
    (()=>{Intern
    .findAll()
    .then((intern)=>{
        
        console.log(intern.dataValues);
    })})();*/

    