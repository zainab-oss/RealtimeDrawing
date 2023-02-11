noseX = 0;
noseY = 0;
difference = 0;
rightWristX = 0;
leftWristX = 0


function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 400);
    canvas.position(600,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw()
{
    background('#FFD580');
    document.getElementById("square_side").innerHTML = "The Width nad Height of the Square is " + difference + "px";
    fill('#800000');
    stroke('#ffbc34');
    square(noseX, noseY, difference);
}

function modelLoaded()
{
    console.log('poseNet is initialised');
}

function gotPoses(results)
{
    if (results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX + "And noseY = " + noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("leftWrist = " + leftWristX + "rightWrist = " + rightWristX + "difference = " + difference);
    }
}