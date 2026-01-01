import { useState } from "react";
import { Menu, UserCircle } from "lucide-react";
import { useAppDispatch } from "../../app/hooks";
import { toggleSidebar } from "../../app/slices/uiSlice";
import ProfileDropdown from "./ProfileDropdown";

const Header = () => {
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);

  return (
    <header className="relative flex items-center justify-between bg-white px-6 py-4 border-b border-gray-200">
      {/* Left */}
      <div className="flex items-center gap-4">
        <button
          onClick={() => dispatch(toggleSidebar())}
          className="p-2 rounded-md hover:bg-purple-100"
        >
          <Menu />
        </button>

        <h1 className="text-xl font-semibold text-gray-800">BugCaught 🐞</h1>
      </div>

      {/* Right */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2"
      >
        <UserCircle size={32} className="text-gray-600" />
      </button>

      {open && <ProfileDropdown onClose={() => setOpen(false)} />}
    </header>
  );
};

export default Header;
