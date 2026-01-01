import { LayoutDashboard, Users, FolderKanban, Bug } from "lucide-react";
import { useAppSelector } from "../../app/hooks";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  const { sidebarOpen } = useAppSelector((state) => state.ui);

  return (
    <aside
      className={`bg-white border-r border-gray-200 transition-all duration-300
      ${sidebarOpen ? "w-64" : "w-16"}`}
    >
      <nav className="p-4 space-y-2">
        <SidebarItem
          to="/admin/dashboard"
          icon={<LayoutDashboard />}
          label="Dashboard"
          open={sidebarOpen}
        />
        <SidebarItem
          to="/admin/employees"
          icon={<Users />}
          label="Employees"
          open={sidebarOpen}
        />
        <SidebarItem
          to="/admin/projects"
          icon={<FolderKanban />}
          label="Projects"
          open={sidebarOpen}
        />
        <SidebarItem
          to="/admin/bugs"
          icon={<Bug />}
          label="Bugs"
          open={sidebarOpen}
        />
      </nav>
    </aside>
  );
};

export default Sidebar;
