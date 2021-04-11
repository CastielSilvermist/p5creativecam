// Global Variables

var vidcapture, ctracker, drawcanvas;

function setup() {

	var cnv = createCanvas(windowWidth/2, windowHeight/2)
	cnv.parent("mycanvas");

	//p5 method for creating video stream
	vidcapture = createCapture(VIDEO);
	vidcapture.size(vidcapture.width*3,vidcapture.height*3.5);
	vidcapture.hide() //hide original video capture.

	//start tracker
	ctracker = new clm.tracker()
	ctracker.init();
	ctracker.start(vidcapture.elt)

}

function draw() {
	
	background(0, 15) //drawing fades as you move
	translate(vidcapture.width, 0)
	scale(-1, 1) 

	var position = ctracker.getCurrentPosition();

	if (position) {
		
		stroke(255,0,255);

		position.forEach(function(pos) {
			ellipse(pos[0], pos[1], 2)

			//change color of stroke when head moves
			var g = map(position[33][0], 250, 300, 0, 255, true)
			var b = map(position[33][1], 100, 255, 0, 255, true)
			stroke(255, g , b)

		})
		
 


	}





}