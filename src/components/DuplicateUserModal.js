import React from "react";
import { FiAlertCircle } from "react-icons/fi";

const DuplicateUserModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl p-6 max-w-md w-full">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-red-100 rounded-full">
            <FiAlertCircle className="text-red-500 text-2xl" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900">User Already Exists</h3>
        </div>
        <p className="text-gray-600 mb-6">
          A user with this email address already exists in the system. Please use a different email address.
        </p>
        <button
          onClick={onClose}
          className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-2 rounded-lg shadow-sm font-medium transition"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default DuplicateUserModal; 