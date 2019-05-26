// Triangle tool: based on free-hand drawing tool
// A tool for drawing triangles to the screen. Allows the user to preview the triangle to the current mouse position before drawing the triangle to the pixel array.  We edited it so that instead of the line function, we would be drawing a triangular shape. The shape is made from one corner. This made it look more professional as well as more convenient for the user. At the bottom, we understood and edited code from the mirror tool. This allows the user to have the option of no fill. However, we were unable to make it toggle.
function TriangleToTool(){
    
    // sets an icon and name for the stamp tool
	this.icon = "assets/triangleTool.jpg";
	this.name = "triangleTool";

	// initialises variables
    var startMouseX = -1;
	var startMouseY = -1;
	var drawing = false;

	// draw funtions
	this.draw = function(){

		// only draw when mouse is clicked
		if(mouseIsPressed){
			// if it's the start of drawing a new triangle
			if(startMouseX == -1){
				// assigning new values
                startMouseX = mouseX;
				startMouseY = mouseY;
                // sets drawing to true
				drawing = true;
				// save the current pixel Array
				loadPixels();
			}

			else{
				// update the screen with the saved pixels to hide any previous triangle between mouse pressed and released
				updatePixels();
                // sets the stroke weight
                strokeWeight(1);
                // draws the triangle
				triangle(startMouseX, startMouseY, mouseX, startMouseY, startMouseX-((startMouseX - mouseX)/2), mouseY);
			}

		}

		else if(drawing){
			//save the pixels with the most recent triangle and reset the drawing bool and start locations
			loadPixels();
            // sets the stroke weight
            strokeWeight(1);
            // draws the triangle
            triangle(startMouseX, startMouseY, mouseX, startMouseY, startMouseX-((startMouseX - mouseX)/2), mouseY);
            // sets drawing to false
			drawing = false;
			startMouseX = -1;
			startMouseY = -1;
		}
	};
    
    
    
    
    // function for unselecting the tool after user clicks another tool (adapted from the mirror tool)
    this.unselectTool = function(){
        // updates the backing canvas for this image with the contents of the pixels array
		updatePixels();
		//clear options
		$(".options").html("");
	};

    
	//adds a no fill button and click handler to the options area
    this.populateOptions = function(){
        // creates the no fill button
        $(".options").html("<button id='nofill'>No Fill</button>");
		//click handler
		$("#nofill").on("click", function(){
            // sets no fill
			noFill();
		});
	};
    


    
}