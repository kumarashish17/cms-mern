export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 p-4">
      <div className="backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl 
        rounded-3xl p-10 w-full max-w-md transition-all">

        <h1 className="text-4xl font-extrabold text-center bg-gradient-to-r 
          from-green-400 to-blue-400 bg-clip-text text-transparent mb-8">
          Create Account
        </h1>

        <form className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-gray-300 mb-1 font-medium">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-3 rounded-xl bg-white/10 text-white border border-white/20
                focus:ring-2 focus:ring-green-500 outline-none transition-all 
                placeholder-gray-400"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-300 mb-1 font-medium">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-xl bg-white/10 text-white border border-white/20
                focus:ring-2 focus:ring-blue-500 outline-none transition-all 
                placeholder-gray-400"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-300 mb-1 font-medium">
              Password
            </label>
            <input
              type="password"
              placeholder="Create password"
              className="w-full px-4 py-3 rounded-xl bg-white/10 text-white border border-white/20
                focus:ring-2 focus:ring-purple-500 outline-none transition-all 
                placeholder-gray-400"
            />
          </div>

          {/* Role Select */}
          <div>
            <label className="block text-gray-300 mb-1 font-medium">
              Select Role
            </label>
            <select
              className="w-full px-4 py-3 rounded-xl bg-white/10 text-white border border-white/20
                focus:ring-2 focus:ring-green-400 outline-none transition-all 
                placeholder-gray-400"
            >
              <option className="text-black">Student</option>
              <option className="text-black">Faculty</option>
              <option className="text-black">Admin</option>
            </select>
          </div>

          <button
            className="w-full py-3 rounded-xl bg-gradient-to-r from-green-500 to-blue-600 
              text-white font-semibold hover:opacity-90 transition-all shadow-lg hover:shadow-xl">
            Register
          </button>
        </form>

        <p className="text-gray-300 text-center mt-6">
          Already have an account?{" "}
          <a href="/login" className="text-blue-400 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
