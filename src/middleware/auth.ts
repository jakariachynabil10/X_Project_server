import { NextFunction, Request, Response } from "express";
import { jwtHelpers } from "../helper/jwtHelper";
import confiq from "../confiq";
import { Secret } from "jsonwebtoken";



const auth = () => {
  return async (
    req: Request & { user?: any },
    res: Response,
    next: NextFunction
  ) => {
    try {
      const token = req.headers.authorization;

      if (!token) {
        throw new Error("You are not authorized!");
      }

      const verifiedUser = jwtHelpers.verifyToken(
        token,
        confiq.jwt.jwt_secret as Secret
      );

      req.user = verifiedUser;
      next();
    } catch (err) {
      next(err);
    }
  };
};

export default auth
