import React from "react";
import {
  ResponsiveContainer,
  Area,
  AreaChart,
  YAxis,
  XAxis,
  Tooltip,
} from "recharts";

import "./BigChartBox.scss";
import { areaChartData } from "../../utils/areaChartData";
const BigChartBox = () => {
  return (
    <div className="bigChartBox">
      <h1>Revenue Analytics</h1>
      <div className="chart">
        <ResponsiveContainer width='99%' height={300} >
          <AreaChart data={areaChartData}
             margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
          >
            <Tooltip />
            <YAxis  />
            <XAxis dataKey='name'/>
            <Area
              type="monotone"
              dataKey="electronic"
              stackId="1"
              stroke="#8884d8"
              fill="#8884d8"
            />
            <Area
              type="monotone"
              dataKey="clothes"
              stackId="1"
              stroke="#82ca9d"
              fill="#82ca9d"
            />
            <Area
              type="monotone"
              dataKey="books"
              stackId="1"
              stroke="#ffc658"
              fill="#ffc658"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BigChartBox;
