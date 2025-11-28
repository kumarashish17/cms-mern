export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">Dashboard</h1>

      {/* Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Card 1 */}
        <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-gray-300">Total Students</h2>
          <p className="text-4xl font-bold text-blue-400 mt-2">1200</p>
        </div>

        {/* Card 2 */}
        <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-gray-300">Total Faculty</h2>
          <p className="text-4xl font-bold text-purple-400 mt-2">150</p>
        </div>

        {/* Card 3 */}
        <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-gray-300">Courses</h2>
          <p className="text-4xl font-bold text-green-400 mt-2">6</p>
        </div>

      </div>
    </div>
  );
}
