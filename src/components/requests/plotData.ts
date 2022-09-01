export type PlotPoint = {
    x: string;
    y: number;
}
export const getPlotData = async (): Promise<PlotPoint[]> => {
    return fetch('https://my-json-server.typicode.com/FeniXAltaiR/demoapi/data').then(response => response.json())
}
