function preload() {}

function setup() {
    canvas = createCanvas(450, 350);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(445, 345);
    video.hide();
}

function draw() {
    image(video, 10, 10, 430, 330)
}

function Snapshot() {
    save("mySelfie.png");
}