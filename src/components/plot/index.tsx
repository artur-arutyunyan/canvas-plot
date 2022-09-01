import React, {FC, useEffect, useRef} from "react";
import {drawPlot} from "./utils";

export type Point = {
    x: number;
    y: number;
}
type PlotProps = {
    data: Point[]
}
export const Plot: FC<PlotProps> = ({data}) => {

    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const context = canvasRef.current?.getContext('2d');
        if (context){
            drawPlot(context, data);
        }
    }, [data])

    return <canvas ref={canvasRef} width={'1000'} height={'500'} style={{border: '2px solid red'}}> </canvas>;
}