import React, { useContext } from "react";
import "./Single.scss";
import {
  ResponsiveContainer,
  XAxis,
  Kegend,
  YAxis,
  LineChart,
  Tooltip,
  Line,
  Legend,
} from "recharts";
const Single = (props) => {
  return (
    <div className="single">
      <div className="profile">
        <div className="title">
          <img src={props.img} alt="" />
          <h1>{props.title}</h1>
        </div>
        <div>
          <span>{props.info.username || props.info.price}</span>
          <span>{props.info.email || props.info.producer}</span>
          <span>{props.info.phone || props.info.export}</span>
        </div>
        <div className="chart">
          <ResponsiveContainer width="90%" height={400}>
            <LineChart data={props.chart.data}>
              <Tooltip
                contentStyle={{
                  borderRadius: "5px",
                  background: "transparent",
                }}
              />
              <Legend />
              <XAxis dataKey="name" />
              <YAxis />
              {props.chart.dataKeys.map((item) => (
                <Line dataKey={item.name} stroke={item.color} />
              ))}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="timeline">
        <h1>Latest Activities</h1>
        <ul className="">
          {props.activities.map((item) => (
            <li key={item.time}>
              <div>
                <p>{item.text}</p>
                <time>{item.time}</time>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Single;
