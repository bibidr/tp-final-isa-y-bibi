function mostrarMenu() {
  image(arrayImagen[0], 0, 0, ancho, alto);
  fill(255);
  stroke(0);
  strokeWeight(2);
  rect(340, 300, 140, 50);
  noStroke();
  fill(0);
  textSize(18);
  text("COMENZAR", 355, 331);
  
  stroke(0);
  fill(255);
  rect(160, 300, 140, 50);
  noStroke();
  fill(0);
  textSize(18);
  text("CRÉDITOS", 185, 331);
  
  textSize(12);
  text("Hace clic en los botones para avanzar y tomar decisiones.", 130, 440);
  mostrarTexto(0);
}

function mostrarPantallaConSiguiente() {
  image(arrayImagen[estado], 0, 0, ancho, alto);
  mostrarTexto(estado);
  dibujaBoton(540, 440, 80, 30, "SIGUIENTE");
}

function mostrarDecision(opcionIzq, opcionDer) {
  image(arrayImagen[estado], 0, 0, ancho, alto);
  mostrarTexto(estado);
  dibujaBoton(100, 400, 120, 40, opcionIzq);
  dibujaBoton(400, 400, 120, 40, opcionDer);
}

function mostrarFinal() {
  image(arrayImagen[estado], 0, 0, ancho, alto);
  mostrarTexto(estado);
  dibujaBoton(250, 400, 140, 50, "REINICIAR");
}

function mostrarTexto(num) {
  fill(255);
  stroke(0);
  strokeWeight(2);
  rect(20, 355, 600, 60);
  noStroke();
  fill(0);
  textSize(12);
  text(arrayTexto[num], 40, 367, 560, 40);
}
