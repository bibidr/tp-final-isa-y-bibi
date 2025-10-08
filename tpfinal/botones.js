function dentroBoton(x, y, w, h) {
  return mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h;
}

function dibujaBoton(x, y, w, h, texto) {
  stroke(0);
  strokeWeight(2);
  fill(255);
  rect(x, y, w, h, 8);
  noStroke();
  fill(0);
  textSize(13);
  textAlign(CENTER, CENTER);
  text(texto, x + w / 2, y + h / 2);
  textAlign(LEFT);
}
