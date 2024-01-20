
function cambiarTamanioTexto(factor) {
   
    var etiquetas = document.querySelectorAll('h1, h2, h3, h5');
    
    etiquetas.forEach(function(etiqueta) {
        etiqueta.style.fontSize = factor + "rem";
    });
}