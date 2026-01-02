import e, { Response } from "express";
import { ZodError } from "zod";
export const successResponse = (
  res: Response,
  message: string,
  data: object,
  statusCode = 200
) => {
  res.status(statusCode).json({ statusCode, message, data });
};

export const errorResponse = (
  res: any,
  message: string,
  error: any,
  statusCode = 500
) => {
  if (error instanceof ZodError) {
    error = formatZodError(error);
    message = "Validation Error";
    statusCode = 400;
  }
  if (error && error.message) {
    message = error.message;
  }

  res.status(statusCode).json({ statusCode, message, error });
};

export const formatZodError = (error: ZodError) => {
  const errors: Record<string, string> = {};

  error.issues.forEach((issue) => {
    const field = issue.path[issue.path.length - 1] as string;

    switch (issue.code) {
      case "too_small":
        errors[field] = issue.minimum
          ? `${capitalize(field)} must be at least ${issue.minimum} characters`
          : issue.message;
        break;

      case "too_big":
        errors[field] = issue.maximum
          ? `${capitalize(field)} must be at most ${issue.maximum} characters`
          : issue.message;
        break;

      case "invalid_type":
        errors[field] = `${capitalize(field)} is required`;
        break;

      default:
        errors[field] = issue.message;
    }
  });

  return errors;
};

const capitalize = (text: string) =>
  text.charAt(0).toUpperCase() + text.slice(1);
