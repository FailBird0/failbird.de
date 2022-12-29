"use strict";

class Canvas {
  /**
   * @param {HTMLCanvasElement} HTMLCanvas The Canvas
   */
  constructor(HTMLCanvas) {
    this.C = HTMLCanvas;
    this.CTX = this.C.getContext("2d");
    this.C.width = window.innerWidth;
    this.C.height = window.innerHeight;

    this.C.style.backgroundColor = "#1b1b1b";

    this.theta = 0;   // Angle of Ball Offset in rad

    this.ball = {
      x: null,
      y: null,
      // null sounds cool tbh

      offset: 150,    // Offset from Center of Screen
      color: "#fff",
      size: 6,
    }

    setInterval(() => { this.update() }, 15);
  }
  update() {
    this.theta += 0.025;

    this.ball.x = this.C.width  / 2 + this.ball.offset * Math.cos(this.theta);
    this.ball.y = this.C.height / 2 + this.ball.offset * Math.sin(this.theta);

    this.draw();
  }
  draw() {
    // this.CTX.clearRect(0, 0, this.C.width, this.C.height);
    this.CTX.fillStyle = "#1b1b1b40";
    this.CTX.fillRect(0, 0, this.C.width, this.C.height);

    this.CTX.beginPath();
    this.CTX.arc(
      this.ball.x, this.ball.y,
      this.ball.size,
      0, Math.PI * 2
    );
    this.CTX.fillStyle = this.ball.color;
    this.CTX.fill();
    this.CTX.closePath();
  }
}

new Canvas( document.querySelector("#canvas") );