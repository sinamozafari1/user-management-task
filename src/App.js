import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import MainSection from "./components/MainSection";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [users, setUsers] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [deleteDialog, setDeleteDialog] = useState({ open: false, user: null });

  useEffect(() => {
    const savedUsers = localStorage.getItem("users");
    if (savedUsers) {
      setUsers(JSON.parse(savedUsers));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const handleAdd = () => {
    setEditingUser(null);
    setShowForm(true);
  };

  const handleSave = (userData) => {
    if (editingUser) {
      setUsers(users.map((u) => (u.id === editingUser.id ? { ...u, ...userData } : u)));
    } else {
      setUsers([...users, { ...userData, id: uuidv4() }]);
    }
    setShowForm(false);
  };

  const handleEdit = (user) => {
    setEditingUser(user);
    setShowForm(true);
  };

  const handleDelete = (user) => {
    setDeleteDialog({ open: true, user });
  };

  const handleDeleteConfirm = () => {
    setUsers(users.filter((u) => u.id !== deleteDialog.user.id));
    setDeleteDialog({ open: false, user: null });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex flex-col lg:flex-row">
        <Sidebar />
        <MainSection
          users={users}
          handleAdd={handleAdd}
          showForm={showForm}
          handleSave={handleSave}
          editingUser={editingUser}
          setShowForm={setShowForm}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          deleteDialog={deleteDialog}
          handleDeleteConfirm={handleDeleteConfirm}
          setDeleteDialog={setDeleteDialog}
        />
      </div>
    </div>
  );
}

export default App;