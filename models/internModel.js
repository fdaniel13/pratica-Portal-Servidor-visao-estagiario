const Sequelize = require('sequelize');
const conn = require(__dirname+'/database.js');

const Intern = conn.define('intern',{
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
        });
    })();