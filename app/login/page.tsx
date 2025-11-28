export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-700">
      <div className="backdrop-blur-lg bg-white/10 border border-white/20 p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h1 className="text-3xl font-bold text-white text-center mb-6">
          Login
        </h1>

        <form className="space-y-5">
          <div>
            <label className="block mb-1 text-gray-300 font-medium">
              Email
            </label>
            <input
              type="email"
              className="w-full px-3 py-2 bg-white/20 text-white border border-white/30 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-300 font-medium">
              Password
            </label>
            <input
              type="password"
              className="w-full px-3 py-2 bg-white/20 text-white border border-white/30 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your password"
            />
          </div>

          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded font-semibold transition">
            Login
          </button>
        </form>

        <p className="text-gray-300 text-center mt-4 text-sm">
          Don’t have an account?{" "}
          <a href="/register" className="text-blue-400 hover:underline">
            Register
          </a>
        </p>
      </div>
    </div>
  );
}
