song1="";
song2 ="";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
scoreLeftWrist = 0;
scoreRightWrist = 0;

function preload()
{
    song1 = loadSound("music1.mp3");
    song2 = loadSound("music2.mp3");
}


function setup(){
    canvas = createCanvas(600,500);
    canvas.position(400,300);
    video = createCapture(VIDEO);
    video.hide();
  
}

function modelLoaded()
{
    console.log("PoseNet is Initialized");
}

function draw()
{
    image(video,0,0,600,500);
  stroke("#ff3db1");
  fill("#ff3db1");


    if(scoreLeftWrist > 0.2){

        circle(LeftWristX,LeftWristY,20);
         song2.stop();
       
    }
    
        if (song1 == false)
        {
         song1.play();
         document.getElementById("play_song").innerHTML="Song Name = " + "Harry Potter Theme";
        }

    if(scoreRightWrist > 0.2){

            circle(RightWristX,RightWristY,20);
             song1.stop();
           
        }
        
            if (song2 == false)
            {
             song2.play();
             document.getElementById("play_song").innerHTML="Song Name = " + "Unstoppable";
            }
}

