ACHIEVED:

In the current version of our drawing application we have included the following in addition to the existing tools:
- An eraser tool
- Spirograph (Unfinished)
- Rectangle tool
- Circle tool
- Triangle tool
- Stamp tool
- Text Tool (Unfinished - Need to add html code to make it only appear when text tool button is pressed)

We have also added new features:
- Slider (Need to turn into a global function, currently only used for the paintbrush)
- Load image (Partly - We have managed to make it work, however only once at a time, when the folder is within the directory)
_________________________________________

AIMS:

We aim to add more tools in the form of:
- Flood Fill
- Blur tool
- Background and Foreground colours.

Other aims:
- We need to finish thee 3 tools we have left to do, then start to comment all our code.
- Add CSS to our app to make it visually appealing.
- Add javascript widgets

__________________________________________

Over the past month we have been keeping upto date with our wiki page. We have also used comments efficiently to describe how we assesed our app and its functionability.

Here is our weekly progess update:

Week 1

New additions:
Eraser Button 
Rectangle/ellipse Tool
Flood fill
Undo/Redo Buttons
Stamp Tool

How we are going to share the work:
We will each make 1 tool per week, and then review at the end of each week. We will assess each others code and edit necessary adjustments. This will ensure our tools are functional.

Weekly breakdown:
Week 1 - Rectangle/ellipse tool (Name 1)
Week 2 - Eraser (Name 2)
Week 3 - Text Tool (Name 1)
Week 4 - Spirograph (Name 2)
Week 5 - Stamp Tool (Name1)
Week 6 - Change HTML/CSS for better paint display (Name 2)
Week 7 - Add JavaScript menu e.g. image import (Name 1)

Note: Name 1 and Name 2 are in the place where our names would have been.


Comments and personal assessment of week 1:
Week 1 Targets
Our week 1 target was to outline what we wanted to achieve. We used the project wiki to outline what we were planning to do over the next couple months. Every week, we set ourselves new targets and worked to accomplish them. Furthermore, we successfully created our plan and separated the tasks out equally.

________________________________________

Week 2

Completed:
- Rectangle Tool
- Ellipse Tool
- Triangle Tool
- Eraser (Unfinished - works, but need to turn it off when changing tools)

The shape tools were created by editing the existing line function, the code was changed to add ellipses, rectangles and triangles which are made when the user drags the mouse which then adapts the size.
The eraser was made by editing the existing freehand function the changing the colour to be equal to the colour of the background. 


Comments and personal assessment of week 2:
Our week 2 targets included making shape tools as well as an eraser.
- Rectangle Tool
- Ellipse Tool
- Triangle Tool
- Eraser
The shape tools were created by editing the existing line function, the code was changed to add ellipses, rectangles and triangles which are made when the user drags the mouse which then adapts the size.
The eraser was made by editing the existing freehand function the changing the colour to be equal to the colour of the background.  
Our week 2 target was to have working shape buttons. We achieved this target as we created rectangular, triangular and circular shape features. We assessed our work by taking turns to test if they worked. Also, we made sure to check whether it crashed, by constantly changing tools we were painting with, the re-selecting it. After, we came to the conclusion that our new tools were stable and functioning.

_________________________________________

Week 3 

This week we completed:
- Paintbrush tool
- Stamp Tool

Similar to the shape tools, we used the free-hand drawing tool to create the paintbrush and stamp tool. The paintbrush was exactly the same as the free-hand tool, however, we had to edit the code, so the user can choose the size of the brush. We did this by creating a slider. The stamp tool started out as the line drawing tool. Although, we edited the code so that it took an image instead of shape. We used a star image as the stamp.


Comments and personal assessment of week 3:
Week 3 Targets
Week 3 targets included making a paintbrush and stamp tool.
We assessed how well they worked, by taking turns to test each tool. We found that they were robust and had no bugs. We concluded that they were functioning.

__________________________________________

Week 4

This week we completed:
- Spirograph 
- Text Tool
- Slider for Paintbrush Tool

The Spirograph was so far the hardest tool to create. *Insert method*. The text tool is a unique tool we made, which was not on the list of ideas on the VLE. We decided to make it, as it is commonly seen and used on editing and paint applications. It required a variable input and we had to insert the p5.dom library. Similarly for the slider, we needed the p5.dom library and the createSlider() function was used. After giving it a range, we simply replace the hard coded paint brush size, to the slider. This now meant the user can choose the thickness of the brush.


Comments and personal assessment of week 4:
Our week 4 targets were to make a functioning Spirograph.
We accomplished our week 4 target, as we made a Spirograph tool. We confirmed it worked without fail by using it several times. We used our method of taking turns continuously, and changing the way we used the tool. In conclusion, we found that it operating. Furthermore, we may in future try to include an options button, to allow the user to choose how many circles are drawn.

___________________________________________

Week 5

This week we completed:
- Basic CSS
- Drew out a desired look for our drawing app

We started the CSS for our app. Before we started any code, we just made sure we knew which css codes were responsible for which elements. Then we decided to change the name of the app, as well as the original base colours. In addition, we have changed the shape of our colour palette, from squares to circles. As well as this, the highlighted colour has got a white outline now instead of blue, which is helping us get closer to achieving our desired look.


Comments and personal assessment of week 5:
We have just started our css. Changed the options highlight colour, and changed the shape of the tools images. In addition, we made the colour palette circular, as well as giving the selected colour a white outline.

______________________________________________


Additional comments from us to you:
- Most of the tools we made have been adapted from previous code, and new comments made to go with them. We believe that this allows our code to be readable. In addition, new variables we have made, for e.g. in sketch.js we made variables input and slider. We have used comments to outline why they are being made, i.e. to create a type of input or a slider.
- We have tried to keep our code as well structured as possible. Because most of our tools have been adapted from each other, we believe they are 'clean' and clear.
- All the tools we have made are constructor functions. This allows code to be easily reused and reduces the amount of code on each js file.
- The hardest tool to create was the spiorgraph. We searched many videos and websites and had to adapt many codes to make it function. We eventually, got it to work. The next step we want to take, is to improve our slider feature, so it can work with tools other than the paintbrush.
- We have both taken the time out to make sure our code is stable and doesn't crash. We initially found we had many failures with the right tools not being selected, or when we selected a tool, an error message appeared. As a result, we made sure to fix these errors and now our app is much more stable.
- Futhermore, although we have almost finished our app in terms of tools created, we still need to finish our html and css to make it appear  more like an original drawing application. We plan to finish our drawing application in the next week, with all the tools and visual features finished.
- Most ultimately, we have tried to create this README to the best of our ability, in order to help give you, the marker, the best insight into what we have/want to achieve.

