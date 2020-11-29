class UserView{


    constructor(){
        UserView.inicia();
    }

     static inicia(){
        
        let infoUser = `
        
        
        <div class="user-Info" id="userInfo">
            
                    
        </div>
        <div  class="user-Cont" id="userCont">
        <a href="#contracheques" id="menu-check">Contracheque</a>
        </div>
        `;

        document.querySelector('.info').innerHTML=infoUser;
    }

    static contracheque(){

        let infoUser = `
        <div class="user-Info" id="userInfo">
            
                    <p>NOME ALTURA BABALLA</p>
        </div>
        <div  class="user-Cont" id="userCont">

        </div>
        `;

        document.querySelector('.info').innerHTML=infoUser;
    }



}