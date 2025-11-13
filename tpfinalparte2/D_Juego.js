//clase juego, se encarga de la reproduccion del juego y la colision con el enemigo e interaccion del personaje

class juego {
  constructor() {
    this.fondo = arrayImagen[4];
    this.wirt = new wirt();
    this.bestia = new bestia();
  }

//dibuja el fondo y los personajes
dibujar() {
  image(this.fondo, 0, 0, width, height);
  
  this.wirt.actualizarMovimiento(); //es el movimiento de wirt
  this.wirt.dibujar();

  this.bestia.dibujar();

//verifica la colisión
  this.detectarColision();
}


//detecta colisión entre la linterna y la bestia
detectarColision() {
  if (this.wirt.linterna.lanzada) {

    let lx = this.wirt.linterna.x;
    let ly = this.wirt.linterna.y;

    if (this.bestia.recibirGolpe(lx, ly)) {
      this.wirt.linterna.lanzada = false;
    }
  }
}

}
