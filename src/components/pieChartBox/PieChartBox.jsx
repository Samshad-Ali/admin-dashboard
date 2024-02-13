import React from "react";
import { pieChartData } from "../../utils/pieChartData";
import { ResponsiveContainer, Cell, PieChart, Pie, Tooltip } from "recharts";
import "./PIechartBox.scss";
const PieChartBox = () => {
  return (
    <div className="pieChartBox">
      <h1>Leads by Source</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height={300}>
          <PieChart>
            <Tooltip
              contentStyle={{
                background: "white",
                borderRadius: "5px",
                fontSize: "15px",
              }}
            />
            <Pie
              dataKey="value"
              paddingAngle={5}
              data={pieChartData}
              outerRadius="90%"
              innerRadius="70%"
            >
              {pieChartData.map((item) => (
                <Cell key={item.name} fill={item.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="options">
        {
            pieChartData.map((item)=>(
                <React.Fragment key={item.id}>
                    <div className={`dot`}
                    style={{background:item.color}}
                    />
                    <div className="texts">
                        <span>{item.name}</span>
                        <span>{item.value}</span>
                    </div>
                </React.Fragment>
            ))
        }
      </div>
    </div>
  );
};

export default PieChartBox;
