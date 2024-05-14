var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

var canvas_width = canvas.getBoundingClientRect().width;
var canvas_height = canvas.getBoundingClientRect().height;

var horizontal_movement = 1.0;
var vertical_movement = 1.0;

var square = {
    x: 0.0,
    y: 0.0,
    width: 64.0,
    height: 64.0
};

function Update()
{
    square.x += horizontal_movement;
    square.y += vertical_movement;

    if (square.x + square.width > canvas_width)
    {
        horizontal_movement = -1.0;
    }
    else if (square.x < 0)
    {
        horizontal_movement = 1.0;
    }

    if (square.y + square.height > canvas_height)
    {
        vertical_movement = -1.0;
    }
    else if (square.y < 0)
    {
        vertical_movement = 1.0;
    }
}

function Render()
{
    context.clearRect(0, 0, canvas_width, canvas_height);

    context.fillStyle = "black";
    context.fillRect(0, 0, canvas_width, canvas_height);

    context.fillStyle = "white";
    context.fillRect(square.x, square.y, square.width, square.height);
}

function MainLoop()
{
    Update();
    Render();

    window.requestAnimationFrame(MainLoop);
}

window.requestAnimationFrame(MainLoop);