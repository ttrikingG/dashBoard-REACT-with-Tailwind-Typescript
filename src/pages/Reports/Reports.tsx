import React from "react";
import Card from "../../components/Card/Card";

const Reports: React.FC = () => {
  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card title="Monthly Revenue" value="$15,000" />
      <Card title="New Orders" value={80} />
      <Card title="User Signups" value={120} />
    </div>
  );
};

export default Reports;
