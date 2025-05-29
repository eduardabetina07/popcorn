let x;
let y;

function setup() {
  createCanvas(700, 700);
  x = random(400);
  x = int(x);
  y = random(400);
  y = int(y);
}

function draw() {
  background(148,0,211);
  let distanciaX;
  let distanciaY;
  let distancia;
  distanciaX = mouseX - x;
  distanciaY = mouseY - y;
  //distancia = sqrt(distanciaX*distanciaX + distanciaY*distanciaY);
  distancia = dist(mouseX,mouseY,x,y);
  fill(240,248,255)
  circle(mouseX, mouseY, distancia);
  //circle(x, y, 10);
  //console.log(distancia);

  if (distancia < 3) {
    text("Encontrei!", 400, 400);
    noLoop();
  }
}
