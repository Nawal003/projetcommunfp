 var slide = new Array("images/accueil.jpg", "images/métiers.jpg", "images/techniques.jpg", "images/humaines.jpg");
var numero = 0;

function ChangeSlide(sens) {
    numero = numero + sens;
    if (numero < 0)
        numero = slide.length - 1;
    if (numero > slide.length - 1)
        numero = 0;
    document.getElementById("slide").src = slide[numero];
}