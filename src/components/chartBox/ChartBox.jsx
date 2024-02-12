import React from "react";
import "./ChartBox.scss";
import { Link } from "react-router-dom";
import { ResponsiveContainer, LineChart, Line, Tooltip } from "recharts";
const ChartBox = (props) => {
  return (
    <div className="chartBox">
      <div className="boxInfo">
        <div className="title">
          <span style={{color:props.color,fontSize:'1.1rem'}}>{props.icon}</span>
          <span>{props.title}</span>
        </div>
        <h1>{props.number}</h1>
        <Link
        style={{color:props.color}}
        to={"/"}>View all</Link>
      </div>
      <div className="chartInfo">
        <div className="chart">
          <ResponsiveContainer>
            <LineChart width={300} height={100} data={props.chartData}>
              <Tooltip
                contentStyle={{ background: "transparent", border: "none",fontSize:"12px" }}
                offset={12}
                labelStyle={{ display: "none" }}
                position={{ x: 10, y: 70 }}
              />
              <Line
                type="monotone"
                dataKey={props.dataKey}
                stroke={props.color}
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="texts">
          <span className="percentage"
          style={{color:props.percentage<0?'tomato':'limegreen'}}
          >{`${props.percentage}%`}</span>
          <span className="duration">This month</span>
        </div>
      </div>
    </div>
  );
};

export default ChartBox;
