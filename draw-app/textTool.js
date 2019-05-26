// Text tool: based on free-hand drawing tool
// Created variable input. Then this created a tool box, which we edited with css to fit in the options area. Next, we replaced the line function with the input value, this allowed the user to add text to the canvas.
function TextTool() {

    // This sets an icon and a name for the object
	this.icon = "assets/texttool.jpg";
	this.name = "textTool";

    // create input variable
    var input;
    // To smoothly put the text on screen we'll print it from the previous mouse location to the current mouse location. The following values store the locations from the last frame. They are -1 to start with because we haven't started printing the text yet. 
    // initialise variables
	var previousMouseX = -1;
	var previousMouseY = -1;
    
    // draw function
	this.draw = function(){
		// if the mouse is pressed
		if(mouseIsPressed){
			// check if they previousX and Y are -1. set them to the current mouse X and Y if they are.
			if (previousMouseX == -1){
                // assigns new values
				previousMouseX = mouseX;
				previousMouseY = mouseY;
			}
            
			// if we already have values for previousX and Y we can draw the inputted from there to the current mouse location
			else{
                // sets stroke weight 
                strokeWeight(0.5);
                // creates text input box
                text(input.value(), mouseX, mouseY, 200, 200);
                previousMouseX = mouseX;
				previousMouseY = mouseY;
			}
		}
		// if the user has released the mouse we want to set the previousMouse values back to -1.
		else{
			previousMouseX = -1;
			previousMouseY = -1;
		}
	};    
    
    
     // function to make text appear when text tool clicked
     this.populateOptions = function() {
        // Input text box
        input = createInput('');
        // sets position of the box
        input.position(620, 610);
    };
    
    
}