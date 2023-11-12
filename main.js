// get the canvas Element. and set it height and width 
const canvas = document.getElementById('carCanvas');
canvas.width = 250; //canvas width 250px


//get the 2D Drowing context to draw the car;
const ctx = canvas.getContext("2d");

//create a new object for the car. car take x position, y position, width and height
const road = new Road(canvas.width / 2, canvas.width);
const car = new Car(canvas.width / 2, 100, 20, 30);

animate()

function animate() {
    canvas.height = innerHeight; //canvas height to innerheight 100vh;
    car.Update();
    road.Draw();
    car.Draw(ctx);
    requestAnimationFrame(animate)
    // requestAnimationFrame loop over and over in a second.
}
console.log(road.getLineCenter(0));