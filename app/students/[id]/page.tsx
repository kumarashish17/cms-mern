export default function StudentProfilePage({ params }: any) {
  const studentId = params.id;

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Student Profile</h1>

      <div className="bg-gray-800 border border-gray-700 p-8 rounded-xl">
        {/* Profile Header */}
        <div className="flex items-center gap-6 mb-6">
          <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-3xl font-bold">
            R
          </div>
          <div>
            <h2 className="text-2xl font-semibold">Rahul Kumar</h2>
            <p className="text-gray-400">ID: {studentId}</p>
          </div>
        </div>

        {/* Details Section */}
        <div className="space-y-4">
          <div className="flex justify-between border-b border-gray-700 pb-3">
            <span className="text-gray-400">Email</span>
            <span className="text-white">rahul@example.com</span>
          </div>

          <div className="flex justify-between border-b border-gray-700 pb-3">
            <span className="text-gray-400">Course</span>
            <span className="text-white">B.Tech CSE</span>
          </div>

          <div className="flex justify-between border-b border-gray-700 pb-3">
            <span className="text-gray-400">Year</span>
            <span className="text-white">2nd Year</span>
          </div>

          <div className="flex justify-between border-b border-gray-700 pb-3">
            <span className="text-gray-400">Enrollment No</span>
            <span className="text-white">CSE2024-001</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-8 flex gap-4">
          <a
            href={`/students/edit/${studentId}`}
            className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-lg font-semibold"
          >
            Edit
          </a>

          <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg font-semibold">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
