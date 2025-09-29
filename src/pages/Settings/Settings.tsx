import React, { useState } from "react";

const Settings: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Settings</h1>

      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-lg font-semibold mb-2">Appearance</h2>
        <div className="flex items-center gap-4">
          <span>Dark Mode</span>
          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
            className="w-6 h-6"
          />
        </div>
      </div>

      <div className="bg-white p-4 rounded shadow mt-6">
        <h2 className="text-lg font-semibold mb-2">Account</h2>
        <p>Manage your account settings here.</p>
      </div>
    </div>
  );
};

export default Settings;
