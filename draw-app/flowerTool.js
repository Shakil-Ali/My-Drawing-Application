// Flower tool: based on free-hand drawing tool
// This tool was made on the free-hand tool. However, we edited it to get the flower shape. We used the functions beginShape(), endShape() and vertex(). Also, the for loop makes the actual flower shape, utilising the trigonomtreic functions sine and cosine. 
function FlowerTool() {
    
    // sets the icon shown in the program and the name of the tool
    this.name = "flowerTool";
	this.icon = "assets/flowerTool.jpg";
    
    // initialise variables
    var previousMouseX = -1;
	var previousMouseY = -1;
    
    // draw function
    this.draw = function(){
		//if the mouse is pressed
		if(mouseIsPressed){
			//check if they previousX and Y are -1. set them to the current mouse X and Y if they are.
			if (previousMouseX == -1){
                // assings new values
				previousMouseX = mouseX;
				previousMouseY = mouseY;
			}
            
			//if we already have values for previousX and previousY we can draw a flower shape from there to the current mouse location
			else{
                // translates flower to mouse position
                translate(mouseX, mouseY);
                // sets stroke weight
                strokeWeight(4);
                // selects fill colour (in this case the variable fillc)
                fillc;
                // starts drawing the points
                beginShape();
                for (var a = 0; a < TWO_PI; a+= 0.02) {
                    var r = 100 * cos(7*a);
                    var x = r * cos(a);
                    var y = r * sin(a);
                    vertex(x, y);
                }
                endShape(CLOSE);
                previousMouseX = mouseX;
				previousMouseY = mouseY;
			}
		}
		//if the user has released the mouse we want to set the previousMouse values back to -1.
		else{
			previousMouseX = -1;
			previousMouseY = -1;
		}
	};
    
    
}