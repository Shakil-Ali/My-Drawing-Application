// Paintbrush tool: based on free-hand drawing tool
// This tool was made using the free-hand drawing tool. However, we changed it by creating a slider. This slider changes the width of the tip of the brush. Therefore, the user can choose how big or small they want the brush to be. We did this by assigning the argument for the strokeWeight as slider.value().
function PaintBrushTool(){
    
	// this sets an icon and a name for the object
	this.icon = "assets/paintbrushtool.jpg";
	this.name = "paintBrushTool";
    
    // slider initialised 
    slider = createSlider(10, 100, 2);
    slider.position(620, 570);
    slider.style('width', '80px');

	// to smoothly draw we'll draw a line from the previous mouse location to the current mouse location. The following values store the locations from the last frame. They are -1 to start with because we haven't started drawing yet.
	var previousMouseX = -1;
	var previousMouseY = -1; 

    // draw function
	this.draw = function(){
		//if the mouse is pressed
		if(mouseIsPressed){
			//check if they previousX and Y are -1. set them to the current mouse X and Y if they are.
			if (previousMouseX == -1){
                // assigning new values
				previousMouseX = mouseX;
				previousMouseY = mouseY;
                // sets the stroke weight to the value of the slider
                strokeWeight(slider.value());
			}
            
			// if we already have values for previousX and previousY we can draw a line from there to the current mouse location
			else{
                // draws the line
				line(previousMouseX, previousMouseY, mouseX, mouseY);
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