// Texto a animaro
var text = "Michel Balvin Ormedo ";
var speed = 100; // Velocidad de escritura y eliminación

// Función para animar el texto
function animateText(text) {
  var h1Element = document.getElementById("animatedText");
  var currentText = h1Element.innerHTML;
  var newText = "";
  var i = 0;

  // Comienza a escribir el texto
  var typeInterval = setInterval(function () {
    if (i < text.length) {
      newText += text.charAt(i);
      h1Element.innerHTML = newText;
      i++;
    } else {
      clearInterval(typeInterval);
      // Espera antes de eliminar el texto
      setTimeout(function () {
        // Inicia la eliminación del texto
        var eraseInterval = setInterval(function () {
          if (i >= 0) {
            newText = text.substring(0, i);
            h1Element.innerHTML = newText;
            i--;
          } else {
            clearInterval(eraseInterval);
            // Espera y reinicia la animación
            setTimeout(function () {
              animateText(text);
            }, 1000);
          }
        }, speed);
      }, 1000);
    }
  }, speed);
}

// Inicia la animación del texto
animateText(text);