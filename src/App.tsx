import React, {useEffect, useState} from 'react';
import './App.css';
import Loader from "./components/loader";
import Error from "./components/error";
import {getPlotData, PlotPoint} from "./components/requests/plotData";
import {Plot, Point} from "./components/plot";

function App() {

  const [data, setData] = useState<Point[]>();
  const [isFetching, setIsFetching] = useState(true);

  useEffect(()=> {
    getPlotData()
    .then(plotData => setData(plotData.map(
        ({x,y}) => ({x: parseInt(x), y})
    )) )
    .finally(() => setIsFetching(false) )
  }, []);

  const switchXY = () => {
    setData(
        data => data?.map(
            ({x,y}) => ({y: x, x: y})
        ).sort((a,b) => a.x - b.x)
    )
  }

  if (isFetching) return <Loader/>;
  if (!data) return <Error/>;

  return (
      <>
        <Plot data={data} />
        <button onClick={switchXY}>Switch X and Y</button>
      </>
  );
}

export default App;
