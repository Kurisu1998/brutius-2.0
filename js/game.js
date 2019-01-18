let Game = {

    setGameStart: function(nom){
      this.resetPlayer1(nom);
      this.setPreFight();

    },

    resetPlayer1: function(nom){
      switch (nom) {
        case "Jonathan":
           player1 = new Joueur1(nom,200,70,50,70);
          break;
        case "Joseph":
            player1 = new Joueur1(nom,200,70,60,70);
            break;
        case "Jotaro":
            player1 = new Joueur1(nom,200,90,60,100);
            break;
        case "Giorno":
            player1 = new Joueur1(nom,200,60,80,110);
            break;





      }
      let getArena = document.querySelector(".interface");

      getArena.innerHTML = '<div id="n1"><h3 class="bg-primary">'+
    nom+'</h3> <progress max='+ player1.vie +' value='+player1.vie +'  id="vie-player"></progress> </div><div id="j1"><img src="imj1/'
    +nom.toLowerCase() +'.png" heigth="100px" width="100px" id="img-avatari"></div>';

    },

    setPreFight: function(){
           let getHeader = document.querySelector(".header");
           let getActions = document.querySelector(".actions");
           let getArena = document.querySelector(".arena");
           getActions.innerHTML = '<button class="btn btn-danger btn-circle btn-xl" onclick="Game.setFight()"></button>';

    },

    setFight: function(){
      let getHeader = document.querySelector(".header");
      let getActions = document.querySelector(".actions");
      let getJoueur2 = document.querySelector(".joueur_2");
      let moveJoueur2 = document.querySelector(".plij2");



      let j21 = new Joueur2("Jotaro",200,90,60,100);
      let j22 = new Joueur2("Jonathan",200,70,50,70);
      let j23 = new Joueur2("Joseph",200,70,60,70);

      let chooseRandomJoueur2 = Math.floor(Math.random()*Math.floor(3));
      switch (chooseRandomJoueur2) {
        case 0:
          joueur2 = j21;
          break;
        case 1:
          joueur2 = j22;
          break;
        case 2:
          joueur2 = j23;
          break;

      }

      getActions.innerHTML = '<button class="btn btn-danger btn-circle btn-xl" id="ml" onclick="PlayerMoves.calcAttack()"> </button>';

      getJoueur2.innerHTML = '<div id="n2" ><h3 class="bg-primary" id="kl">'+
      joueur2.name+'</h3><progress max='+ joueur2.vie +' value='+joueur2.vie +'  id="vie_j2" ></progress></div>';

      moveJoueur2.innerHTML = '<img src="enn/'+
     joueur2.name.toLowerCase() +'.png" heigth="100px" width="100px"  alt="'+joueur2.name+'" class="img-avatar">'

    getJoueur2.animate(1);


    }


}
