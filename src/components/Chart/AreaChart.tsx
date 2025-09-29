import React from "react";
import {
  AreaChart as ReAreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

type Data = {
  name: string;
  metric1: number;
  metric2: number;
};

type Props = {
  title: string;
  data: Data[];
};

const AreaChart: React.FC<Props> = ({ title, data }) => {
  return (
    <div className="bg-white shadow rounded p-4">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <ResponsiveContainer width="100%" height={250}>
        <ReAreaChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="metric1" stroke="#3B82F6" fill="#BFDBFE" />
          <Area type="monotone" dataKey="metric2" stroke="#F97316" fill="#FED7AA" />
        </ReAreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AreaChart;
