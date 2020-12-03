const Sequelize = require('sequelize');
const conn = require(__dirname+'/database.js');
//const intern = require(__dirname+'/internModel.js');

const paycheck = conn.define('paycheck',{
    value:{
        type:Sequelize.FLOAT,
        allowNull:false,
        
    },
    description:{
        type:Sequelize.TEXT,
        allowNull:false,
        defaultValue:'estagiario'
    },
    dataCredit:{
        type:Sequelize.DATE,
        aloowNull:false
    }
}

);


(async()=>{
    await conn.sync(
        {
            force:true
        }
    ).then(()=>{
        console.log('tabela pagamento criada');
    });
})();


module.exports=paycheck;