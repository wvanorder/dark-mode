import React from "react";
import Chart from "./Chart";

const Charts = (props) => {
  return (
    <div className="charts">
      {props.coinData.map(coin => (
        <div className="chart__container" key={coin.name}>
          <h2 className="coin__title">{coin.name}</h2>
          <h4 className="coin__symbol">{coin.symbol}</h4>
          <div className="coin__logo">
            <img src={coin.image} height="40" alt={coin.name} />
          </div>
          <Chart sparklineData={coin.sparkline_in_7d.price} darkMode={props.darkMode}/>
        </div>
      ))}
    </div>
  );
};
export default Charts;
