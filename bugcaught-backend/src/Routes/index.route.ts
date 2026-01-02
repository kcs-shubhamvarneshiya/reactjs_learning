import { Router } from "express";
import { v1Router } from "./v1/register.auth.route";

const router: Router = Router();

router.use("/v1", v1Router);

export { router };
