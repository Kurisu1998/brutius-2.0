let PlayerMoves = {
   calcAttack: function(){
     let getPlayerSpeed = player1.vitesse;
     let getJoueurSpeed = joueur2.vitesse;


     let playerAttack = function(){
       let calcBaseDommage;
       if(player1.vitesse > 0){
          calcBaseDommage = player1.force / 1000;
       }else{
         calcBaseDommage = player1.force * player.agile / 1000;
       }
       let offsetDommage = Math.floor(Math.random()*Math.floor(10));
       let calcOutputDommage = calcBaseDommage + offsetDommage;

       let nombreCoup = Math.floor(Math.random() * Math.floor(player1.agile/
         10) /2)+1;
         let valeurAttaque = [calcOutputDommage,nombreCoup];
         return valeurAttaque;
     }



     let joueurAttack = function(){
       let calcBaseDommage;
       if(joueur2.vitesse > 0){
          calcBaseDommage = joueur2.force  / 1000;
       }else{
         calcBaseDommage = joueur2.force * joueur2.agile / 1000;
       }
       let offsetDommage = Math.floor(Math.random()*Math.floor(10));
       let calcOutputDommage = calcBaseDommage + offsetDommage;

       let nombreCoup = Math.floor(Math.random() * Math.floor(joueur2.agile/
         10) /2)+1;
         let valeurAttaque = [calcOutputDommage,nombreCoup];
         return valeurAttaque;
     }

     let getPlayerHealth = document.querySelector("#vie-player");
     let getJoueurHealth = document.querySelector("#vie_j2");






     if(getPlayerSpeed >= getJoueurSpeed){
       let playerAttackValues = playerAttack();
       let totalDommage = playerAttackValues[0] * playerAttackValues[1];


        joueur2.vie -= totalDommage;
        getJoueurHealth.value -= totalDommage;








       if(joueur2.vie<= 0){
         document.location.href="decision/gagnant.html"
         getPlayerHealth.innerHTML = ' '+ player1.vie;

         return false;
       }else{
         getJoueurHealth.innerHTML = ' '+ joueur2.vie;


         let joueurAttackValues = joueurAttack();
         let totalDommage = joueurAttackValues[0] * joueurAttackValues[1];

         player1.vie -= totalDommage;
         getPlayerHealth.value -= totalDommage;
        





         if(player1.vie<= 0){
           document.location.href="decision/perdu.html"
           getJoueurHealth.innerHTML = ' '+ joueur2.vie;

           return false;
         }else{
           getPlayerHealth.innerHTML = ' '+ player1.vie;


         }


       }
     }
   }

}
