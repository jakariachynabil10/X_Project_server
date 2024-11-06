import { NextFunction, Request, Response } from "express"


const globalErrorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    res.json({
        success: false,
        message: err.message || "Something went wrong!",
        errorDetails: err
    })
};

export default globalErrorHandler;