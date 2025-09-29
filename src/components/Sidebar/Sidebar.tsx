import React from "react";
import { NavLink } from "react-router-dom";

type SidebarProps = {
  collapsed?: boolean; // futuro para expandir/recolher
};

const Sidebar: React.FC<SidebarProps> = ({ collapsed = false }) => {
  const links = [
    { name: "Dashboard", path: "/" },
    { name: "Users", path: "/users" },
    { name: "Reports", path: "/reports" },
    { name: "Settings", path: "/settings" },
  ];

  return (
    <aside
      className={`bg-gray-800 text-white h-screen p-4 flex flex-col transition-all duration-300 ${
        collapsed ? "w-20" : "w-64"
      }`}
    >
      <h1 className={`text-2xl font-bold mb-6 ${collapsed ? "hidden" : ""}`}>
        Dashboard
      </h1>
      <nav className="flex flex-col gap-2">
        {links.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            className={({ isActive }) =>
              `p-2 rounded hover:bg-gray-700 ${
                isActive ? "bg-gray-700 font-semibold" : ""
              }`
            }
          >
            {link.name}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
