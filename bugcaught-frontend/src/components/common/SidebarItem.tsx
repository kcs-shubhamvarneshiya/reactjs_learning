import { NavLink } from "react-router-dom";

interface Props {
  to: string;
  icon: React.ReactNode;
  label: string;
  open: boolean;
}

const SidebarItem = ({ to, icon, label, open }: Props) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-3 p-2 rounded-md transition
        ${
          isActive
            ? "bg-purple-100 text-primary"
            : "text-gray-700 hover:bg-purple-50"
        }`
      }
    >
      {icon}
      {open && <span className="text-sm font-medium">{label}</span>}
    </NavLink>
  );
};

export default SidebarItem;
