import React from "react";
import { FiEdit2, FiTrash2, FiMail, FiCalendar, FiClock } from "react-icons/fi";

function getInitials(name) {
  if (!name) return "?";
  const parts = name.split(" ");
  return parts.length === 1
    ? parts[0][0].toUpperCase()
    : (parts[0][0] + parts[1][0]).toUpperCase();
}

export default function UserList({ users, onEdit, onDelete }) {
  return (
    <div className="space-y-4">
      {/* Desktop Table View */}
      <div className="hidden lg:block overflow-x-auto rounded-xl shadow-lg bg-white">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-50">
            <tr>
              <th className="p-4">#</th>
              <th className="p-4">User</th>
              <th className="p-4">Email</th>
              <th className="p-4">Birth Date</th>
              <th className="p-4">Last Login</th>
              <th className="p-4">Status</th>
              <th className="p-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.length === 0 && (
              <tr>
                <td colSpan={7} className="p-6 text-center text-gray-400">
                  No users found.
                </td>
              </tr>
            )}
            {users.map((user, idx) => (
              <tr
                key={user.id}
                className="border-b last:border-none hover:bg-blue-50 transition group"
              >
                <td className="p-4 font-semibold text-gray-500">{idx + 1}</td>
                <td className="p-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600 text-lg shadow">
                    {getInitials(user.name)}
                  </div>
                  <span className="font-medium text-gray-800">{user.name}</span>
                </td>
                <td className="p-4 text-gray-600">{user.email}</td>
                <td className="p-4 text-gray-600">{user.birthDate}</td>
                <td className="p-4 text-gray-600">{user.lastLogin || "-"}</td>
                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold shadow-sm
                      ${user.status === "Active"
                        ? "bg-green-100 text-green-700 border border-green-200"
                        : user.status === "Inactive"
                          ? "bg-red-100 text-red-700 border border-red-200"
                          : "bg-gray-100 text-gray-700 border border-gray-200"}
                    `}
                  >
                    {user.status}
                  </span>
                </td>
                <td className="p-4 flex gap-2">
                  <button
                    className="p-2 rounded-full hover:bg-blue-100 text-blue-600 transition"
                    title="Edit"
                    onClick={() => onEdit(user)}
                  >
                    <FiEdit2 className="text-lg" />
                  </button>
                  <button
                    className="p-2 rounded-full hover:bg-red-100 text-red-500 transition"
                    title="Delete"
                    onClick={() => onDelete(user)}
                  >
                    <FiTrash2 className="text-lg" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="lg:hidden space-y-4">
        {users.length === 0 ? (
          <div className="p-6 text-center text-gray-400 bg-white rounded-xl shadow-lg">
            No users found.
          </div>
        ) : (
          users.map((user, idx) => (
            <div
              key={user.id}
              className="bg-white rounded-xl shadow-lg p-4 space-y-4"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600 text-lg shadow">
                    {getInitials(user.name)}
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">{user.name}</h3>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold shadow-sm
                        ${user.status === "Active"
                          ? "bg-green-100 text-green-700 border border-green-200"
                          : user.status === "Inactive"
                            ? "bg-red-100 text-red-700 border border-red-200"
                            : "bg-gray-100 text-gray-700 border border-gray-200"}
                      `}
                    >
                      {user.status}
                    </span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    className="p-2 rounded-full hover:bg-blue-100 text-blue-600 transition"
                    title="Edit"
                    onClick={() => onEdit(user)}
                  >
                    <FiEdit2 className="text-lg" />
                  </button>
                  <button
                    className="p-2 rounded-full hover:bg-red-100 text-red-500 transition"
                    title="Delete"
                    onClick={() => onDelete(user)}
                  >
                    <FiTrash2 className="text-lg" />
                  </button>
                </div>
              </div>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <FiMail className="text-gray-400" />
                  <span>{user.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiCalendar className="text-gray-400" />
                  <span>{user.birthDate}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiClock className="text-gray-400" />
                  <span>{user.lastLogin || "-"}</span>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}