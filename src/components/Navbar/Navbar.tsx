import React from "react";

type NavbarProps = {
  onToggleSidebar?: () => void;
};

const Navbar: React.FC<NavbarProps> = ({ onToggleSidebar }) => {
  return (
    <header className="w-full bg-white shadow p-4 flex justify-between items-center">
      <div className="flex items-center gap-4">
        {onToggleSidebar && (
          <button
            onClick={onToggleSidebar}
            className="p-2 rounded hover:bg-gray-200"
          >
            ☰
          </button>
        )}
        <h2 className="text-xl font-semibold">Welcome, Admin</h2>
      </div>
      <div className="flex items-center gap-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Logout
        </button>
      </div>
    </header>
  );
};

export default Navbar;
