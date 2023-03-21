import { NextFunction, Request, Response } from "express";

import jwt from "jsonwebtoken";

interface UserPayload {
  id: string;
  email: string;
}

// Middleware that extract the JWT payload and set it on 'req.currentUser'
export const currentUser = (req: Request, res: Response, next: NextFunction) => {
  if (!req.session?.jwt) {
    return next();
  }
  try {
    const payload = jwt.verify(req.session.jwt, process.env.JWT_TOKEN!) as UserPayload;
    req.currentUser = payload;
  } catch (err) {
    /* empty */
  }

  next();
};
