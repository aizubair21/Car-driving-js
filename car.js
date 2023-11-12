//car class
class Car {
    constructor(x, y, width, height) { //constractor take 4 artument paramitter x coordinate, y coordinate, width, and height of car
        //we store our paramitter to local property
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

    }

    //car have a draw method. word to draw the can into canvas.Draw method also take an argument ctx which is references to canvas
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