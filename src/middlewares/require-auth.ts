import { NextFunction, Response } from "express";

import { NotAuthorizedError } from "../errors/forbidden-error";

// Middleware that reject the request if the user is not logged in
export const requireAuth = (req: any, res: Response, next: NextFunction) => {
  // Assume that requireAuth is use after the currentuser middleware
  if (!req.currentUser) {
    throw new NotAuthorizedError();
  }
  next();
};
