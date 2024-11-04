import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';

// import httpStatus from 'http-status';
import cookieParser from 'cookie-parser';


const app: Application = express();
app.use(cors());
app.use(cookieParser());

//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));





app.get('/', (req: Request, res: Response) => {
    res.send({
        Message: "X Project server.."
    })
});




app.use((req: Request, res: Response, next: NextFunction) => {
    res.json({
        success: false,
        message: "API NOT FOUND!",
        error: {
            path: req.originalUrl,
            message: "Your requested path is not found!"
        }
    })
})

export default app;