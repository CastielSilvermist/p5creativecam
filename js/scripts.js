// Global Variables

var vidcapture, ctracker, drawcanvas;

function setup() {

	var cnv = createCanvas(windowWidth/2, windowHeight/2)
	cnv.parent("mycanvas");

	//p5 method for creating video stream
	vidcapture = createCapture(VIDEO);
	vidcapture.size(vidcapture.width*2,vidcapture.height*3);
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
		
		stroke(0,0,255);

		position.forEach(function(pos) {
			ellipse(pos[0], pos[1], 2)

			//change color of stroke when head moves
			var g = map(position[5][0], 150, 300, 0, 255, true)
			var b = map(position[62][1], 150, 200, 0, 255, true)
			stroke(255, g , b)

		})
		
 


	}





}