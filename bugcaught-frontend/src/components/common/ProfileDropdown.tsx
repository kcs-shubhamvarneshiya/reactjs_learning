import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { logout } from "../../app/slices/authSlice";

interface Props {
  onClose: () => void;
}

const ProfileDropdown = ({ onClose }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);

  // Close on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [onClose]);

  if (!user) return null;

  return (
    <div
      ref={ref}
      className="absolute right-0 mt-3 w-64 bg-white border border-gray-200 rounded-xl shadow-lg z-50"
    >
      {/* User Info */}
      <div className="p-4 border-b">
        <p className="font-semibold text-gray-800">{user.name}</p>
        <p className="text-sm text-gray-500">{user.email}</p>
        <span className="inline-block mt-2 text-xs px-2 py-1 rounded bg-purple-100 text-primary">
          {user.role}
        </span>
      </div>

      {/* Actions */}
      <div className="p-2">
        <button
          onClick={() => {
            navigate("/profile");
            onClose();
          }}
          className="w-full text-left px-4 py-2 text-sm rounded-md hover:bg-purple-50"
        >
          Update Profile
        </button>

        <button
          onClick={() => dispatch(logout())}
          className="w-full text-left px-4 py-2 text-sm text-red-600 rounded-md hover:bg-red-50"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default ProfileDropdown;
