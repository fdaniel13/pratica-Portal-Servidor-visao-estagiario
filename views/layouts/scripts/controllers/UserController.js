class UserController{

    constructor(){
        UserController.navegaContrachque();
    }


     static navegaContrachque(){
        
        document.getElementById('menu-check').addEventListener('click',(e)=>{
            UserView.contracheque();
            console.log('aaa');
        });

    }
}