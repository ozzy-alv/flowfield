let particles = [];
let particleMin = 0;
let particleMax = Infinity;
let noiseScale = 0.01;

const canvasWidth = innerWidth;
const canvasHeight = innerHeight;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  background(0);
  frameRate(60);
}

function draw() {
  background(0, 10);
  //inserting particles
  if (particleMin < particleMax)
    particles[particleMin++] = new Particle(
      random(canvasWidth),
      random(canvasHeight)
    );

  for (let i = 0; i < particleMin; i++) {
    particles[i].update();
    particles[i].show();
  }
}
//Changing particle direction
function mouseReleased() {
  noiseSeed(millis());
}
//Making particles
class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.show = function () {
      fill("red");
      ellipse(this.x, this.y, 3, 3);
    };
    this.update = function () {
      //drawing a vector matrix
      let n = noise(this.x * noiseScale, this.y * noiseScale);
      let ang = TAU * n;
      this.x += cos(ang);
      this.y += sin(ang);
    };
  }
}
