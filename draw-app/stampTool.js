// Stamp tool: based on free-hand drawing tool
// Initialised image first in variable 'img'. Also loaded it in the preload function in the sketch.js file. This then allowed us to replace the line() function from the free-hand tool and add the star image using the function image().
function StampTool(){
	
    // sets an icon and name for the stamp tool
	this.icon = "assets/stampTool.jpg";
	this.name = "stampTool";

	// To smoothly stamp we'll stamp from the previous mouse location to the current mouse location. The following values store the locations from the last frame. They are -1 to start with because we haven't started stamping yet.
    // initialise variables
	var previousMouseX = -1;
	var previousMouseY = -1;

    // draw function
	this.draw = function(){
		//if the mouse is pressed
		if(mouseIsPressed){
			// check if they previousX and previousY are -1. set them to the current mouse X and Y if they are.
			if (previousMouseX == -1){
                // assigning new values
				previousMouseX = mouseX;
				previousMouseY = mouseY;
			}
            
			// if we already have values for previousX and previousY we can draw a line from there to the current mouse location
			else{
				// use the image we have loaded
                image(img, mouseX, mouseY, 25, 25);
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