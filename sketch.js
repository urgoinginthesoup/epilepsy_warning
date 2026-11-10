let sizes = [10, 100, 300]
function setup() {
  createCanvas(innerWidth, innerHeight);
  noStroke();
}

function draw() {
  background(random(255), random(255), random(255));
  for(let i = 0; i < 300; i++) {
    fill(random(255), random(255), random(100, 20))
    let diameter = random(sizes)
    let radius = diameter/2;
    let strokeChance = random(100)
    if (strokeChance < 33){
      stroke(160)
    } else if (strokeChance < 66){ 

    } else {

    }

// choose shape at random
    let shapeChance = random(100)
    if (shapeChance < 33) {
    circle(random(radius, width-radius), random(radius, height-radius), diameter);
    } else if (shapeChance < 66) {
      rect(random(0, width-diameter), random(0, height-diameter),
    diameter, radius)
    } else {

      // calculate center of triangle
      let x = random(width)
      let y = random(height)
      triangle(x-radius, y+radius, x, y-radius, x+radius, y+radius)
    }
}
}
