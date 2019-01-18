function pouic()
{
  var tab = new Array();
  tab[0] = "fond/1.jpg";
  tab[1] = "fond/2.jpg";
  tab[2] = "fond/3.jpg";
  tab[3] = "fond/4.jpg";
  tab[4] = "fond/5.jpg";


   var bg = Math.floor(Math.random()*tab.length);

   document.body.style.backgroundImage = "url("+tab[bg]+")";
}
