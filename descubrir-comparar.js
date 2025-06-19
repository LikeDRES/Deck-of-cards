
function descubrir(){
    var descubiertas;
    var totalDescubiertas = document.querySelectorAll(".descubiertas:not(.Acertada)");

    if(totalDescubiertas.length > 1 ){
        return;

    }

    this.classList.add("Descubierta");
    descubiertas= document.querySelectorAll(".descubiertas:not(.Acertada");
    if (descubiertas.length < 2){
        return;

    }

    comparar(descubiertas);
}

function comparar(tarjetasAComparar){
    if(tarjetasAComparar[0].dataset.valor = tarjetasAComparar[1].dataset.valor){
        Acertaste (tarjetasAComparar);
    } else {
        Fallaste(tarjetasAComparar);
    }
}