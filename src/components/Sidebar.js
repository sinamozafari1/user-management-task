import React, { useState } from "react";
import { FiUsers, FiGrid, FiSettings, FiUser, FiMenu, FiX } from "react-icons/fi";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { icon: <FiUsers className="w-5 h-5" />, text: "Users", active: true },
    { icon: <FiGrid className="w-5 h-5" />, text: "Dashboard" },
    { icon: <FiSettings className="w-5 h-5" />, text: "Settings" },
    { icon: <FiUser className="w-5 h-5" />, text: "Profile" },
  ];

  return (
    <>
      {/* Mobile menu button */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-gradient-to-r from-sky-500 to-indigo-500 text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:static lg:translate-x-0 transform transition-transform duration-300 ease-in-out z-40 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 w-64 bg-white border-r border-gray-200 h-full`}
      >
        <div className="p-4 lg:p-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-8 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-lg flex items-center justify-center">
              <FiUsers className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-xl font-bold text-gray-900">User Management</h1>
          </div>
          <nav>
            <ul className="space-y-2">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <button
                    className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg transition ${
                      item.active
                        ? "bg-gradient-to-r from-sky-500 to-indigo-500 text-white"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.icon}
                    <span>{item.text}</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;