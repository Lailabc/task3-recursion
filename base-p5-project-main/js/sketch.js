// tutorial starting point https://www.youtube.com/watch?v=-3HwUKsovBE&t=61s

function setup() {
    createCanvas(windowWidth, windowHeight)
    angleMode(DEGREES)
    noLoop()
}
function draw() {
    background(100)
    translate(width / 2, height / 2+200)
    branch(100)
}

function branch(length) {
    //The push() function saves the current drawing style settings and transformations, while pop() restores these settings. They are always used together.
    push()
    if (length > 10) {
        strokeWeight(map(length,10,100,1,15))
        stroke(70,40,20)

        //syntax--> line(x1,y1,x2,y2); 'length' should be negative in order for the tree to turn up and right direction
        line(0, 0, 0, -length)
        //The x parameter specifies left/right translation, the y parameter specifies up/down translation.
        //translate to the end of the branch
        translate(0, -length)
        rotate(random(-20,-30))
        //call function inside of itself- recursive 
        branch(length * random(0.7, 0.9))
        //in order to rotate the second branch 30 degrees the opposite way, we have to rotate -60 degrees
        rotate(random(50,60))
        branch(length * random(0.7, 0.9))
    } else{
        // if length isn't bigger than 10, we will add a leave instead of a branch
        //random shades of green so it looks more natural
        let r = 80 + random(-20,20)
        let g = 120+ random(-20,20)
        let b = 40 + random(-20,20)
        // z component of fill makes it transparent
        fill(r,g,b,150)
        noStroke()
        // ellipse(0,0,10)
        //instead of using ellipse, lets create a more realistic shape
        beginShape()
        //if i went from 0 to 360, it would draw a full circle. but instead it only draws part of it
        for(let i=45; i<135; i++){
            let rad = 15
            let x= rad * cos(i);
            let y=rad * sin(i);
            vertex(x,y)
        }
        //let's create the other half of the circle in the opposite direction(y should be negative)
        for(let i=135; i>40; i--){
            let rad = 15
            let x= rad * cos(i);
            //offset y by 20
            let y=rad * sin(-i)+20;
            vertex(x,y)
        }
        endShape(CLOSE)
    }
    pop()
}