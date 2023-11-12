//car class
class Car {
    constructor(x, y, width, height) { //constractor take 4 artument paramitter x coordinate, y coordinate, width, and height of car
        //we store our paramitter to local property
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;


        this.speed = 0;
        this.acceleration = 0.2;
        this.maxSpeed = 4;
        this.friction = 0.05;

        //thas Draw() method just dras reatangle 100px x, and 100px y coordinate. with 20px width and 30px height from constructor 
        //so we neew a controls
        // all method and property are defined into controls() class hold on controls.js file
        this.control = new Controls();

    }


    //Update method. update the car position according to updating controls() class paramitter when we pressed the key form keyboard
    //to make this update mehtod word. we have to loop over and over this method. so animate function into main.js file
    Update() {
        if (this.control.forward) {
            // this.y -=2; 
            this.speed += this.acceleration;
        }
        if (this.control.reverse) {
            // this.y += 2;
            this.speed -= this.acceleration;
        }
        if (this.speed > this.maxSpeed) {
            this.speed = this.maxSpeed;
        }
        if (this.speed < -this.maxSpeed / 2) {
            this.speed = -this.maxSpeed / 2;
        }
        if (this.speed > 0) {
            this.speed -= this.friction;
        }
        if (this.speed < 0) {
            this.speed += this.friction;
        }

        if (Math.abs(this.speed) < this.friction) {
            this.speed = 0;
        }
        this.y -= this.speed;

    }

    //car have a draw method.  to draw the car into canvas. Draw method also take an arguement ctx which is references to canvas 20 context
    Draw(ctx) {
        ctx.beginPath();
        ctx.rect(
            this.x - (this.width / 2),
            this.y - this.height / 2,
            this.width,
            this.height
        );
        ctx.fill();
    }
}