import React from "react";
import {
  Line,
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function DataGraph({ monthlyCount }) {
  const data = [
    { name: "1st", user: 200, appointment: monthlyCount },
    { name: "1st", user: 250, appointment: monthlyCount },
    { name: "2nd", user: 500, appointment: monthlyCount },
    { name: "3rd", user: 900, appointment: monthlyCount },
    { name: "4th", user: 300, appointment: monthlyCount },
    { name: "5th", user: 600, appointment: monthlyCount },
    { name: "6th", user: 800, appointment: monthlyCount },
    { name: "7th", user: 1200, appointment: monthlyCount },
  ];

  return (
    <div>
      <ResponsiveContainer height={250} width="100%">
        <LineChart
          width={600}
          height={300}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="appointment" stroke="#8884d8" />
          <Line type="monotone" dataKey="user" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default DataGraph;
