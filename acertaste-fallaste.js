
function Acertaste (lasTarjetas){
    lasTarjetas.forEach(function(elemento){
        elemento.classList.add("Acertada");
    });
}

function Fallaste (lasTarjetas){
    lasTarjetas.forEach(function(elemento){
      elemento.classList.add("error");
    });
    
 setTimeout(function(){
     lasTarjetas.forEach(function(elemento){
         elemento.classList.remove("descuvierta");
         elemento.classList.remove("error");
     });
 }, 2000);
       
}
