import React from "react";
import Card from "../components//Card/Card";
import LineChart from "../components/Chart/LineChart";
import BarChart from "../components/Chart/BarChart";
import PieChart from "../components/Chart/PieChart";
import AreaChart from "../components/Chart/AreaChart";

const Dashboard: React.FC = () => {
  const lineData = [
    { name: "Jan", value: 400 },
    { name: "Feb", value: 300 },
    { name: "Mar", value: 500 },
    { name: "Apr", value: 200 },
    { name: "May", value: 700 },
  ];

  const barData = [
    { category: "Electronics", value: 400 },
    { category: "Clothing", value: 300 },
    { category: "Books", value: 200 },
  ];

  const pieData = [
    { name: "Admin", value: 3 },
    { name: "Editor", value: 5 },
    { name: "Viewer", value: 7 },
  ];

  const areaData = [
    { name: "Week 1", metric1: 100, metric2: 200 },
    { name: "Week 2", metric1: 150, metric2: 180 },
    { name: "Week 3", metric1: 200, metric2: 220 },
  ];

  return (
    <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:col-span-2">
        <Card title="Total Users" value={1200} />
        <Card title="New Orders" value={80} />
        <Card title="Revenue" value="$15,000" />
        <Card title="Feedbacks" value={45} />
      </div>

      {/* Gráficos */}
      <LineChart title="Monthly Revenue" data={lineData} />
      <BarChart title="Sales by Category" data={barData} />
      <PieChart title="User Roles Distribution" data={pieData} />
      <AreaChart title="Weekly Metrics" data={areaData} />
    </div>
  );
};

export default Dashboard;
