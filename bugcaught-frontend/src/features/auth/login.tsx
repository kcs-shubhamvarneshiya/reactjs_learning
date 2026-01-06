import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { login } from "./auth.thunks";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import { clearError } from "../../app/slices/authSlice";

const Login = () => {
  const dispatch = useAppDispatch();
  const { isAuthenticated, user, error, loading } = useAppSelector(
    (state) => state.auth
  );

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Show error toast
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearError());
    }
  }, [error, dispatch]);

  if (isAuthenticated && user?.role === "ADMIN") {
    return <Navigate to="/admin/dashboard" />;
  }

  if (isAuthenticated && user?.role === "EMPLOYEE") {
    return <Navigate to="/employee/dashboard" />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(login({ email, password }));
        }}
        className="bg-white p-6 rounded-xl shadow w-96"
      >
        <h2 className="text-xl font-semibold mb-4">Login</h2>

        <input
          className="w-full mb-3 p-2 border rounded"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="w-full mb-3 p-2 border rounded"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          disabled={loading}
          className="w-full bg-primary py-2 rounded font-medium disabled:opacity-50"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Login;
