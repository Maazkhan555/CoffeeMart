import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BaseUrl from "../api";

const Alluser = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [editingUser, setEditingUser] = useState(null);

  // ✅ Fetch users on mount
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await BaseUrl.get("/user/", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      console.log("API RESPONSE 👉", res.data);

      const data = res.data.users || res.data.data || res.data.result || res.data;
      if (Array.isArray(data)) {
        setUsers(data);
        setError(false);
      } else {
        console.error("❌ Data is not array:", data);
        setUsers([]);
      }
    } catch (err) {
      console.error("❌ Fetch error:", err.response || err.message);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  // 🗑 Delete user
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;

    try {
      await BaseUrl.delete(`/user/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      setUsers((prev) => prev.filter((u) => (u._id || u.id) !== id));
    } catch (err) {
      alert("Failed to delete user");
      console.error(err);
    }
  };

  // ✏️ Open modal to update user
  const handleUpdate = (user) => {
    setEditingUser(user);
  };

  // ✏️ Save updated user
  const saveUpdate = async () => {
    try {
      await BaseUrl.put(`/user/${editingUser._id || editingUser.id}`, editingUser, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      setUsers((prev) =>
        prev.map((u) => (u._id === editingUser._id ? editingUser : u))
      );
      setEditingUser(null);
    } catch (err) {
      alert("Failed to update user");
      console.error(err);
    }
  };

  return (
    <section className="min-h-screen bg-[#3c1f0b] pt-28 px-4 md:px-8 pb-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-extrabold text-[#fef3e7] mb-8 text-center"
      >
        Admin Dashboard – All Users
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-7xl mx-auto bg-[#4c2a0c] rounded-2xl shadow-2xl overflow-hidden"
      >
        {/* Loading */}
        {loading && (
          <div className="p-10 text-center text-[#fef3e7] text-xl animate-pulse">
            Loading users...
          </div>
        )}

        {/* Error / Empty */}
        {!loading && (error || users.length === 0) && (
          <div className="p-12 text-center">
            <p className="text-2xl font-semibold text-[#fef3e7]">
              Data is not available
            </p>
            <p className="text-[#d39a6a] mt-2">Check backend or API route</p>
          </div>
        )}

        {/* Table */}
        {!loading && !error && users.length > 0 && (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-[#c08457] text-[#1a0f0a]">
                  <th className="p-4">#</th>
                  <th className="p-4">Name</th>
                  <th className="p-4">Email</th>
                  <th className="p-4">Contact</th>
                  <th className="p-4">Actions</th>
                </tr>
              </thead>

              <tbody>
                <AnimatePresence>
                  {users.map((user, index) => (
                    <motion.tr
                      key={user._id || user.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ delay: index * 0.05 }}
                      className="border-b border-[#c08457]/30 text-[#fef3e7]"
                    >
                      <td className="p-4">{index + 1}</td>
                      <td className="p-4">{user.name}</td>
                      <td className="p-4">{user.email}</td>
                      <td className="p-4">{user.contact}</td>
                      <td className="p-4 flex gap-3">
                        <button
                          onClick={() => handleUpdate(user)}
                          className="px-4 py-1 rounded-lg bg-blue-500 hover:bg-blue-600 text-white"
                        >
                          Update
                        </button>
                        <button
                          onClick={() => handleDelete(user._id || user.id)}
                          className="px-4 py-1 rounded-lg bg-red-500 hover:bg-red-600 text-white"
                        >
                          Delete
                        </button>
                      </td>
                    </motion.tr>
                  ))}
                </AnimatePresence>
              </tbody>
            </table>
          </div>
        )}
      </motion.div>

      {/* Update Modal */}
      {editingUser && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-[#4c2a0c] p-6 rounded-xl w-96">
            <h2 className="text-xl text-[#fef3e7] font-bold mb-4">
              Update User
            </h2>

            <input
              type="text"
              value={editingUser.name}
              onChange={(e) =>
                setEditingUser({ ...editingUser, name: e.target.value })
              }
              className="w-full p-3 rounded mb-4 bg-[#3c1f0b] text-[#fef3e7]"
            />
            <input
              type="email"
              value={editingUser.email}
              onChange={(e) =>
                setEditingUser({ ...editingUser, email: e.target.value })
              }
              className="w-full p-3 rounded mb-4 bg-[#3c1f0b] text-[#fef3e7]"
            />
            <input
              type="text"
              value={editingUser.contact}
              onChange={(e) =>
                setEditingUser({ ...editingUser, contact: e.target.value })
              }
              className="w-full p-3 rounded mb-4 bg-[#3c1f0b] text-[#fef3e7]"
            />

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setEditingUser(null)}
                className="px-4 py-2 rounded bg-gray-500 hover:bg-gray-600 text-white"
              >
                Cancel
              </button>
              <button
                onClick={saveUpdate}
                className="px-4 py-2 rounded bg-blue-500 hover:bg-blue-600 text-white"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Alluser;
