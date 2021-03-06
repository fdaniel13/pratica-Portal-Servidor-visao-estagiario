const Sequelize = require('sequelize');
const conn = require(__dirname+'/database.js');
//const paycheck = require(__dirname+'/paycheckModel.js');

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
 

    
 
   //cria se não existe tabela, force true cria msm existindo(só pra nvl de desenvolvimemto) 
   (async()=>{ 
      await conn.sync(
            {
                force:true
            }
       ).then(()=>{
            console.log('tabale Intern criada');
            Intern.create({
                name:'Dean Winchest Carry on my son',
                registration:'119273666'
            });
        
            
        });
    })();

    module.exports = Intern; 


    