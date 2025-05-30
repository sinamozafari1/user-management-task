import React from "react";
import UserForm from "../components/UserForm";
import UserList from "../components/UserList";
import DeleteDialog from "../components/DeleteDialog";

const MainSection = ({
  users,
  handleAdd,
  showForm,
  handleSave,
  editingUser,
  setShowForm,
  handleEdit,
  handleDelete,
  deleteDialog,
  handleDeleteConfirm,
  setDeleteDialog
}) => (
  <main className="flex-1 p-4 lg:p-6 mt-16 lg:mt-0">
    <div className="w-full bg-white rounded-2xl shadow-xl p-4 lg:p-8 min-h-[70vh]">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <h1 className="text-2xl lg:text-3xl font-extrabold text-gray-900 tracking-tight">Users</h1>
        <button
          className="w-full sm:w-auto bg-gradient-to-r from-sky-500 to-indigo-500 hover:from-sky-600 hover:to-indigo-600 text-white px-6 py-2 rounded-lg shadow font-semibold transition"
          onClick={handleAdd}
        >
          + Add User
        </button>
      </div>
      <div className="border-b border-gray-200 mb-6"></div>
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl p-4 lg:p-8 w-full max-w-md">
            <UserForm
              onSave={handleSave}
              onCancel={() => setShowForm(false)}
              editingUser={editingUser}
              existingUsers={users}
            />
          </div>
        </div>
      )}
      <UserList users={users} onEdit={handleEdit} onDelete={handleDelete} />
      <DeleteDialog
        open={deleteDialog.open}
        user={deleteDialog.user}
        onConfirm={handleDeleteConfirm}
        onCancel={() => setDeleteDialog({ open: false, user: null })}
      />
    </div>
  </main>
);

export default MainSection; 