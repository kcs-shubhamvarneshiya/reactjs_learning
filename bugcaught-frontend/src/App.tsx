import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import Login from "./features/auth/login";

function App() {
  return <AppRoutes />;
  //(
  // <Routes>
  //   <Route path="/" element={<Navigate to="/login" />} />
  //   <Route path="/login" element={<Login />} />
  // </Routes>
  // );
}

export default App;
