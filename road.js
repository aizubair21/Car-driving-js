// road class 
class Road {
    //constructoir properties.
    constructor(x, width, laneCount = 5) {
        //lanecount default value of 5
        this.x = x; //x coordinate position
        this.width = width; //width of canvas
        this.laneCount = laneCount;

        this.left = x - width / 2;
        this.right = x + width / 2;

        //road go intinite upwards
        const infinity = 1000000;
        this.top = -infinity;
        this.bottom = infinity;
    }

    //get leane center point to set the car center of any specific lane. 
    getLineCenter(lineIndex) {
        const laneWidth = this.width / this.laneCount;
        return this.left + laneWidth / 2 + Math.min(lineIndex, this.laneCount - 1) * laneWidth;
    }


    //lane draw method
    Draw() {
        ctx.lineWidth = 3; //3px width
        ctx.strokeStyle = "white"; //whtie color lane

        //loop of lane count to draw lane
        for (let i = 0; i <= this.laneCount; i++) {
            /*
             * lerp() a function defined bellow out of Road class
             * x value depend on three things left and right position of road
             * and current index of i devided by laneCount.
             * this is basically make stapes of lane.
             */
            const x = lerp(this.left, this.right, i / this.laneCount);
            if (i > 0 && i < this.laneCount) {
                /*
                 * setLineDash() a function from context object which used to create line dash in canvas.
                 * first parameter is array of number that represent length of each dashes.
                 * second parameter is offset of start of pattern.
                 * it create line dash to lane. not include first and last lane.
                 */
                ctx.setLineDash([30, 20])
            } else {

                ctx.setLineDash([]);
            }
            ctx.beginPath();
            ctx.moveTo(x, this.top)
            ctx.lineTo(x, this.bottom)
            ctx.stroke();

        }
    }
}


function lerp(a, b, t) {
    return a + (b - a) * t;
}
// console.log(lerp(5, 255, 1 / 3));