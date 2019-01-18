let player1;
function Joueur1(nom,vie,force,agile,vitesse,x){
   this.nom = nom;
   this.vie = vie;
   this.force = force;
   this.agile = agile;
   this.vitesse = vitesse;
   this.x = x;
   this.speedX = 0;
   this.newPos = function() {
        this.x += this.vitesse;

    }

}

function updateJ1(){

}
