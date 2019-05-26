// global variables that will store the toolbox colour palette and the helper functions
var toolbox = null;
var colourP = null;
var helpers = null;
// variable for the slider 
var slider; 
// This variable is set for my stamp tool image
var img; 
// Dropzone variabe
var dropzone; 


// This is to load my stamp image
function preload() {
    img = loadImage("assets/starStamp.jpg");
}    


function setup() {    
    //create a canvas to fill the content div from index.html
    canvasContainer = $('#content');
    var c = createCanvas(canvasContainer.innerWidth(), canvasContainer.innerHeight());
    c.parent("content");

   //create helper functions and the colour palette
    helpers = new HelperFunctions();
    colourP = new ColourPalette();
    
    //create a toolbox for storing the tools
    toolbox = new Toolbox();
    
    //add the tools to the toolbox. 
    toolbox.addTool(new FreehandTool());
    toolbox.addTool(new PaintBrushTool());
    toolbox.addTool(new LineToTool());
    toolbox.addTool(new TriangleToTool());
    toolbox.addTool(new RectToTool());
    toolbox.addTool(new Spiro());
    toolbox.addTool(new SprayCanTool());
    toolbox.addTool(new EllipseToTool());
    toolbox.addTool(new Eraser());
    toolbox.addTool(new StampTool());
    toolbox.addTool(new FlowerTool());
    toolbox.addTool(new CustomShapeTool());
    toolbox.addTool(new TextTool());
    toolbox.addTool(new mirrorDrawTool());
    background(255);
    
    
    // image file input code
    dropzone = select('#dropzone');
    dropzone.drop(gotFile);
    
}


// functions for the drag drop images
function gotFile(file) {
    // initialise local variable drop_img
    var drop_img = createImg(file.data);
    image(drop_img, 0, 0, width, height);
    drop_img.hide();
    
}

// draw function
function draw() {    
    //call the draw function from the selected tool. hasOwnProperty is a javascript function that tests if an object contains a particular method or property if there isn't a draw method the app will alert the user
	if(toolbox.selectedTool.hasOwnProperty("draw")){
    	toolbox.selectedTool.draw();
	}
	else{
		alert("it doesn't look like your tool has a draw method!");
	}
}


// Try-catch handle errors (made only for our tools)
try {
    PaintBrushTool("This is typed bad");
    LineToTool("This is typed bad");
    TriangleToTool("This is typed bad");
    RectToTool("This is typed bad");
    Spiro("This is typed bad");
    EllipseToTool("This is typed bad");
    Eraser("This is typed bad");
    StampTool("This is typed bad");
    FlowerTool("This is typed bad");
    CustomShapeTool("This is typed bad");
    TextTool("This is typed bad");
}

catch(e) {
    e = "This error occurred: \n" + e
}

