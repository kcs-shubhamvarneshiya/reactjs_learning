import { useAppDispatch } from "../app/hooks";

const Login = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="h-screen flex items-center justify-center">
      <h1 className="text-2xl font-bold">Login Page</h1>
    </div>
  );
};

export default Login;
