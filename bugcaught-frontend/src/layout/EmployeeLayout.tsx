import { Outlet } from "react-router-dom";

const EmployeeLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-green-600 text-white p-4">
        Employee Dashboard
      </header>

      <main className="p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default EmployeeLayout;
