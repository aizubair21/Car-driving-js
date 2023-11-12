// get the canvas Element. and set it height and width 
const canvas = document.getElementById('carCanvas');
canvas.width = 250; //canvas width 250px
canvas.height = innerHeight; //canvas height to innerheight 100vh;


//get the 2D Drowing context to draw the car;
const ctx = canvas.getContext("2d");

//create a new object for the car. car take x position, y position, width and height
const car = new Car(100, 100, 20, 30);
car.Draw(ctx);