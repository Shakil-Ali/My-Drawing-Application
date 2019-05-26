// Eraser tool: based on free-hand drawing tool
// We created this tool similar to the free hand tool. We changed the strokeWeight to make it a bit more thick. We also set the fill to white. This gave the effet of an eraser.
function Eraser(){

    // sets the icon shown in the program and the name of the tool
    this.icon = "assets/eraser.jpg"
    this.name = "eraser"
    
    // initialise variables
    var previousMouseX = -1;
	var previousMouseY = -1;

    // draw function
	this.draw = function(){
		//if the mouse is pressed
		if(mouseIsPressed){
			// stroke makes the color match the background
			if (previousMouseX == -1){
                // assigning new values
				previousMouseX = mouseX;
				previousMouseY = mouseY;
                // sets stroke colour
                stroke(255);
                // sets stroke weight
                strokeWeight(10);
			}
			// if we already have values for previousX and previousY we can draw a line from there to the current mouse location
			else{
				// draws the line
                line(previousMouseX, previousMouseY, mouseX, mouseY);
				previousMouseX = mouseX;
				previousMouseY = mouseY;
			}
		}
		//if the user has released the mouse we want to set the previousMouse values back to -1
		else{
			previousMouseX = -1;
			previousMouseY = -1;
		}
	};
    
}
