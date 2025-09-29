import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Sidebar from "./components//Sidebar/Sidebar";
import Navbar from "./components/Navbar/Navbar";
import AppRoutes from "./routes/AppRoutes";

const App: React.FC = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const toggleSidebar = () => setSidebarCollapsed(!sidebarCollapsed);

  return (
    <BrowserRouter>
      <div className="flex h-screen bg-gray-100">
        {/* Sidebar */}
        <Sidebar collapsed={sidebarCollapsed} />

        {/* Main content */}
        <div className="flex-1 flex flex-col">
          <Navbar onToggleSidebar={toggleSidebar} />
          <main className="p-6 overflow-auto">
            <AppRoutes />
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
