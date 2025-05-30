import React, { useState, useEffect } from "react";
import { validateEmail } from "../utils/emailValidator";
import DuplicateUserModal from "./DuplicateUserModal";

const initialState = {
  id: null,
  name: "",
  email: "",
  birthDate: "",
  lastLogin: "",
  status: "Active",
};

export default function UserForm({ onSave, onCancel, editingUser, existingUsers = [] }) {
  const [form, setForm] = useState(initialState);
  const [emailError, setEmailError] = useState("");
  const [showDuplicateModal, setShowDuplicateModal] = useState(false);

  useEffect(() => {
    if (editingUser) setForm(editingUser);
    else setForm(initialState);
  }, [editingUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (name === "email") {
      if (!validateEmail(value)) {
        setEmailError("Please enter a valid email address.");
      } else {
        setEmailError("");
      }
    }
  };

  const isDuplicateUser = (email) => {
    return existingUsers.some(user => 
      user.email.toLowerCase() === email.toLowerCase() && 
      (!editingUser || user.id !== editingUser.id)
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(form.email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    if (isDuplicateUser(form.email)) {
      setShowDuplicateModal(true);
      return;
    }

    onSave(form);
    setForm(initialState);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="bg-white rounded-lg">
        <div className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="name" className="mb-1 text-sm font-medium text-gray-700">Name</label>
            <input
              className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              id="name"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-1 text-sm font-medium text-gray-700">Email</label>
            <input
              className={`w-full border p-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition ${
                emailError ? "border-red-500 focus:ring-red-500 focus:border-red-500" : "border-gray-300"
              }`}
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
            />
            {emailError && (
              <span className="text-red-500 text-xs mt-1">{emailError}</span>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="birthDate" className="mb-1 text-sm font-medium text-gray-700">Birth Date</label>
            <input
              className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              id="birthDate"
              name="birthDate"
              type="date"
              placeholder="Birth Date"
              value={form.birthDate}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="status" className="mb-1 text-sm font-medium text-gray-700">Status</label>
            <select
              className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              id="status"
              name="status"
              value={form.status}
              onChange={handleChange}
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
        </div>
        <div className="mt-6 flex flex-col sm:flex-row gap-2">
          <button
            type="submit"
            className="w-full sm:w-auto bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-2 rounded-lg shadow-sm font-medium transition disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!!emailError || !form.email}
          >
            {editingUser ? "Update" : "Add"} User
          </button>
          <button
            type="button"
            className="w-full sm:w-auto bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-2 rounded-lg shadow-sm font-medium transition"
            onClick={onCancel}
          >
            Cancel
          </button>
        </div>
      </form>
      <DuplicateUserModal 
        isOpen={showDuplicateModal} 
        onClose={() => setShowDuplicateModal(false)} 
      />
    </>
  );
}