// A tool for drawing rectangles to the screen. Allows the user to preview the rectangle to the current mouse position before drawing the rectangle to the pixel array.  We edited it so that instead of the line function, we would be drawing a rectangular shape. We used rectMode(CORNERS) in order to get the rectangle to be made from the centre. This made it look more professional as well as more convenient for the user. At the bottom, we understood and edited code from the mirror tool. This allows the user to have the option of no fill. However, we were unable to make it toggle.
// Rectangle tool: based on free-hand drawing tool
function RectToTool(){
    
    // this sets an icon and a name for the object
	this.icon = "assets/rectTool.jpg";
	this.name = "rectTool";

    // initialises the variables
	var startMouseX = -1;
	var startMouseY = -1;
	var drawing = false;

	// draw function 
	this.draw = function(){

		// only draw when mouse is clicked
		if(mouseIsPressed){
			// if it's the start of drawing a new rectangle
			if(startMouseX == -1){
                // assigns new variables 
				startMouseX = mouseX;
				startMouseY = mouseY;
                // sets the stroke weight
                strokeWeight(1);
                // sets rectMode to CORNERS
                rectMode(CORNERS);
                // sets drawing to true
				drawing = true;
				//save the current pixel Array
				loadPixels();
			}

			else{
				// update the screen with the saved pixels to hide any previous rectangle between mouse pressed and released
				updatePixels();
				// sets the stroke weight
                strokeWeight(1);
                // draw the rectangle
				rect(startMouseX, startMouseY, mouseX, mouseY);
			}

		}

		else if(drawing){
			// save the pixels with the most recent rectangle and reset the drawing bool and start locations
			loadPixels();
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
