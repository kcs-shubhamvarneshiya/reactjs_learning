import { Router } from "express";
import { login, register } from "../../Controllers/v1/auth.controller";

const AuthRoute = Router();
AuthRoute.post("/login", login);
AuthRoute.post("/register", register);
export default AuthRoute;
