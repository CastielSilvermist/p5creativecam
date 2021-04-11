# NMED 3720 Assignment 3 | P5 Creative Webcam Filter

## Dotted Ghost Trail 
### By Jorinda Becker 

This filter was created using clmtrackr and P5 JavaScript. It is a completely experimental Webcam filter as I explore p5js for the first time. 

Clmtrackr tracks over seventy points on the face, each of which can be altered as desired.
My goal was to simply show each point that the tracker uses and have the colors change from white to pink when the users head moves to the right, 
and white to yellow as the user moves their head up. The points are all shaped as squares. 
The movement also has a fade effect applied. Depending on the users monitor, this fading trail effect leaves traces on the canvas, adding to the ghostly effect.

If the user wears glasses, it is best to remove them when using the filter, or else the tracker will glitch out. It cannot seem to deal with anything covering the eyes. 
I decided to hide the users’ video feed from the webcam, so that the focus was completely on the canvas and the data points which are shaped as squares. 

## Resources:

1. [clmtracker](https://github.com/auduno/clmtrackr)
2. [P5 JavaScript](https://p5js.org/) 
