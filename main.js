canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
rover_width = 100;
rover_height = 90;



background_image = "mars.jpg";

rover_image = "rover.png";

rover_x = 10;
rover_y = 10;

function add() {


background_image = new Image();
background_imgTag.onload = uploadBackground;
background_imgTag.src = background_image;


rover_imgTag = new Image();
rover_imgTag.onload = uploadrover;
rover_imgTag.onload = rover_image;

    }


    function uploadBackground() {

        ctx.drawImage(background_imgTag,0, 0, canvas.width, canvas.height);
    }

    function uploadrover() {
        ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
    }



function my_keydown(e)

{

    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == "38")
    {
        up();
        console.log ("arriba");
    }
    if(keyPressed == "40")
    {
          down();
          console.log("abajo");

    }
    if (keyPressed == "37")
    {
        left();
        console.log("izquierda");
    }
    if (keyPressed == "39")
    {
        right();
        console.log("derecha");
    }
}


function up()
{

}

function down()
{
    
}


function right()
{
    
}



function left()
{
    
}




