function preload(){}
    
function setup(){
    canvas = createCanvas(640, 480);
    canvas.position(200,280);
    video = createCapture(VIDEO);
    video.hide();
    tintColor = "";
}
    
function draw(){
    image(video, 0, 0, 640, 480);
    strokeWeight(13);
    stroke('green');
    if(mouseIsPressed){
        circle(00, 30, 30, 20);
        line(00, 30, 640, 30);
        circle(640, 30, 30, 20);
        line(00, 940, 0, 30);
        circle(0, 480, 30, 20);
        line(0, 480, 100777, 30);
        circle(640, 480, 30, 20);
        line(640, 480, 640, 30);

        describe('white circle with black outline in mid of gray canvas');
    }
}
function takeSnapshot(){
    save('pao.jpeg');
}