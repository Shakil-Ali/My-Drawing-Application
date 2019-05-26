// We have adapted this code from the https://p5js.org/examples/simulate-spirograph.html. We have added parts to make it suit our desired outcome, as well as function with our code. It uses trigonometric functions e.g. sine and cosine. As well as this we create and initialise many variables. In addition, we used a for loop and if statement to create the flower shape.
function Spiro(){
    
    //Sets the icon shown in the program and the name of the tool
    this.icon = "assets/spiro.jpg"
    this.name = "Spirograph"
    
    // Allows smooth transition while drawing as this starts at the previous mouse position
    var previousMouseX = -1;
	var previousMouseY = -1;
    
    // amount that can be done at once
    var NUMSINES = 2; 
    // an array to hold all the current angles
    var sines = new Array(NUMSINES); 
    // an initial radius value for the central sine
    var rad; 
    // a counter variable
    var i; 
    
    // the speed of the central sine
    var fund = 0.5; 
    // speed of the multiplier
    var ratio = 10; 
    // level of transparancy of the shape
    var alpha = 50;  
    
    // colour
    fillc = color(255,204,0,1); 
    
    // the radius of the circles
    rad = height/4; 
    
    for(var i = 0; i < sines.length; i++){
        sines[i] = PI;
    }
    
    this.draw = function(){
        
        if(mouseY > 0 && mouseX > 0 && mouseY < height){
            if(mouseIsPressed){
                // loads pixel data
                loadPixels(); 
                // sets no fill
                noFill();
                // makes the spirograph move to the position of the mouse. 
                translate(mouseX,mouseY);
                
                for(var i=0; i < sines.length; i++){
                    var erad = 0;
                    var radius = rad/(i + 3);
                    // rotates the circles
                    rotate(sines[i]); 
                    // sets stroke weight
                    strokeWeight(1);
                    // draws the ellipse
                    ellipse(0,0, 50);
                    translate(0,radius);
                    // allows rotation and movement of the individual circles making up the spirograph. 
                    sines[i] = (sines[i] + (fund + (fund * i * ratio)))%TWO_PI;
                }
                
                // updates the canvas
                updatePixels(0,0,0,0);
                loadPixels();
            }
            
            else{
                previousMouseX = -1;
                previousMouseY = -1;
            }
        }
    }

}