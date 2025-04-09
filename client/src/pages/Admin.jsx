import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LatestNotification from "../components/LatestNotfication";
import { api } from "../api/mockData";

export function Admin() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const data = await api.fetchAdminUsers();
        setUsers(data);
        setFilteredUsers(data);
      } catch (err) {
        setError("Failed to fetch users");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    setFilteredUsers(
      users.filter((user) =>
        user.userName.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery, users]);

  if (loading) {
    return (
      <div className="p-6 md:p-8">
        <div className="text-gray-600">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6 md:p-8">
        <div className="bg-red-50 text-red-600 p-4 rounded-lg">{error}</div>
      </div>
    );
  }

  return (
    <div className="flex flex-row min-h-screen">
      <div className="flex-grow p-6 md:p-8 pt-16 md:pt-8 bg-gray-50">
        <div className="grid grid-cols-1 gap-6 mb-8">
          <h2 className="font-montserrat text-2xl text-gray-800 font-semibold">
            Admin Page
          </h2>

          <div className="flex items-center gap-4 mb-6">
            {/* Search Bar */}
            <input
              type="text"
              placeholder="Search Users..."
              className="border px-4 py-2 rounded-lg w-full max-w-md"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />

            {/* Apply Filters Button */}
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
              Apply Filters
            </button>

            {/* Add Users Button */}
            <button className="bg-green-500 text-white px-4 py-2 rounded-lg">
              Add Users
            </button>
          </div>

          <div className="mb-6">
            <div className="overflow-x-auto bg-white shadow-md rounded-lg">
              <table className="min-w-full table-auto">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-2 px-4 text-left text-sm font-semibold text-gray-600">
                      User Names
                    </th>
                    <th className="py-2 px-4 text-left text-sm font-semibold text-gray-600">
                      User ID
                    </th>
                    <th className="py-2 px-4 text-left text-sm font-semibold text-gray-600">
                      Actions
                    </th>
                    <th className="py-2 px-4 text-left text-sm font-semibold text-gray-600">
                      Access
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredUsers.map((user, index) => (
                    <tr
                      key={index}
                      className="border-t border-gray-200 hover:bg-gray-50"
                    >
                      <td className="py-3 px-4 text-sm text-gray-700">
                        {user.userName}
                      </td>
                      <td className="py-3 px-4 text-sm text-gray-700">
                        {user.userId}
                      </td>
                      <td className="py-3 px-4 text-sm text-gray-700">
                        <div>
                          <button
                            onClick={() =>
                              alert(`Deleting user ${user.userName}`)
                            }
                            className="flex items-center space-x-1 hover:text-blue-700"
                          >
                            <span>Delete</span>
                          </button>
                          <button
                            onClick={() =>
                              alert(`Editing user ${user.userName}`)
                            }
                            className="flex items-center space-x-1 hover:text-blue-700"
                          >
                            <span>Edit</span>
                          </button>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-sm text-blue-500">
                        {user.access}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <LatestNotification />
    </div>
  );
}