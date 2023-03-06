
function setup() {
    createCanvas(windowWidth, windowHeight)
    angleMode(DEGREES)
    // noLoop()
}
function draw() {
    background(227, 180, 200)
    translate(width / 2, height / 2+300)
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
        rotate(mouseX*2,mouseY*2)
        //call function inside of itself- recursive 
        branch(length *0.7)
        //in order to rotate the second branch 30 degrees the opposite way, we have to rotate -60 degrees
        rotate(mouseX,mouseY)
        branch(length*0.7)
    } else{
        // if length isn't bigger than 10, we will add a leave instead of a branch
        //random shades of the same colour so it looks more natural
        let r = 168 
        let g = 50 
        let b = 133 
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