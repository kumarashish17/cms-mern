export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex bg-gray-900 text-white">

      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 p-6 border-r border-gray-700">
        <h1 className="text-2xl font-bold mb-6">CMS</h1>

        <nav className="space-y-4">
          <a href="/dashboard" className="block hover:text-blue-400">Dashboard</a>
          <a href="/students" className="block hover:text-blue-400">Students</a>
          <a href="/faculty" className="block hover:text-blue-400">Faculty</a>
          <a href="/courses" className="block hover:text-blue-400">Courses</a>
          <a href="/attendance" className="block hover:text-blue-400">Attendance</a>
          <a href="/events" className="block hover:text-blue-400">Events</a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}
