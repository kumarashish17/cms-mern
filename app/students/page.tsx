export default function StudentsPage() {
  return (
    <div>
      {/* Page Header */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Students</h1>

        <a
          href="/students/add"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
        >
          + Add Student
        </a>
      </div>

      {/* Table */}
      <div className="bg-gray-800 border border-gray-700 rounded-xl overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-700">
            <tr>
              <th className="px-6 py-3 text-gray-300">Name</th>
              <th className="px-6 py-3 text-gray-300">Email</th>
              <th className="px-6 py-3 text-gray-300">Course</th>
              <th className="px-6 py-3 text-gray-300">Actions</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-t border-gray-700 hover:bg-gray-700/40 transition">
              <td className="px-6 py-3">Rajesh Kumar</td>
              <td className="px-6 py-3">rajeshKhus...@gmail.com</td>
              <td className="px-6 py-3">B.Tech CSE</td>
              <td className="px-6 py-3 space-x-3">
                <a href="/students/1" className="text-blue-400 hover:underline">
                  View
                </a>
                <a href="/students/edit/1" className="text-yellow-400 hover:underline">
                  Edit
                </a>
                <button className="text-red-400 hover:underline">Delete</button>
              </td>
            </tr>

            <tr className="border-t border-gray-700 hover:bg-gray-700/40 transition">
              <td className="px-6 py-3">Adity Kumari</td>
              <td className="px-6 py-3">aditykumari611@gmail.com</td>
              <td className="px-6 py-3">B.Tech CSE</td>
              <td className="px-6 py-3 space-x-3">
                <a href="/students/2" className="text-blue-400 hover:underline">
                  View
                </a>
                <a href="/students/edit/2" className="text-yellow-400 hover:underline">
                  Edit
                </a>
                <button className="text-red-400 hover:underline">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
