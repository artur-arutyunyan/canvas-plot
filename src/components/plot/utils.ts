import {Point} from "./index";

export const drawPlot = (ctx: CanvasRenderingContext2D, plotData: Point[]) => {

    const WIDTH = ctx.canvas.width - 100;
    const HEIGHT = ctx.canvas.height - 50;
    const MAX_Y = Math.max(...plotData.map(({x, y}) => y))<100?100:Math.max(...plotData.map(({x, y}) => y))+50;
    const MAX_X = Math.max(...plotData.map(({x, y}) => x));
    const MIN_Y = Math.min(...plotData.map(({x, y}) => y))<100?0:Math.min(...plotData.map(({x, y}) => y));
    const MIN_X = Math.min(...plotData.map(({x, y}) => x));


    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);

    ctx.beginPath();
    // координатные оси
    ctx.moveTo(50,10);
    ctx.lineTo(50,HEIGHT);
    ctx.lineTo(WIDTH+80,HEIGHT);
    ctx.strokeStyle = "pink";
    ctx.lineWidth = 3;
    ctx.stroke();

    // arrows
    ctx.moveTo(40,30);
    ctx.lineTo(50,10);
    ctx.lineTo(60,30);
    ctx.stroke();
    ctx.moveTo(WIDTH+60,HEIGHT+10);
    ctx.lineTo(WIDTH+80,HEIGHT);
    ctx.lineTo(WIDTH+60,HEIGHT-10);
    ctx.stroke();



    ctx.beginPath();
    ctx.moveTo(50, HEIGHT-(plotData[0].y-MIN_Y)*HEIGHT/(MAX_Y-MIN_Y));
    ctx.strokeStyle  = "green";
    ctx.font = '20px serif';
    ctx.fillStyle = "green";
    plotData.forEach(({x,y}, index) => {

        ctx.lineTo((x-MIN_X)*WIDTH/(MAX_X-MIN_X)+50,HEIGHT-(y-MIN_Y)*HEIGHT/(MAX_Y-MIN_Y));
        ctx.fillText(y.toString(), (x-MIN_X)*WIDTH/(MAX_X-MIN_X)+30, HEIGHT-(y-MIN_Y)*HEIGHT/(MAX_Y-MIN_Y)-20);
        ctx.fillText(x.toString(), (x-MIN_X)*WIDTH/(MAX_X-MIN_X)+30, HEIGHT+30);
    })
    ctx.lineWidth = 5;
    ctx.stroke();


}