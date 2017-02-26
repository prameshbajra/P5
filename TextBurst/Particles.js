 function Particles(x, y) {
     this.place = createVector(x, y);
     this.target = createVector(x, y);
     this.veloc = p5.Vector.random2D();
     this.accler = createVector();
     this.r = 8;
 }

 Particles.prototype.update = function () {
     this.place.add(this.veloc);
     this.veloc.add(this.acceler);
 }

 Particles.prototype.show = function () {
     stroke(255);
     strokeWeight(7);
     point(this.place.x, this.place.y);
 }