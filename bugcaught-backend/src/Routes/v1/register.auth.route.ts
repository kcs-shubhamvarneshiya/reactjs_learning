import { Router } from "express";
import AuthRoute from "./auth.route";

export const v1Router: Router = Router();

v1Router.use("/auth", AuthRoute);
