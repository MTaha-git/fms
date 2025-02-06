// components/UserManagement.js
export default function UserManagement() {
    return (
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-bold text-blue-600 mb-4">User Management</h2>
        <form className="flex gap-4 mb-6">
          <input
            type="text"
            placeholder="Username"
            className="flex-1 border rounded-lg px-4 py-2"
          />
          <input
            type="password"
            placeholder="Password"
            className="flex-1 border rounded-lg px-4 py-2"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Add User
          </button>
        </form>
  
        <h3 className="font-semibold mb-2">User List</h3>
        <ul className="space-y-2">
          {/* Static Example Users */}
          <li className="bg-gray-50 p-3 rounded">user1</li>
          <li className="bg-gray-50 p-3 rounded">user2</li>
          {/* More Static Users can be added here */}
        </ul>
      </div>
    )
  }
  