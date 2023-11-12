//car class
class Car {
    constructor(x, y, width, height) { //constractor take 4 artument paramitter x coordinate, y coordinate, width, and height of car
        //we store our paramitter to local property
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        //thas Draw() method just dras reatangle 100px x, and 100px y coordinate. with 20px width and 30px height from constructor 
        //so we neew a controls
        // all method and property are defined into controls() class hold on controls.js file
        this.control = new Controls();

    }

    //car have a draw method.  to draw the car into canvas. Draw method also take an arguement ctx which is references to canvas 20 context
    Draw(ctx) {
        ctx.beginPath();
        ctx.rect(
            this.x - this.width / 2,
            this.y - this.height / 2,
            this.width,
            this.height
        );
        ctx.fill();
    }
}