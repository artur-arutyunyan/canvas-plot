import {Point} from "./index";

export const drawPlot = (ctx: CanvasRenderingContext2D, plotData: Point[]) => {
    const WIDTH = ctx.canvas.width;
    const HEIGHT = ctx.canvas.height;

    console.log(plotData)
    const MAX_Y = Math.max(...plotData.map(({x, y}) => y)) + 100;
    const MAX_X = Math.max(...plotData.map(({x, y}) => x));


    const MIN_Y = Math.min(...plotData.map(({x, y}) => y))
    const MIN_X = Math.min(...plotData.map(({x, y}) => x));
    console.log(MAX_Y, MIN_Y)

    function drawCircle( x: any, y: any, radius: any, fill: any, stroke: any, strokeWidth: any) {
        ctx.beginPath()
        ctx.arc(x, y, radius, 0, 2 * Math.PI, false)
        if (fill) {
            ctx.fillStyle = fill
            ctx.fill()
        }
        if (stroke) {
            ctx.lineWidth = strokeWidth
            ctx.strokeStyle = stroke
            ctx.stroke()
        }
    }


    // ctx.rotate(-Math.PI/2);

    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    drawCircle(0,0, 50, 'blue', undefined, undefined);
    ctx.fillStyle = 'green'
    ctx.fillRect(-10, -10, 20, 50);


    ctx.transform(1, 0, 0, -1, 0, HEIGHT);
    // ctx.transform(WIDTH/(MAX_X-MIN_X), 0, 0, -1, MIN_X, HEIGHT);
    // ctx.translate(0, -HEIGHT)

    drawCircle(0,0, 50, 'blue', undefined, undefined);

    // ctx.lineWidth = 15;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    plotData.forEach(({x,y}) => {
        ctx.lineTo((x-MIN_X)*WIDTH/(MAX_X-MIN_X),(y-MIN_Y)*HEIGHT/(MAX_Y-MIN_Y))
    })
    ctx.lineWidth = 3;
    ctx.stroke();
    //
    // ctx.font = '250px serif';
    // ctx.fillStyle = "green";
    // plotData.forEach(({x, y}) => {
    //     ctx.fillText(y.toString(), x, 100);
    // })


}