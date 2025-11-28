export default function AddStudentPage() {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Add New Student</h1>

      <form className="space-y-6 bg-gray-800 p-6 rounded-xl border border-gray-700">

        {/* Full Name */}
        <div>
          <label className="text-gray-300 block mb-1">Full Name</label>
          <input
            type="text"
            placeholder="Enter full name"
            className="w-full px-4 py-2 rounded bg-gray-900 text-white border border-gray-700
              focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Email */}
        <div>
          <label className="text-gray-300 block mb-1">Email</label>
          <input
            type="email"
            placeholder="Enter email"
            className="w-full px-4 py-2 rounded bg-gray-900 text-white border border-gray-700
              focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Course */}
        <div>
          <label className="text-gray-300 block mb-1">Course</label>
          <select
            className="w-full px-4 py-2 rounded bg-gray-900 text-white border border-gray-700
              focus:ring-2 focus:ring-blue-600 outline-none">
            <option className="text-black">B.Tech CSE</option>
            <option className="text-black">BCA</option>
            <option className="text-black">MCA</option>
            <option className="text-black">B.Sc IT</option>
          </select>
        </div>

        {/* Year */}
        <div>
          <label className="text-gray-300 block mb-1">Year</label>
          <select
            className="w-full px-4 py-2 rounded bg-gray-900 text-white border border-gray-700
              focus:ring-2 focus:ring-purple-600 outline-none">
            <option className="text-black">1st Year</option>
            <option className="text-black">2nd Year</option>
            <option className="text-black">3rd Year</option>
            <option className="text-black">4th Year</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded 
            font-semibold transition">
          Save Student
        </button>

      </form>
    </div>
  );
}
