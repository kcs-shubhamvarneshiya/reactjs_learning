import { Request, Response, NextFunction } from "express";
import { AuthService } from "../../Services/v1/auth.service";
import { errorResponse, successResponse } from "../../Utils/Response/response";
import { message } from "../../Utils/Secrates/constants";

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const body = req.body;
    if (!body.email || !body.password) {
      return errorResponse(
        res,
        message.MISSING_REQUIRED_FIELDS_EMAIL_PASSWORD,
        null,
        400
      );
    }
    const data = await AuthService.login(body);
    return successResponse(res, "Login successful", data, 200);
  } catch (error: any) {
    return errorResponse(res, error.message, error, 500);
  }
};

export const register = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const body = req.body;
    if (!body) {
      return errorResponse(res, message.MISSING_REQUEST_BODY, null, 400);
    }
    const user = await AuthService.register(body);

    return successResponse(
      res,
      message.USER_REGISTERED_SUCCESSFULLY,
      user,
      201
    );
  } catch (error: any) {
    return errorResponse(res, error.message, error, 500);
  }
};
