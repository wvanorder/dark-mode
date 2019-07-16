import React from "react";
import moment from "moment";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip
} from "recharts";

const Chart = (props) => {
  const formattedData = props.sparklineData
    .map((price, idx) => {
      if (idx % 6 === 0) {
        const timeToSubtract = 168 - idx;
        const date = moment()
          .subtract(timeToSubtract, "hours")
          .format("ddd h:mma");
        return { value: price, date };
      } else if (idx === props.sparklineData.length - 1) {
        const date = moment().format("ddd h:mma");
        return { value: price, date };
      }
      return null;
    })
    .filter(data => data);

  return (
    <LineChart width={1100} height={300} data={formattedData}>
      <Line type="monotone" dataKey="value" stroke={props.darkMode? "rgb(242, 242, 233)" : "rgb(45, 29, 57)"} />
      <CartesianGrid stroke={props.darkMode? "rgb(242, 242, 233)" : "rgb(45, 29, 57)"} strokeDasharray="5 5" />
      <XAxis dataKey="date" interval={3} stroke={props.darkMode? "rgb(242, 242, 233)" : "rgb(45, 29, 57)"} />
      <YAxis stroke={props.darkMode? "rgb(242, 242, 233)" : "rgb(45, 29, 57)"} />
      <Tooltip />
    </LineChart>
  );
};

export default Chart;
