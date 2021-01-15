document.addEventListener("DOMContentLoaded", function(e){

    const parrafos = document.querySelectorAll('.descripcion');

    let alturas = [];
    let AlturaMaxima = 0;

    const aplicarAlturas = (function aplicarAlturas(){

        parrafos.forEach(parrafo => {

            if(AlturaMaxima == 0){
                alturas.push(parrafo.clientHeight);
            }else{
                parrafo.style.height = AlturaMaxima + "px"; 
            }

        });

        return aplicarAlturas;
    })();

    AlturaMaxima = Math.max.apply(Math, alturas);

    aplicarAlturas();

});