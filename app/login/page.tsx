export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 shadow-lg w-full max-w-md rounded-lg">
        <h1 className="text-2xl font-bold text-center mb-6">
          Login to CMS
        </h1>

        <form className="space-y-4">
          <div>
            <label className="block mb-1">Email</label>
            <input
              type="email"
              className="w-full border px-3 py-2 rounded"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block mb-1">Password</label>
            <input
              type="password"
              className="w-full border px-3 py-2 rounded"
              placeholder="Enter your password"
            />
          </div>

          <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
