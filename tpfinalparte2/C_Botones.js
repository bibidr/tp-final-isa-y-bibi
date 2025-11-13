//clase botones, como se dibujan y el sonido que reproducen al tocarse

class botones {
  constructor() {
    this.sonido = loadSound("data/sonidoClick.mp3");
  }

//método utilizado para dibujar botones
  dibujarBoton(x1, y1, x2, y2, texto) {
    let w = x2 - x1;
    let h = y2 - y1;

    if (this.delimitarBotones(y1, y2, x1, x2)) {
      fill(255, 230, 150, 220);
    } else {
      fill(255, 240, 200, 180);
    }

    stroke(100, 80, 50); 
    strokeWeight(2);
    rectMode(CORNER);
    rect(x1, y1, w, h, 12);

//para el texto
    noStroke();
    fill(0);
    textAlign(CENTER, CENTER);
    textFont(fuente);
    textSize(18);
    text(texto, x1 + w / 2, y1 + h / 2);
  }

//método para resumir la declaración de variables booleanas utilizadas para las delimitaciones de los botones
  delimitarBotones(y1, y2, x1, x2) {
    return mouseY > y1 && mouseY < y2 && mouseX > x1 && mouseX < x2;
  }

//método para activar el sonido
  sonidoBoton() {
    if (this.sonido.isPlaying()) this.sonido.stop();
    this.sonido.play();
  }
}
