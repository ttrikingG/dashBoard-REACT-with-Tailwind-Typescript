import React, { useState } from "react";

type User = {
  id: number;
  name: string;
  email: string;
  role: "Admin" | "Viewer";
};

const initialUsers: User[] = [
  { id: 1, name: "Alice", email: "alice@example.com", role: "Admin" },
  { id: 2, name: "Bob", email: "bob@example.com", role: "Viewer" },
  { id: 3, name: "Charlie", email: "charlie@example.com", role: "Viewer" },
];

const Users: React.FC = () => {
  const [users, setUsers] = useState<User[]>(initialUsers);

  const toggleAdmin = (id: number) => {
    setUsers((prev) =>
      prev.map((user) =>
        user.id === id
          ? { ...user, role: user.role === "Admin" ? "Viewer" : "Admin" }
          : user
      )
    );
  };

  const columns = [
    { key: "id" as keyof User, label: "ID" },
    { key: "name" as keyof User, label: "Name" },
    { key: "email" as keyof User, label: "Email" },
    {
      key: "role" as keyof User,
      label: "Admin",
      render: (user: User) => (
        <input
          type="checkbox"
          checked={user.role === "Admin"}
          onChange={() => toggleAdmin(user.id)}
          className="w-5 h-5"
        />
      ),
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow rounded">
          <thead className="bg-gray-100">
            <tr>
              {columns.map((col) => (
                <th key={String(col.key)} className="text-left p-3">
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-t">
                <td className="p-3">{user.id}</td>
                <td className="p-3">{user.name}</td>
                <td className="p-3">{user.email}</td>
                <td className="p-3 text-center">
                  <input
                    type="checkbox"
                    checked={user.role === "Admin"}
                    onChange={() => toggleAdmin(user.id)}
                    className="w-5 h-5"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
