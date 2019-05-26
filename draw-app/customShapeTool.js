// Custom shape tool: based on free-hand drawing tool
// This tool creates curved lines, which allows the user to make their own desired shapes. We created it based on the free-hand tool. Instead of line, we used functions beginShape(), endshape() and curveVertex().
function CustomShapeTool() {
    
// This sets an icon and a name for the object
this.icon = "assets/custom.jpg"
this.name = "customShapeTool";

// initialising variables
var startMouseX = -1;
var startMouseY = -1;
var drawing = false;

	// draw function
	this.draw = function(){

		//only draw when mouse is clicked
		if(mouseIsPressed){
			//if it's the start of drawing a new curve
			if(startMouseX == -1){
                // assigning new values 
				startMouseX = mouseX; 
				startMouseY = mouseY;
                // set drawing to true
				drawing = true;
				// save the current pixel Array
				loadPixels();
			}

			else{
				// update the screen with the saved pixels to hide any previous curve between mouse pressed and released
				updatePixels();
                // sets the stroke weight of the curve
                strokeWeight(1); 
                // turns fill off
                noFill();
                // begins drawing the curve
                beginShape(); 
                // the following curveVertex sets the points of our curved line
                curveVertex(mouseX - 200, mouseY - 200); 
				curveVertex(mouseX, mouseY);
                curveVertex(startMouseX, startMouseY);
                curveVertex(mouseX - 200, mouseY - 200);
                // ends drawing the curve
                endShape();
			}

		}

		else if(drawing){
			// save the pixels with the most recent curve and reset the drawing bool and start locations
			loadPixels();
            // sets drawing to false
			drawing = false;
			startMouseX = -1;
			startMouseY = -1;
		}
	};
    
    
}