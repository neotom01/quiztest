document.oncontextmenu = function(){return false} /*bloqueo menu contextual*/
var n = 0;
var min = 0;
var l = document.getElementById("timequiz");/*ajustes para presentar tiempo*/
window.setInterval(function(){ /*funcion presentacion tiempo*/
  
   if (n==59) {min++; n=0;} /*convierte segundos a minutos*/
   if (min < 10 && n < 10 ) {l.innerHTML = '0'+min + ':0' +n;}
   else if (min < 10 && n >= 10 ) {
   	l.innerHTML = '0'+min + ':' +n;
   }else if (min > 10 && n < 10 ) {
   	l.innerHTML = min + ':0' +n;
   }else if (min => 10 && n >= 10 ) {
   	l.innerHTML = min + ':' +n;
   }
/*condicion en caso de que sobrepase un tiempo dado*/
   if (min == 3) { l.style.color = 'red';}
   
  n++; //aumento de contador segundos
},1000);