// road class 
class Road {
    //constructoir properties.
    constructor(x, width, laneCount = 4) { //lanecount default value of 3
        this.x = x;
        this.width = width;
        this.laneCount = laneCount;

        this.left = 10;
        this.right = width - 10;

        //road go intinite upwards
        const infinity = 1000000;
        this.top = -infinity;
        this.bottom = infinity;
    }

    getLineCenter(lineIndex) {
        const lineWidth = this.width / this.laneCount;

        return (`${this.left} + ${lineWidth} / 2 + ${lineIndex} * ${lineWidth} : ` + this.left + lineWidth / 2) + lineIndex * lineWidth;
    }

    Draw() {
        ctx.lineWidth = 3;
        ctx.strokeStyle = "white";

        for (let i = 0; i <= this.laneCount; i++) {
            const x = lerp(this.left, this.right, i / this.laneCount);
            if (i > 0 && i < this.laneCount) {
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