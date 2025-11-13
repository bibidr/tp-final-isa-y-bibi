//clase donde se desarrolla el programa principal

class programa {
  constructor() {
    this.pantalla = new pantalla();
    this.juego = new juego();
    this.boton = new botones();

    this.estado = 0; // variable para avanzar en las pantallas
    this.energia = 10; // variable para el contador de ataques

    this.musicaActual = null; // para saber cuál está sonando
  }

//método que resetea las variables necearias a sus valores iniciales
  reseteoVariables() {    
    this.energia = 10;
    this.juego.bestia.vida = 70;
    this.juego.bestia.posX = 270;
    this.juego.bestia.velocidad = 1;
    this.juego.wirt.posX = 270;
    this.juego.wirt.linterna.lanzada = false;
  }

//método que dibuja el contador de ataques
  contador() {
    let w = 220;
    let h = 35;
    let x = width / 2 - w / 2;
    let y = 25;
    noStroke();
    fill(255, 255, 255, 90); 
    rect(x, y, w, h, 10);
    textSize(15);
    fill(0);
    textAlign(CENTER, CENTER);
    textFont(fuente);
    text("Energía de la linterna: " + this.energia, width / 2, y + h / 2);
  }

//método que controla qué música debe sonar según el estado actual
  controlarMusica() {
   
// pantallas de menú y créditos
    if ([0, 1, 2, 4, 5].includes(this.estado)) {
      if (this.musicaActual !== musicaMenu) {
        this.detenerMusica();
        musicaMenu.loop();
        musicaMenu.setVolume(0.4);
        this.musicaActual = musicaMenu;
      }
    }

// pantalla de juego
    else if (this.estado === 3) {
      if (this.musicaActual !== musicaJuego) {
        this.detenerMusica();
        musicaJuego.loop();
        musicaJuego.setVolume(0.1);
        this.musicaActual = musicaJuego;
      }
    }
  }

  detenerMusica() {
    if (this.musicaActual && this.musicaActual.isPlaying()) {
      this.musicaActual.stop();
    }
  }

//método que reproduce el tp en sí, llama métodos de pantalla y dibuja el juego mediante la logica de estados
  reproducir() {
    this.controlarMusica(); 

    switch (this.estado) {
      case 0:
        this.pantalla.menu();
        break;
      case 1:
        this.pantalla.creditos();
        break;
      case 2:
        this.pantalla.instrucciones();
        break;
      case 3:
        this.juego.dibujar();
        this.contador();
        
//lógica perder (si no quedan ataques y la vida del enemigo es mayor a 0)        
        if (this.energia === 0 && this.juego.bestia.vida > 0) {
          this.estado = 5;
        }
//lógica ganar (si quedan ataques y la vida del enemigo esta en 0)          
        else if (this.juego.bestia.vida <= 0) {
          this.estado = 4;
        }
        break;

      case 4:
        this.pantalla.ganador();
        break;

      case 5:
        this.pantalla.perdedor();
        break;
    }
  }

//método para resumir la logica de cambios de estados realizados por el uso de los distintos botones

  preguntaEstadoLogica(condicion, click, nuevoEstado) {
    if (condicion && click) {
      this.boton.sonidoBoton();
      this.estado = nuevoEstado;
    }
  }

  logicaAtras(estado) {
    let botonAtras = this.boton.delimitarBotones(400, 450, 500, 620);
    let sePuedeVolver = (estado === 1) || (estado === 2);
    this.preguntaEstadoLogica(sePuedeVolver, botonAtras, 0);
  }

  logicaJugar(estado) {
    let botonJugar = this.boton.delimitarBotones(360, 420, 250, 390);
    let sePuedeJugar = (estado === 0);
    this.preguntaEstadoLogica(sePuedeJugar, botonJugar, 3);
  }

  logicaCreditos(estado) {
    let botonCreditos = this.boton.delimitarBotones(420, 460, 160, 260);
    this.preguntaEstadoLogica(estado === 0, botonCreditos, 1);
  }

  logicaInstrucciones(estado) {
    let botonInstr = this.boton.delimitarBotones(420, 460, 380, 480);
    this.preguntaEstadoLogica(estado === 0, botonInstr, 2);
  }

  logicaReiniciar(estado) {
    let botonReiniciar = this.boton.delimitarBotones(400, 450, 250, 390);
    let sePuedeReiniciar = (estado === 4) || (estado === 5);

    if (botonReiniciar && sePuedeReiniciar) {
      this.reseteoVariables();
      this.preguntaEstadoLogica(sePuedeReiniciar, botonReiniciar, 0);
    }
  }

//método que activa los ataques su sonido y su movimiento cuando el juego esta siendo reproducido y se hace click
  mousePresionadoEnJuego(estado) {
    if (estado === 3 && this.energia > 0) {
      this.juego.wirt.ataque();
      sonidoLuz.play();
      this.energia -= 1;
    }
  }

//método que activa los botones al hacer click
  mousePresionado(estado) {
    this.logicaAtras(estado);
    this.logicaJugar(estado);
    this.logicaCreditos(estado);
    this.logicaInstrucciones(estado);
    this.logicaReiniciar(estado);
  }

//método que se llama en el mousePressed para hacer funcionar las interacciones
  interacciones() {
    this.mousePresionadoEnJuego(this.estado);
    this.mousePresionado(this.estado);
  }
}
