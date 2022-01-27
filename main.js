canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

Rover_width=100;
Rover_height=90;
Rover_x=10;
Rover_y=10;

NASA_Images_array=["mars.jpg","Mars_1.jpg", "Mars_2.jpg", "Mars_3.jpg", "Mars_4.jpg"];
Random_Number=Math.floor(Math.random()*5)
background_image=NASA_Images_array[Random_Number];
rover_image="rover.png";

function add(){
    background_imgtag=new Image();
    background_imgtag.onload=uploadbackground;
    background_imgtag.src=background_image;

    rover_imgtag=new Image();
    rover_imgtag.onload=uploadrover;
    rover_imgtag.src=rover_image;

}

function uploadbackground(){
    ctx.drawImage(background_imgtag,0,0,canvas.width,canvas.height)
}
function uploadrover(){
    ctx.drawImage(rover_imgtag,Rover_x,Rover_y,Rover_width,Rover_height)
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e) {
    keypressed=e.keyCode;
    console.log(keypressed);
    if(keypressed==65){
        console.log("left");
        left()
    }
    if(keypressed==87){
        console.log("up");
        up()
    }
    if(keypressed==68){
        console.log("right");
        right()
    }
    if(keypressed==83){
        console.log("down");
        down()
    }
}
function left() {
    if(Rover_x>0) {
        Rover_x=Rover_x-10;
        uploadbackground();
        uploadrover();
    }
}

function right() {
    if(Rover_x<700) {
        Rover_x=Rover_x+10;
        uploadbackground();
        uploadrover();
        console.log("Rover_x="+Rover_x);
    }
}

function up() {
    if(Rover_y>0) {
        Rover_y=Rover_y-10;
        uploadbackground();
        uploadrover();
        console.log("Rover_y="+Rover_y);
    }
}

function down() {
    if(Rover_y<510) {
        Rover_y=Rover_y+10;
        uploadbackground();
        uploadrover();
        console.log("Rover_y="+Rover_y);
    }
}